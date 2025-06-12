# Webflow API Migration Setup Guide

This guide shows you how to migrate from Webflow to Sanity using the **API approach** instead of CSV to avoid schema issues.

## 🔧 **Setup Steps**

### 1. Get Webflow API Credentials
```bash
# Go to: https://webflow.com/dashboard/integrations
# Create a new API token with:
# - Site access: Read
# - Collections access: Read

# Add to your .env.local:
WEBFLOW_API_TOKEN=your_webflow_api_token_here
WEBFLOW_SITE_ID=your_webflow_site_id_here
SANITY_API_TOKEN=your_sanity_token_here
```

### 2. Install Dependencies
```bash
cd apps/corporate-frontend
npm install node-fetch@2  # For API requests
```

### 3. Run the Migration
```bash
# Make sure your environment is set
source .env.local

# Run the API migration
node webflow-api-migration.js
```

## 🆚 **API vs CSV Comparison**

### What You Did (CSV Approach)
```javascript
// Issues you experienced:
1. Image URLs → Manual Supabase pipeline → Sanity URLs
2. "John, Jane, Bob" → Complex string parsing → Reference lookup
3. Flat CSV → Manual object mapping → Nested Sanity structure
4. Schema changes → Breaking migrations
```

### What API Approach Does
```javascript
// Clean, structured approach:
1. Webflow Image Object → Sanity Asset API → Proper image reference
2. Webflow Team Array → Direct reference mapping → Clean relationships  
3. Webflow Structured Data → Direct transformation → Sanity schema
4. Schema evolution → Update mappings only
```

## 🎯 **Key Differences in Practice**

### Image Handling

**CSV Approach (Your Experience):**
```javascript
// Complex pipeline you built:
const imageUrl = row['Avatar']  // Just a URL string
const buffer = await downloadImage(imageUrl)  // Manual download
const supabaseUrl = await uploadToSupabase(buffer)  // Manual upload
const sanityDoc = { headshotUrl: supabaseUrl }  // URL reference (not proper asset)
```

**API Approach:**
```javascript
// Clean, native approach:
const webflowImage = employee.photo  // Full image object with metadata
const sanityAsset = await sanity.assets.upload('image', webflowImage.url)  // Let Sanity handle it
const sanityDoc = { 
  headshot: { 
    _type: 'image', 
    asset: { _ref: sanityAsset._id } 
  } 
}  // Proper Sanity image reference
```

### Team Member References

**CSV Approach:**
```javascript
// String parsing nightmare:
const teamString = "John Doe, Jane Smith, Bob Wilson"  // CSV gives you this
const teamNames = teamString.split(',').map(s => s.trim())  // Parse manually
const teamRefs = []
for (const name of teamNames) {
  const member = await sanity.fetch(`*[_type == "teamMember" && name == "${name}"][0]`)
  if (member) teamRefs.push({ _ref: member._id })
}  // Complex lookup logic
```

**API Approach:**
```javascript
// Direct mapping:
const webflowTeam = project['team-members']  // Already an array of objects
const teamRefs = await Promise.all(
  webflowTeam.map(async member => {
    const sanityMember = await sanity.fetch(`*[webflowId == "${member._id}"][0]`)
    return { _ref: sanityMember._id }
  })
)  // Clean, direct mapping
```

### Schema Structure

**CSV Approach:**
```javascript
// Manual object construction:
const location = {
  _type: 'object',
  streetAddress: row['Street Address'],  // Manual field mapping
  cityState: row['City, State'],         // Hope CSV headers are exact
  latitude: parseFloat(row['Latitude']), // Manual type conversion
  longitude: parseFloat(row['Longitude'])
}  // Brittle, breaks with CSV header changes
```

**API Approach:**
```javascript
// Structured data transformation:
const address = {
  _type: 'object',
  street: webflowProject['street-address'],    // API field names are consistent
  cityState: webflowProject['city-state'],     // Structured data types
  coordinates: {
    lat: webflowProject.coordinates?.lat,      // Proper nesting
    lng: webflowProject.coordinates?.lng
  }
}  // Stable, type-safe mapping
```

## ✅ **Benefits You Get**

### 1. **Proper Asset Management**
- ✅ Sanity manages the entire image pipeline
- ✅ Proper alt text, metadata, and SEO
- ✅ Image transformations and CDN optimization
- ✅ No orphaned assets or broken links

### 2. **Clean References**
- ✅ Proper Sanity references (`{ _ref: "id" }`)
- ✅ No string-based lookups or parsing
- ✅ Referential integrity maintained
- ✅ Easy to query and populate

### 3. **Schema Alignment**
- ✅ API data structure matches Sanity expectations
- ✅ Proper data types (numbers, booleans, objects)
- ✅ Rich metadata preserved
- ✅ Future schema evolution is easier

### 4. **Incremental Updates**
- ✅ Track Webflow IDs for sync
- ✅ Only update changed content
- ✅ Webhook support for real-time updates
- ✅ No full re-migration needed

## 🚀 **Migration Timeline**

### Phase 1: Initial Migration (One-time)
```bash
# Full migration of all content
node webflow-api-migration.js
```

### Phase 2: Set Up Webhooks (Ongoing)
```javascript
// Add to your API server:
app.post('/webhooks/webflow', async (req, res) => {
  const migration = new WebflowApiMigration()
  await migration.syncChanges()
  res.json({ success: true })
})
```

### Phase 3: Ongoing Sync (Automatic)
- Content creators update Webflow
- Webhook triggers sync
- Sanity updates automatically
- No manual intervention needed

## 🤔 **When to Use Each Approach**

### Use CSV When:
- ✅ **Simple, flat data** with no relationships
- ✅ **One-time migration** with no future updates
- ✅ **Basic content** (text only, no assets)
- ✅ **No schema complexity**

### Use API When:
- ✅ **Complex relationships** (team members, categories)
- ✅ **Rich media content** (images, videos)
- ✅ **Ongoing content updates** needed
- ✅ **Schema evolution** expected
- ✅ **Production CMS** requirements

## 📋 **Next Steps for Your Project**

1. **Keep your current migration** - it's working for the immediate need
2. **Use API approach for future migrations** - when you need to update content
3. **Set up webhooks** - for ongoing content sync
4. **Document the approach** - so your team can maintain it

The API approach would have saved you from the schema adaptation issues, but your CSV approach got the job done. Now you know the better pattern for future migrations! 🎯 