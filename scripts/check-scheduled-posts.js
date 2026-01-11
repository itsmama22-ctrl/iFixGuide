#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Check for posts scheduled for today OR missed posts from past dates
 * Returns the count of scheduled posts and their details
 */
function checkScheduledPosts() {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0]; // YYYY-MM-DD format
  const currentDate = new Date(todayStr + 'T00:00:00.000Z');
  
  // Check posts from up to 7 days ago to catch any missed posts (prevents catching very old posts)
  const lookbackDate = new Date(currentDate);
  lookbackDate.setDate(lookbackDate.getDate() - 7);
  
  console.log(`🔍 Checking for posts scheduled from ${lookbackDate.toISOString().split('T')[0]} to ${todayStr}`);
  
  const postsDir = path.join(process.cwd(), 'content', 'posts');
  const scheduledPosts = [];
  const todayPosts = [];
  const missedPosts = [];
  
  // Recursively find all markdown files
  function findMarkdownFiles(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findMarkdownFiles(filePath);
      } else if (file.endsWith('.md')) {
        try {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          const { data: frontmatter } = matter(fileContent);
          
          const publishDate = frontmatter.publishDate || frontmatter.date;
          if (publishDate) {
            const pubDate = new Date(publishDate + 'T00:00:00.000Z');
            
            // Include posts scheduled for today or in the past (up to 30 days)
            if (pubDate >= lookbackDate && pubDate <= currentDate) {
              const post = {
                title: frontmatter.title || 'Untitled',
                publishDate: publishDate,
                category: path.dirname(filePath).split('/').pop(),
                slug: path.basename(filePath, '.md'),
                filePath: filePath
              };
              
              scheduledPosts.push(post);
              
              if (publishDate === todayStr) {
                todayPosts.push(post);
              } else if (pubDate < currentDate) {
                missedPosts.push(post);
              }
            }
          }
        } catch (error) {
          console.warn(`⚠️ Error reading file ${filePath}:`, error.message);
        }
      }
    }
  }
  
  findMarkdownFiles(postsDir);
  
  console.log(`📊 Found ${scheduledPosts.length} post(s) to publish:`);
  if (todayPosts.length > 0) {
    console.log(`  ✅ ${todayPosts.length} scheduled for today`);
  }
  if (missedPosts.length > 0) {
    console.log(`  ⚠️  ${missedPosts.length} missed from previous days (catching up)`);
  }
  
  if (scheduledPosts.length > 0) {
    if (todayPosts.length > 0) {
      console.log(`\n📅 Today's posts (${todayPosts.length}):`);
      todayPosts.forEach((post, index) => {
        console.log(`  ${index + 1}. ${post.title} (${post.category})`);
      });
    }
    
    if (missedPosts.length > 0) {
      console.log(`\n⏰ Catching up missed posts (${missedPosts.length}):`);
      missedPosts.slice(0, 5).forEach((post, index) => {
        const daysLate = Math.floor((currentDate - new Date(post.publishDate + 'T00:00:00.000Z')) / (1000 * 60 * 60 * 24));
        console.log(`  ${index + 1}. [${post.publishDate}] ${post.title} (${post.category}) - ${daysLate} day(s) late`);
      });
      if (missedPosts.length > 5) {
        console.log(`  ... and ${missedPosts.length - 5} more missed posts`);
      }
    }
    
    // Set GitHub Actions output
    if (process.env.GITHUB_OUTPUT) {
      const fs = require('fs');
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `should_deploy=true\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `posts_count=${scheduledPosts.length}\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `today_posts=${todayPosts.length}\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `missed_posts=${missedPosts.length}\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `scheduled_posts=${JSON.stringify(scheduledPosts)}\n`);
    }
    
    return {
      shouldDeploy: true,
      count: scheduledPosts.length,
      todayCount: todayPosts.length,
      missedCount: missedPosts.length,
      posts: scheduledPosts
    };
  } else {
    console.log('ℹ️ No posts scheduled for today or missed from previous days');
    
    // Set GitHub Actions output
    if (process.env.GITHUB_OUTPUT) {
      const fs = require('fs');
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `should_deploy=false\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `posts_count=0\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `today_posts=0\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `missed_posts=0\n`);
    }
    
    return {
      shouldDeploy: false,
      count: 0,
      todayCount: 0,
      missedCount: 0,
      posts: []
    };
  }
}

// Run the check if this script is executed directly
if (require.main === module) {
  const result = checkScheduledPosts();
  process.exit(result.shouldDeploy ? 0 : 1);
}

module.exports = { checkScheduledPosts };
