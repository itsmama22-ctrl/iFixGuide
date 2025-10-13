#!/usr/bin/env python3
"""
Download high-quality illustrations for all iFixGuide posts
"""

import os
import requests
from pathlib import Path
import json

# Unsplash API configuration
UNSPLASH_ACCESS_KEY = "your_unsplash_access_key_here"  # Get from https://unsplash.com/developers
BASE_URL = "https://api.unsplash.com"

# Image categories and their search terms
CATEGORY_IMAGES = {
    'iphone': [
        'iphone-troubleshooting',
        'iphone-repair',
        'iphone-screen-issues',
        'iphone-hardware',
        'mobile-device-repair',
        'smartphone-problems'
    ],
    'battery': [
        'iphone-battery',
        'battery-replacement',
        'charging-issues',
        'power-problems',
        'battery-life',
        'wireless-charging'
    ],
    'connectivity': [
        'wifi-connection',
        'bluetooth-pairing',
        'cellular-network',
        'internet-connection',
        'network-troubleshooting',
        'connectivity-issues'
    ],
    'camera': [
        'iphone-camera',
        'photography-issues',
        'camera-repair',
        'photo-quality',
        'camera-problems',
        'mobile-photography'
    ],
    'app-issues': [
        'mobile-apps',
        'app-store',
        'software-issues',
        'app-crashes',
        'mobile-software',
        'app-problems'
    ],
    'ios-updates': [
        'ios-update',
        'software-update',
        'system-upgrade',
        'mobile-operating-system',
        'update-process',
        'ios-version'
    ]
}

def download_image(url, filepath):
    """Download image from URL and save to filepath"""
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        
        with open(filepath, 'wb') as f:
            f.write(response.content)
        
        print(f"✅ Downloaded: {filepath}")
        return True
    except Exception as e:
        print(f"❌ Failed to download {url}: {e}")
        return False

def get_unsplash_image(query, width=800, height=600):
    """Get image URL from Unsplash"""
    try:
        url = f"{BASE_URL}/photos/random"
        params = {
            'query': query,
            'w': width,
            'h': height,
            'client_id': UNSPLASH_ACCESS_KEY
        }
        
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        
        data = response.json()
        return data['urls']['regular']
    except Exception as e:
        print(f"❌ Failed to get Unsplash image for '{query}': {e}")
        return None

def get_posts_by_category():
    """Get all posts organized by category"""
    posts = {}
    content_dir = Path('content/posts')
    
    for category_dir in content_dir.iterdir():
        if category_dir.is_dir():
            category = category_dir.name
            posts[category] = []
            
            for md_file in category_dir.glob('*.md'):
                slug = md_file.stem
                posts[category].append(slug)
    
    return posts

def download_category_images():
    """Download images for each category"""
    posts = get_posts_by_category()
    
    for category, post_slugs in posts.items():
        print(f"\n📱 Processing {category.upper()} category ({len(post_slugs)} posts)")
        
        # Get search terms for this category
        search_terms = CATEGORY_IMAGES.get(category, ['mobile-device'])
        
        # Download one image per post
        for i, slug in enumerate(post_slugs):
            # Cycle through search terms
            search_term = search_terms[i % len(search_terms)]
            
            print(f"  📷 Downloading image for: {slug}")
            
            # Get image URL from Unsplash
            image_url = get_unsplash_image(search_term)
            
            if image_url:
                # Save image
                filepath = f"public/images/{category}/{slug}.jpg"
                download_image(image_url, filepath)
            else:
                print(f"  ⚠️  Skipping {slug} - no image found")

def download_fallback_images():
    """Download fallback images for each category"""
    fallback_images = {
        'iphone': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
        'battery': 'https://images.unsplash.com/photo-1609592807909-1c2b8b8b8b8b?w=800&h=600&fit=crop',
        'connectivity': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'camera': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop',
        'app-issues': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        'ios-updates': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
    }
    
    for category, url in fallback_images.items():
        filepath = f"public/images/{category}/category-default.jpg"
        download_image(url, filepath)

if __name__ == "__main__":
    print("🎨 Starting image download for iFixGuide...")
    print("📝 This will download high-quality illustrations for all 104 posts")
    
    # Create directories
    for category in CATEGORY_IMAGES.keys():
        os.makedirs(f"public/images/{category}", exist_ok=True)
    
    # Download images
    download_category_images()
    download_fallback_images()
    
    print("\n✅ Image download complete!")
    print("🔄 Next: Update PostCard component to show real images")
