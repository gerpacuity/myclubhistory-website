#!/bin/bash

# MyClubHistory Auto-Deploy Script
# This script automatically pushes code to GitHub when republishing

echo "🚀 MyClubHistory Auto-Deploy to GitHub"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project root directory"
    exit 1
fi

# Create timestamp for commit message
TIMESTAMP=$(date -u +"%Y-%m-%d %H:%M:%S UTC")
COMMIT_MESSAGE="Auto-deploy MyClubHistory website - $TIMESTAMP"

echo "📝 Commit message: $COMMIT_MESSAGE"

# Initialize git if needed (ignore errors if already initialized)
git init 2>/dev/null || true

# Add GitHub remote if not already added
git remote add origin https://github.com/gerpacuity/myclubhistory-website.git 2>/dev/null || true

# Configure git user for commits
git config user.name "MyClubHistory Deploy Bot"
git config user.email "deploy@myclubhistory.com"

# Add all changes
echo "📦 Staging all changes..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
    exit 0
fi

# Commit changes
echo "✅ Committing changes..."
git commit -m "$COMMIT_MESSAGE"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -f origin main

if [ $? -eq 0 ]; then
    echo "🎉 Successfully deployed to GitHub!"
    echo "📁 Repository: https://github.com/gerpacuity/myclubhistory-website"
else
    echo "❌ Failed to push to GitHub"
    echo "💡 Make sure the GitHub integration is properly set up"
    exit 1
fi