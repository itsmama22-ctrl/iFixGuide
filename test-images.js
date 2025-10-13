// Quick test to see what images are being generated
const fs = require('fs');
const path = require('path');

// Load image mapping
const imageMappingPath = path.join(process.cwd(), 'public/image-mapping.json');
let imageMapping = {};

try {
  const mappingContent = fs.readFileSync(imageMappingPath, 'utf8');
  imageMapping = JSON.parse(mappingContent);
  console.log('✅ Image mapping loaded successfully');
  console.log(`📊 Total images: ${Object.keys(imageMapping).length}`);
  
  // Test a few specific posts
  const testPosts = [
    'iphone/iphone-wont-turn-on',
    'battery/iphone-not-charging',
    'camera/iphone-camera-black-screen'
  ];
  
  console.log('\n🧪 Testing specific posts:');
  testPosts.forEach(post => {
    const imageUrl = imageMapping[post];
    console.log(`${post}: ${imageUrl || '❌ NO IMAGE'}`);
  });
  
} catch (error) {
  console.error('❌ Error loading image mapping:', error);
}

// Test if the posts utility would work
console.log('\n🔍 Testing posts utility...');
try {
  // Simulate what getAllPosts does
  const contentDir = path.join(process.cwd(), 'content/posts');
  const categories = fs.readdirSync(contentDir);
  
  let totalPosts = 0;
  let postsWithImages = 0;
  
  categories.forEach(category => {
    const categoryPath = path.join(contentDir, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath);
      const posts = files.filter(file => file.endsWith('.md'));
      
      posts.forEach(post => {
        totalPosts++;
        const slug = post.replace('.md', '');
        const imageUrl = imageMapping[`${category}/${slug}`];
        if (imageUrl) postsWithImages++;
      });
    }
  });
  
  console.log(`📊 Total posts: ${totalPosts}`);
  console.log(`🖼️ Posts with images: ${postsWithImages}`);
  console.log(`📈 Coverage: ${Math.round((postsWithImages/totalPosts)*100)}%`);
  
} catch (error) {
  console.error('❌ Error testing posts:', error);
}
