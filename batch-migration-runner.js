#!/usr/bin/env node

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const { spawn } = require('child_process')
const { enhancedProgressMonitor } = require('./enhanced-progress-monitor.js')

class BatchMigrationRunner {
  constructor() {
    this.migrationOrder = [
      { name: 'manufacturers', description: '🏭 Manufacturers (Foundation)', estimatedTime: '1.5 hours' },
      { name: 'product-categories', description: '📂 Product Categories (Organization)', estimatedTime: '15 minutes' },
      { name: 'vertical-markets', description: '🏢 Vertical Markets (Content Hubs)', estimatedTime: '45 minutes' },
      { name: 'products', description: '📦 Products (Enhanced Catalog)', estimatedTime: '3-4 hours' },
      { name: 'projects', description: '🏗️ Projects (Case Studies)', estimatedTime: '1 hour' },
      { name: 'team', description: '👥 Team Members (Enhancement)', estimatedTime: '30 minutes' }
    ]
  }

  async runMigration(migrationName) {
    return new Promise((resolve, reject) => {
      console.log(`\n🚀 Starting ${migrationName} migration...`)
      
      const child = spawn('node', ['ai-enhanced-migration.js', migrationName], {
        stdio: 'inherit',
        cwd: process.cwd()
      })

      child.on('close', (code) => {
        if (code === 0) {
          console.log(`✅ ${migrationName} migration completed successfully`)
          resolve()
        } else {
          console.error(`❌ ${migrationName} migration failed with exit code ${code}`)
          reject(new Error(`Migration failed: ${migrationName}`))
        }
      })

      child.on('error', (error) => {
        console.error(`❌ Failed to start ${migrationName} migration:`, error.message)
        reject(error)
      })
    })
  }

  async runProgressCheck() {
    console.log('\n📊 Checking current progress...')
    console.log('=' .repeat(50))
    await enhancedProgressMonitor()
    console.log('=' .repeat(50))
  }

  async runBatchMigration(startFrom = null) {
    console.log('🚀 Batch Migration Runner')
    console.log('=' .repeat(50))
    
    let startIndex = 0
    if (startFrom) {
      startIndex = this.migrationOrder.findIndex(m => m.name === startFrom)
      if (startIndex === -1) {
        console.error(`❌ Unknown migration: ${startFrom}`)
        return
      }
    }

    console.log('📋 Migration Plan:')
    this.migrationOrder.slice(startIndex).forEach((migration, i) => {
      const stepNumber = startIndex + i + 1
      console.log(`   ${stepNumber}. ${migration.description} (${migration.estimatedTime})`)
    })

    const totalEstimatedTime = this.calculateTotalTime(this.migrationOrder.slice(startIndex))
    console.log(`\n⏱️ Total Estimated Time: ${totalEstimatedTime}`)
    console.log('\n🔥 Starting migration sequence...')

    try {
      for (let i = startIndex; i < this.migrationOrder.length; i++) {
        const migration = this.migrationOrder[i]
        const stepNumber = i + 1
        
        console.log(`\n${'='.repeat(60)}`)
        console.log(`🏃 STEP ${stepNumber}/${this.migrationOrder.length}: ${migration.description}`)
        console.log(`⏱️ Estimated time: ${migration.estimatedTime}`)
        console.log(`${'='.repeat(60)}`)
        
        const startTime = Date.now()
        await this.runMigration(migration.name)
        const endTime = Date.now()
        const actualTime = Math.round((endTime - startTime) / 1000 / 60)
        
        console.log(`✅ Step ${stepNumber} completed in ${actualTime} minutes`)
        
        // Progress check after each migration
        await this.runProgressCheck()
        
        // Brief pause between migrations
        if (i < this.migrationOrder.length - 1) {
          console.log('\n⏸️ Pausing 30 seconds before next migration...')
          await new Promise(resolve => setTimeout(resolve, 30000))
        }
      }

      console.log('\n🎉 BATCH MIGRATION COMPLETE!')
      console.log('=' .repeat(60))
      console.log('🏆 All migrations have been completed successfully!')
      console.log('📊 Running final progress check...')
      
      await this.runProgressCheck()
      
      console.log('\n🚀 Your AI-enhanced platform is ready!')
      console.log('   • Professional content generated and enhanced')
      console.log('   • Smart relationships mapped throughout')
      console.log('   • Quality metrics tracked for all content')
      console.log('   • SEO optimization applied across the board')
      
    } catch (error) {
      console.error('\n❌ Batch migration failed:', error.message)
      console.log('\n🔧 Troubleshooting:')
      console.log('   1. Check the error logs above')
      console.log('   2. Run progress monitor: node enhanced-progress-monitor.js')
      console.log('   3. Resume from failed step or run individual migrations')
      throw error
    }
  }

