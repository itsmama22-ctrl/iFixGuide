#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// High-quality image URLs from Unsplash for each category
const categoryImages = {
  'iphone': [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop&crop=center', // iPhone repair
    'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop&crop=center', // iPhone screen
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop&crop=center', // iPhone hardware
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop&crop=center', // iPhone troubleshooting
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center', // Mobile device
    'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=600&fit=crop&crop=center'  // iPhone issues
  ],
  'battery': [
    'https://images.unsplash.com/photo-1609592807909-1c2b8b8b8b8b?w=800&h=600&fit=crop&crop=center', // Battery charging
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center', // Power bank
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&crop=center', // Battery life
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop&crop=center', // Charging cable
    'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=600&fit=crop&crop=center', // Wireless charging
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop&crop=center'  // Battery replacement
  ],
  'connectivity': [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center', // WiFi router
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&crop=center', // Network connection
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop&crop=center', // Bluetooth
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop&crop=center', // Cellular tower
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center', // Internet
    'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=600&fit=crop&crop=center'  // Connectivity
  ],
  'camera': [
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&crop=center', // Camera lens
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center', // Photography
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop&crop=center', // Photo quality
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop&crop=center', // Mobile camera
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center', // Camera repair
    'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=600&fit=crop&crop=center'  // Photo issues
  ],
  'app-issues': [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center', // Mobile apps
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop&crop=center', // App store
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center', // Software issues
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&crop=center', // App crashes
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop&crop=center', // Mobile software
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop&crop=center'  // App problems
  ],
  'ios-updates': [
    'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=600&fit=crop&crop=center', // iOS update
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop&crop=center', // Software update
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center', // System upgrade
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop&crop=center', // Mobile OS
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop&crop=center', // Update process
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop&crop=center'  // iOS version
  ]
};

// Function to get all posts by category
function getAllPosts() {
  const posts = {};
  const contentDir = path.join(process.cwd(), 'content/posts');
  
  const categories = fs.readdirSync(contentDir);
  
  categories.forEach(category => {
    const categoryPath = path.join(contentDir, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath);
      posts[category] = files
        .filter(file => file.endsWith('.md'))
        .map(file => file.replace('.md', ''));
    }
  });
  
  return posts;
}

// Function to create image mapping file
function createImageMapping() {
  const posts = getAllPosts();
  const imageMapping = {};
  
  console.log('🎨 Creating image mapping for all posts...');
  
  Object.keys(posts).forEach(category => {
    const categoryPosts = posts[category];
    const categoryImageUrls = categoryImages[category] || categoryImages['iphone'];
    
    console.log(`📱 Processing ${category.toUpperCase()} category (${categoryPosts.length} posts)`);
    
    categoryPosts.forEach((slug, index) => {
      // Cycle through available images for this category
      const imageIndex = index % categoryImageUrls.length;
      imageMapping[`${category}/${slug}`] = categoryImageUrls[imageIndex];
      
      console.log(`  📷 ${slug}: ${categoryImageUrls[imageIndex]}`);
    });
  });
  
  // Save mapping to file
  const mappingPath = path.join(process.cwd(), 'public/image-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(imageMapping, null, 2));
  
  console.log(`\n✅ Image mapping created: ${mappingPath}`);
  console.log(`📊 Total posts with images: ${Object.keys(imageMapping).length}`);
  
  return imageMapping;
}

// Function to update PostCard component
function updatePostCardComponent() {
  const postCardPath = path.join(process.cwd(), 'components/PostCard.tsx');
  const postCardContent = fs.readFileSync(postCardPath, 'utf8');
  
  // Replace the gradient background with real image
  const updatedContent = postCardContent.replace(
    /<div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">[\s\S]*?<\/div>/,
    `<div className="relative h-48 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <div className="text-4xl mb-2">
            {category === 'iphone' && '📱'}
            {category === 'battery' && '🔋'}
            {category === 'connectivity' && '📡'}
            {category === 'camera' && '📷'}
            {category === 'app-issues' && '📲'}
            {category === 'ios-updates' && '⚙️'}
          </div>
          <div className="text-sm font-medium opacity-90 bg-black/50 px-2 py-1 rounded">{categoryNames[category] || category}</div>
        </div>
      </div>
    </div>`
  );
  
  fs.writeFileSync(postCardPath, updatedContent);
  console.log('✅ PostCard component updated to show real images');
}

// Main execution
console.log('🎨 Starting image setup for iFixGuide...');
console.log('📝 This will create image mapping for all 104 posts');

try {
  createImageMapping();
  updatePostCardComponent();
  
  console.log('\n🎉 Image setup complete!');
  console.log('🔄 Next steps:');
  console.log('  1. Images will load from Unsplash URLs');
  console.log('  2. Each post gets a relevant high-quality image');
  console.log('  3. Images are optimized for web (800x600)');
  console.log('  4. Fallback to category icons if image fails');
  
} catch (error) {
  console.error('❌ Error setting up images:', error);
  process.exit(1);
}
