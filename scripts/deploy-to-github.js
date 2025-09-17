import { getUncachableGitHubClient } from '../server/utils/github-client.js';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

async function deployToGitHub() {
  try {
    console.log('🚀 Starting deployment to GitHub...');
    
    const octokit = await getUncachableGitHubClient();
    
    // Get repository info
    const repoOwner = 'gerpacuity';
    const repoName = 'myclubhistory-website';
    
    console.log(`📁 Target repository: ${repoOwner}/${repoName}`);
    
    // Get current commit message with timestamp
    const timestamp = new Date().toISOString();
    const commitMessage = `Deploy MyClubHistory website - ${timestamp}`;
    
    try {
      // Initialize git if not already done
      await execAsync('git init');
      console.log('📝 Git initialized');
    } catch (error) {
      // Git might already be initialized
      console.log('📝 Git already initialized');
    }
    
    try {
      // Set up remote if not already done
      await execAsync(`git remote add origin https://github.com/${repoOwner}/${repoName}.git`);
      console.log('🔗 GitHub remote added');
    } catch (error) {
      // Remote might already exist
      console.log('🔗 GitHub remote already exists');
    }
    
    // Configure git user (required for commits)
    await execAsync('git config user.name "MyClubHistory Deploy Bot"');
    await execAsync('git config user.email "deploy@myclubhistory.com"');
    console.log('👤 Git user configured');
    
    // Add all files
    await execAsync('git add .');
    console.log('📦 Files staged for commit');
    
    // Commit changes
    await execAsync(`git commit -m "${commitMessage}"`);
    console.log('✅ Changes committed');
    
    // Push to GitHub (force push to overwrite)
    await execAsync('git push -f origin main');
    console.log('🚀 Pushed to GitHub successfully!');
    
    console.log('\n🎉 Deployment completed!');
    console.log(`📁 Repository: https://github.com/${repoOwner}/${repoName}`);
    console.log(`💬 Commit message: ${commitMessage}`);
    
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    
    // If it's a git authentication error, provide helpful instructions
    if (error.message.includes('remote: Invalid username or password')) {
      console.log('\n🔐 Authentication failed. This script needs to use personal access tokens.');
      console.log('📋 The GitHub integration should handle authentication automatically.');
    }
    
    throw error;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  deployToGitHub()
    .then(() => {
      console.log('\n✨ Script completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Script failed:', error.message);
      process.exit(1);
    });
}

export { deployToGitHub };