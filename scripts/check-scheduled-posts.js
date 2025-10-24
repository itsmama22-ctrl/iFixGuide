#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Check for posts scheduled for today
 * Returns the count of scheduled posts and their details
 */
function checkScheduledPosts() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  console.log(`🔍 Checking for posts scheduled for: ${today}`);
  
  const postsDir = path.join(process.cwd(), 'content', 'posts');
  const scheduledPosts = [];
  
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
          
          if (frontmatter.publishDate === today) {
            scheduledPosts.push({
              title: frontmatter.title || 'Untitled',
              publishDate: frontmatter.publishDate,
              category: path.dirname(filePath).split('/').pop(),
              slug: path.basename(filePath, '.md'),
              filePath: filePath
            });
          }
        } catch (error) {
          console.warn(`⚠️ Error reading file ${filePath}:`, error.message);
        }
      }
    }
  }
  
  findMarkdownFiles(postsDir);
  
  console.log(`📊 Found ${scheduledPosts.length} post(s) scheduled for today:`);
  
  if (scheduledPosts.length > 0) {
    scheduledPosts.forEach((post, index) => {
      console.log(`  ${index + 1}. ${post.title} (${post.category})`);
    });
    
    // Set GitHub Actions output
    if (process.env.GITHUB_OUTPUT) {
      const fs = require('fs');
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `should_deploy=true\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `posts_count=${scheduledPosts.length}\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `scheduled_posts=${JSON.stringify(scheduledPosts)}\n`);
    }
    
    return {
      shouldDeploy: true,
      count: scheduledPosts.length,
      posts: scheduledPosts
    };
  } else {
    console.log('ℹ️ No posts scheduled for today');
    
    // Set GitHub Actions output
    if (process.env.GITHUB_OUTPUT) {
      const fs = require('fs');
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `should_deploy=false\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `posts_count=0\n`);
    }
    
    return {
      shouldDeploy: false,
      count: 0,
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
