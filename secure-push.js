#!/usr/bin/env node

// Secure GitHub push using stored token from Replit Secrets
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function securePushToGitHub() {
  try {
    console.log('🚀 MyClubHistory Secure Push to GitHub');
    console.log('======================================');

    // Get token from Replit Secrets
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      console.error('❌ Error: GITHUB_TOKEN not found in secrets');
      console.log('💡 Please add your GitHub token to Replit Secrets with key: GITHUB_TOKEN');
      process.exit(1);
    }

    const repoOwner = 'gerpacuity';
    const repoName = 'myclubhistory-website';
    const repoUrl = `https://${token}@github.com/${repoOwner}/${repoName}.git`;

    // Create timestamp for commit message
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
    const commitMessage = `Deploy MyClubHistory website - ${timestamp}`;

    console.log(`📝 Commit message: ${commitMessage}`);

    // Initialize git if needed
    try {
      await execAsync('git init');
      console.log('📝 Git initialized');
    } catch (error) {
      console.log('📝 Git already initialized');
    }

    // Configure git user
    await execAsync('git config user.name "MyClubHistory Deploy Bot"');
    await execAsync('git config user.email "deploy@myclubhistory.com"');
    console.log('👤 Git user configured');

    // Set remote with token authentication
    try {
      await execAsync(`git remote add origin ${repoUrl}`);
      console.log('🔗 GitHub remote added');
    } catch (error) {
      // Update existing remote
      await execAsync(`git remote set-url origin ${repoUrl}`);
      console.log('🔗 GitHub remote updated');
    }

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

    console.log('\n🎉 Successfully pushed to GitHub!');
    console.log(`📁 Repository: https://github.com/${repoOwner}/${repoName}`);
    console.log(`💬 Commit: ${commitMessage}`);

  } catch (error) {
    console.error('\n❌ Push failed:', error.message);
    
    if (error.message.includes('remote:') || error.message.includes('fatal:')) {
      console.log('\n💡 Troubleshooting tips:');
      console.log('   • Verify your GitHub token has the correct permissions');
      console.log('   • Check that the token is stored in Replit Secrets as GITHUB_TOKEN');
      console.log('   • Ensure you have write access to the repository');
    }
    
    process.exit(1);
  }
}

// Run the secure push
securePushToGitHub();