# Quick Start: Import Webflow Employees

## 1. Install Dependencies
```bash
cd apps/corporate-frontend
npm install
```

## 2. Get Sanity API Token
1. Visit [sanity.io/manage](https://sanity.io/manage)
2. Select project: `tangram-corporate` 
3. Go to API → Tokens
4. Create token with **Editor** permissions
5. Copy the token

## 3. Create Environment File
```bash
# Create .env.local in apps/corporate-frontend/
echo "SANITY_API_TOKEN=your_token_here" > .env.local
```

## 4. Run Import
```bash
npm run import-employees
```

## 5. View Results
```bash
npm run studio
# Opens Sanity Studio on localhost:3333
```

That's it! The script will import all active employees from the CSV file into your Sanity CMS.

For detailed information, see `EMPLOYEE_IMPORT_GUIDE.md`. 