  async runTestMigrations() {
    console.log('🧪 Running All Test Migrations')
    console.log('=' .repeat(50))
    
    const testCommands = [
      { name: 'test-manufacturer-migration.js', description: '🏭 Manufacturers' },
      { name: 'test-product-categories.js', description: '📂 Product Categories' },
      { name: 'test-vertical-markets.js', description: '🏢 Vertical Markets' },
      { name: 'test-products.js', description: '📦 Products' }
    ]
    
    for (const test of testCommands) {
      try {
        console.log(`\n🧪 Testing ${test.description}...`)
        await this.runTestScript(test.name)
        console.log(`✅ ${test.description} test passed`)
      } catch (error) {
        console.error(`❌ ${test.description} test failed:`, error.message)
        throw error
      }
    }
    
    console.log('\n🎉 All tests passed! Ready for full migration.')
  }

  async runTestScript(scriptName) {
    return new Promise((resolve, reject) => {
      const child = spawn('node', [scriptName], {
        stdio: 'inherit',
        cwd: process.cwd()
      })

      child.on('close', (code) => {
        if (code === 0) {
          resolve()
        } else {
          reject(new Error(`Test failed: ${scriptName}`))
        }
      })

      child.on('error', (error) => {
        reject(error)
      })
    })
  }

  calculateTotalTime(migrations) {
    // Simplified calculation - could be more sophisticated
    let totalMinutes = 0
    migrations.forEach(m => {
      if (m.estimatedTime.includes('hour')) {
        const hours = parseFloat(m.estimatedTime.match(/(\d+(?:\.\d+)?)/)[1])
        totalMinutes += hours * 60
      } else if (m.estimatedTime.includes('minute')) {
        const minutes = parseFloat(m.estimatedTime.match(/(\d+)/)[1])
        totalMinutes += minutes
      }
    })
    
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    
    if (hours > 0) {
      return `${hours}h ${Math.round(minutes)}m`
    } else {
      return `${Math.round(totalMinutes)}m`
    }
  }
}

async function main() {
  const runner = new BatchMigrationRunner()
  const args = process.argv.slice(2)
  const command = args[0]
  
  try {
    switch (command) {
      case 'test':
        await runner.runTestMigrations()
        break
        
      case 'all':
        await runner.runBatchMigration()
        break
        
      case 'from':
        const startFrom = args[1]
        if (!startFrom) {
          console.error('❌ Please specify migration to start from')
          console.log('   Example: node batch-migration-runner.js from vertical-markets')
          return
        }
        await runner.runBatchMigration(startFrom)
        break
        
      case 'status':
        await runner.runProgressCheck()
        break
        
      default:
        console.log(`
🚀 Batch Migration Runner

Usage:
  node batch-migration-runner.js <command>

Commands:
  test     - Run all test migrations to validate setup
  all      - Run complete migration sequence
  from <migration> - Start from specific migration
  status   - Check current migration progress

Examples:
  node batch-migration-runner.js test
  node batch-migration-runner.js all
  node batch-migration-runner.js from vertical-markets
  node batch-migration-runner.js status
        `)
    }
  } catch (error) {
    console.error('❌ Batch runner failed:', error.message)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = BatchMigrationRunner 