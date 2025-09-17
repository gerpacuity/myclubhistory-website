#!/usr/bin/env node

// Simple deployment script for MyClubHistory website
// Automatically pushes code to GitHub repository

import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function deployToGitHub() {
  try {
    console.log('🚀 MyClubHistory Auto-Deploy to GitHub');
    console.log('========================================');

    // Create timestamp for commit message
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
    const commitMessage = `Deploy MyClubHistory website - ${timestamp}`;

    console.log(`📝 Commit message: ${commitMessage}`);

    // Set up repository if needed
    try {
      await execAsync('git init');
      console.log('📝 Git initialized');
    } catch (error) {
      console.log('📝 Git already initialized');
    }

    try {
      await execAsync('git remote add origin https://github.com/gerpacuity/myclubhistory-website.git');
      console.log('🔗 GitHub remote added');
    } catch (error) {
      console.log('🔗 GitHub remote already exists');
    }

    // Configure git user
    await execAsync('git config user.name "MyClubHistory Deploy Bot"');
    await execAsync('git config user.email "deploy@myclubhistory.com"');
    console.log('👤 Git user configured');

    // Add all changes
    console.log('📦 Staging all changes...');
    await execAsync('git add .');

    // Check if there are changes to commit
    try {
      const { stdout } = await execAsync('git diff --staged --name-only');
      if (!stdout.trim()) {
        console.log('ℹ️  No changes to commit');
        return;
      }
      console.log('📄 Changes detected:', stdout.trim().split('\n').length, 'files');
    } catch (error) {
      // Continue with commit anyway
    }

    // Commit changes
    console.log('✅ Committing changes...');
    await execAsync(`git commit -m "${commitMessage}"`);

    // Push to GitHub
    console.log('🚀 Pushing to GitHub...');
    await execAsync('git push -f origin main');

    console.log('\n🎉 Successfully deployed to GitHub!');
    console.log('📁 Repository: https://github.com/gerpacuity/myclubhistory-website');
    console.log(`💬 Commit: ${commitMessage}`);

  } catch (error) {
    console.error('\n❌ Deployment failed:', error.message);
    
    if (error.message.includes('remote:') || error.message.includes('fatal:')) {
      console.log('\n💡 Troubleshooting tips:');
      console.log('   • Make sure the GitHub integration is properly connected');
      console.log('   • Check that you have write access to the repository');
      console.log('   • Verify the repository URL is correct');
    }
    
    process.exit(1);
  }
}

// Run the deployment
deployToGitHub();