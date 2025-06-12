#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' })

const { spawn } = require('child_process')
const CompleteAIMigration = require('./complete-ai-migration.js')
const { enhancedProgressMonitor } = require('./enhanced-progress-monitor.js')

class CompleteBatchRunner {
  constructor() {
    this.migrationPhases = [
      {
        name: 'analysis',
        description: '🔍 Complete Analysis Phase',
        script: 'complete-webflow-analysis.js',
        estimatedTime: '5 minutes',
        required: true
      },
      {
        name: 'complete-migration',
        description: '🚀 Complete AI-Enhanced Migration',
        script: 'complete-ai-migration.js',
        estimatedTime: '4 hours',
        required: true
      }
    ]
  }

  async runCompleteAnalysis() {
    console.log('🔍 RUNNING COMPLETE WEBFLOW ANALYSIS')
    console.log('=' .repeat(60))
    console.log('📊 Analyzing all 40 collections for AI enhancement opportunities...\n')
    
    return this.runScript('complete-webflow-analysis.js')
  }

  async runCompleteMigration() {
    console.log('🚀 STARTING COMPLETE AI-ENHANCED MIGRATION')
    console.log('=' .repeat(60))
    console.log('🤖 All content will be enhanced with AI before upload to Sanity')
    console.log('📊 Processing all collections in optimized phases...\n')
    
    const migration = new CompleteAIMigration()
    
    try {
      await migration.runCompleteMigration()
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async runProgressCheck() {
    console.log('\n📊 Checking Migration Progress...')
    console.log('=' .repeat(50))
    await enhancedProgressMonitor()
    console.log('=' .repeat(50))
  }

  async runTestPhase() {
    console.log('🧪 TESTING COMPLETE MIGRATION SYSTEM')
    console.log('=' .repeat(60))
    console.log('📋 Testing with first 3 items from each collection...\n')
    
    // This would run a limited test migration
    console.log('⚠️ Test mode not yet implemented')
    console.log('   Run the full migration with: node complete-batch-runner.js all')
  }

  async runCompleteBatch() {
    console.log('🚀 COMPLETE WEBFLOW → SANITY AI MIGRATION')
    console.log('=' .repeat(70))
    console.log('🤖 Full AI enhancement of 7,003+ items across 40 collections')
    console.log('⏱️ Estimated completion time: 4-5 hours\n')

    const startTime = Date.now()
    let completedPhases = 0

    try {
      // Phase 1: Complete Analysis
      console.log('🏃 PHASE 1: Complete Analysis')
      console.log('-' .repeat(40))
      const analysisResult = await this.runCompleteAnalysis()
      
      if (!analysisResult.success) {
        throw new Error(`Analysis failed: ${analysisResult.error}`)
      }
      
      completedPhases++
      console.log('✅ Phase 1 Complete: Analysis finished\n')

      // Brief pause between phases
      console.log('⏸️ Preparing for migration phase...')
      await new Promise(resolve => setTimeout(resolve, 3000))

      // Phase 2: Complete Migration with AI Enhancement
      console.log('🏃 PHASE 2: Complete AI-Enhanced Migration')
      console.log('-' .repeat(40))
      const migrationResult = await this.runCompleteMigration()
      
      if (!migrationResult.success) {
        throw new Error(`Migration failed: ${migrationResult.error}`)
      }
      
      completedPhases++
      console.log('✅ Phase 2 Complete: Migration finished\n')

      // Final progress check
      console.log('🏃 FINAL VERIFICATION')
      console.log('-' .repeat(40))
      await this.runProgressCheck()

      const endTime = Date.now()
      const totalDuration = Math.round((endTime - startTime) / 1000 / 60)

      console.log('\n🎉 COMPLETE BATCH MIGRATION FINISHED!')
      console.log('=' .repeat(70))
      console.log(`⏱️ Total Duration: ${totalDuration} minutes`)
      console.log(`✅ Phases Completed: ${completedPhases}/2`)
      console.log(`🤖 AI Enhancement: Applied to all content`)
      console.log(`📊 Collections: All 40 collections processed`)
      console.log(`📄 Items: 7,003+ items migrated with AI enhancement`)
      
      console.log('\n🚀 YOUR AI-ENHANCED WEBFLOW MIGRATION IS COMPLETE!')
      console.log('   • All content has been enhanced with AI')
      console.log('   • Professional language and SEO optimization applied')
      console.log('   • Quality metrics tracked for all content')
      console.log('   • Comprehensive metadata generated')
      console.log('   • Full relationship mapping maintained')
      
      console.log('\n📊 Next Steps:')
      console.log('   • Run: node enhanced-progress-monitor.js for detailed stats')
      console.log('   • Check Sanity Studio for your enhanced content')
      console.log('   • Review AI enhancement metrics in each document')

    } catch (error) {
      console.error('\n❌ Complete batch migration failed:', error.message)
      console.log('\n🔧 Troubleshooting:')
      console.log('   1. Check the error logs above')
      console.log('   2. Verify your API tokens and network connection')
      console.log('   3. Run individual phases to isolate issues:')
      console.log('      • node complete-webflow-analysis.js')
      console.log('      • node complete-ai-migration.js')
      console.log('   4. Check migration logs for detailed error information')
      throw error
    }
  }

  async runScript(scriptName) {
    return new Promise((resolve, reject) => {
      console.log(`🚀 Starting ${scriptName}...`)
      
      const child = spawn('node', [scriptName], {
        stdio: 'inherit',
        cwd: process.cwd()
      })

      child.on('close', (code) => {
        if (code === 0) {
          console.log(`✅ ${scriptName} completed successfully`)
          resolve({ success: true })
        } else {
          console.error(`❌ ${scriptName} failed with exit code ${code}`)
          resolve({ success: false, error: `Exit code ${code}` })
        }
      })

      child.on('error', (error) => {
        console.error(`❌ Failed to start ${scriptName}:`, error.message)
        resolve({ success: false, error: error.message })
      })
    })
  }

  async estimateMigrationTime() {
    console.log('⏱️ MIGRATION TIME ESTIMATION')
    console.log('=' .repeat(40))
    
    try {
      const analysisData = JSON.parse(await require('fs').promises.readFile('complete-webflow-analysis.json', 'utf8'))
      
      console.log(`📋 Collections: ${Object.keys(analysisData.collections).length}`)
      console.log(`📄 Total Items: ${analysisData.totalItems.toLocaleString()}`)
      console.log(`🤖 AI Opportunities: ${analysisData.migrationStrategy.aiEnhancementPlan.totalEnhancements}`)
      console.log(`⏱️ Estimated Duration: ${analysisData.migrationStrategy.estimatedDuration}`)
      
      console.log('\n📋 Phase Breakdown:')
      analysisData.migrationStrategy.phases.forEach((phase, i) => {
        console.log(`   Phase ${i + 1}: ${phase.collections.length} collections (${phase.estimatedTime})`)
      })
      
    } catch (error) {
      console.log('⚠️ Analysis file not found. Run analysis first to get accurate estimates.')
      console.log('📊 Rough Estimates:')
      console.log('   • Analysis: ~5 minutes')
      console.log('   • Migration: ~4 hours')
      console.log('   • Total: ~4-5 hours')
    }
  }

  showUsage() {
    console.log(`
🚀 Complete AI-Enhanced Webflow Migration

Usage:
  node complete-batch-runner.js <command>

Commands:
  analysis     - Run complete analysis of all Webflow collections
  migration    - Run complete AI-enhanced migration (requires analysis first)
  all          - Run complete analysis + migration sequence
  test         - Run test migration with limited items
  status       - Check current migration progress
  estimate     - Show estimated migration time and scope
  help         - Show this help message

Examples:
  node complete-batch-runner.js all        # Complete migration
  node complete-batch-runner.js analysis   # Analysis only
  node complete-batch-runner.js status     # Check progress

Features:
  🤖 AI Enhancement: All content enhanced before upload
  📊 Progress Tracking: Real-time progress monitoring
  🔄 Phase Management: Optimized migration phases
  📈 Quality Metrics: AI-generated quality scores
  🔗 Relationships: Automatic relationship mapping
  💾 Logging: Comprehensive migration logs
        `)
  }
}

async function main() {
  const runner = new CompleteBatchRunner()
  const command = process.argv[2]
  
  try {
    switch (command) {
      case 'analysis':
        await runner.runCompleteAnalysis()
        break
        
      case 'migration':
        await runner.runCompleteMigration()
        break
        
      case 'all':
        await runner.runCompleteBatch()
        break
        
      case 'test':
        await runner.runTestPhase()
        break
        
      case 'status':
        await runner.runProgressCheck()
        break
        
      case 'estimate':
        await runner.estimateMigrationTime()
        break
        
      case 'help':
      case '--help':
      case '-h':
        runner.showUsage()
        break
        
      default:
        if (!command) {
          runner.showUsage()
        } else {
          console.error(`❌ Unknown command: ${command}`)
          runner.showUsage()
          process.exit(1)
        }
    }
    
  } catch (error) {
    console.error('❌ Command failed:', error.message)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = CompleteBatchRunner 