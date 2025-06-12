# Employee Import Guide

This guide explains how to import employee data from the Webflow CSV export into your Sanity CMS.

## Prerequisites

1. **Sanity Project Setup**: Ensure your Sanity project is configured and accessible
2. **CSV File**: The Webflow employee export (`Tangram - Employees (2).csv`) should be in the project root
3. **API Token**: You'll need a Sanity API token with write permissions

## Setup Instructions

### 1. Get a Sanity API Token

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project (`tangram-corporate` - Project ID: `4q7mxake`)
3. Navigate to **API** → **Tokens**
4. Click **Add API Token**
5. Name it something like "Employee Import Token"
6. Set permissions to **Editor** (or **Admin** if needed)
7. Copy the token (you won't see it again)

### 2. Install Dependencies

Navigate to the corporate frontend directory and install the required packages:

```bash
cd apps/corporate-frontend
npm install
```

This will install the new dependencies:
- `csv-parser`: For parsing the CSV file
- `node-fetch`: For downloading employee photos from Webflow

### 3. Set Environment Variable

Create a `.env.local` file in the `apps/corporate-frontend` directory:

```bash
# apps/corporate-frontend/.env.local
SANITY_API_TOKEN=your_api_token_here
```

**Important**: Never commit this file to version control!

### 4. Verify CSV File Location

Make sure the CSV file is in the correct location:
```
MAP Dev/
├── Tangram - Employees (2).csv  ← Should be here
└── apps/
    └── corporate-frontend/
        ├── import-employees.js
        └── ...
```

## Running the Import

### Option 1: Using npm script (Recommended)

```bash
cd apps/corporate-frontend
npm run import-employees
```

### Option 2: Direct node execution

```bash
cd apps/corporate-frontend
node import-employees.js
```

## What the Import Does

The script will:

1. **Parse the CSV file** and extract employee data
2. **Skip archived employees** (where `Archived = true`)
3. **Download and upload employee photos** from Webflow URLs to Sanity
4. **Transform data** to match the Sanity schema:
   - Convert HTML bios to rich text blocks
   - Map department values to predefined options
   - Parse boolean flags for leadership roles
   - Generate slugs from names
5. **Upload to Sanity** in batches of 10 to avoid rate limiting
6. **Provide progress feedback** with success/error messages

## Data Mapping

The script maps CSV columns to Sanity fields as follows:

| CSV Column | Sanity Field | Notes |
|------------|--------------|-------|
| Name | name | Required |
| Slug | slug | Auto-generated if missing |
| Title | title | Job title |
| Department | department | Mapped to predefined values |
| Manager | manager | Direct supervisor |
| Business Unit | businessUnit | Contract Furniture, Technology, etc. |
| Location | location | SFS, Dallas, Newport Beach, Fresno |
| Year Hired | yearHired | Converted to number |
| Alma Mater | almaMater | University/college |
| BIO | bio | Converted from HTML to rich text |
| Email | email | Required |
| Phone Number | phone | Optional |
| Linkedin Profile | linkedin | URL |
| Avatar | headshot | Downloaded and uploaded to Sanity |
| Board of Directors? | boardOfDirectors | Boolean |
| Senior Leadership | seniorLeadership | Boolean |
| Unit Leader | unitLeader | Boolean |
| Executive Team | executiveTeam | Boolean |
| Sales Leadership | salesLeadership | Boolean |
| Pacific Holdings? | pacificHoldings | Boolean |
| Pacific Holdings Title | pacificHoldingsTitle | Text |
| Archived | archived | Boolean |

## Troubleshooting

### Common Issues

1. **"Please set SANITY_API_TOKEN environment variable"**
   - Make sure you created the `.env.local` file with your API token

2. **"ENOENT: no such file or directory"**
   - Check that the CSV file is in the correct location (project root)

3. **Image upload failures**
   - Some employee photos might fail to download due to broken URLs
   - These will be logged as warnings but won't stop the import

4. **Duplicate errors**
   - If you run the import multiple times, you might get duplicate slug errors
   - Consider clearing existing team members from Sanity first

### Partial Runs

If the import fails partway through, you can:

1. Check the Sanity Studio to see which employees were successfully imported
2. Modify the script to skip already imported employees
3. Or clear the `teamMember` documents and start fresh

## Post-Import Steps

After the import completes:

1. **Open Sanity Studio**: `npm run studio` (runs on port 3333)
2. **Review imported data** in the Team Members section
3. **Set featured employees**: Mark key team members as "Featured"
4. **Update any missing information** that couldn't be imported
5. **Test the frontend** to ensure team pages display correctly

## Schema Updates

The team member schema has been enhanced with fields to match the Webflow data:

- Manager, Business Unit, Location
- Year Hired, Alma Mater
- Phone Number
- Leadership flags (Board of Directors, Senior Leadership, etc.)
- Pacific Holdings information
- Archived status

All these fields are optional except for name, email, title, and department.

## Support

If you encounter issues:

1. Check the console output for specific error messages
2. Verify your Sanity project permissions
3. Ensure the CSV file format matches expectations
4. Check network connectivity for image downloads

The import script includes comprehensive error handling and will continue processing even if individual records fail. 