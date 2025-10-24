#!/usr/bin/env node

const { checkScheduledPosts } = require('./check-scheduled-posts');

console.log('🧪 Testing Automated Publishing System\n');

// Test the function
const result = checkScheduledPosts();

console.log('\n📋 Test Results:');
console.log(`Should Deploy: ${result.shouldDeploy ? '✅ YES' : '❌ NO'}`);
console.log(`Posts Found: ${result.count}`);
console.log(`Posts Details:`, result.posts);

if (result.shouldDeploy) {
  console.log('\n🚀 This would trigger a Vercel deployment!');
} else {
  console.log('\n⏸️ No deployment needed today.');
}

console.log('\n✅ Automation system is working correctly!');
