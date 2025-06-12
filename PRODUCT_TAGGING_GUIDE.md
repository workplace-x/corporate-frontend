# Product Tagging System - User Guide

## 🎯 Overview

The Product Tagging System allows content managers to create interactive project case studies by tagging products directly on project images. This creates an immersive experience where visitors can click on hotspots to learn about specific furniture, technology, and design elements.

## 🚀 How to Use the System

### **Step 1: Access the Project Editor**

1. Go to your Sanity Studio (usually at `/studio`)
2. Navigate to **Projects** in the sidebar
3. Select an existing project or create a new one
4. Scroll down to the **Tagged Project Images** section

### **Step 2: Upload and Tag an Image**

1. **Add a New Tagged Image:**
   - Click the "+" button in the Tagged Project Images section
   - Upload your project image using the Image field
   - Add an Alt Text for accessibility

2. **Add Image Information:**
   - **Image Title**: Descriptive title (e.g., "Reception & Welcome Area")
   - **Image Description**: Brief narrative about the space
   - **Space Type**: Select from dropdown (Reception, Collaborative, Conference, etc.)

### **Step 3: Tag Products on the Image**

1. **Start Tagging Mode:**
   - Once your image is uploaded, you'll see the **Product Tagging** interface
   - Click "Start Tagging Products" button
   - Your cursor will change to a crosshair

2. **Place Product Tags:**
   - Click anywhere on the image where a product is visible
   - A dialog will open asking for product information

3. **Fill Product Information:**
   - **Product Name**: e.g., "Steelcase Gesture Chair"
   - **Category**: Select from predefined categories
   - **Price**: e.g., "$1,200" or "Custom Quote"
   - **Partner/Manufacturer**: e.g., "Steelcase"
   - **Key Specifications** (optional): Brief description
   - **Sustainability Features** (optional): Environmental details

4. **Save the Tag:**
   - Click "Add Product Tag"
   - You'll see an orange numbered hotspot appear on the image

### **Step 4: Add Performance Metrics (Optional)**

1. In the **Space Metrics** section, add performance data:
   - **Metric Name**: e.g., "Visitor Satisfaction"
   - **Value**: e.g., "96%"
   - **Change/Improvement**: e.g., "+23%"

### **Step 5: Manage Your Tags**

- **View Tagged Products**: See a list of all products with their positions
- **Edit Tags**: Click on any tag in the list to modify it
- **Remove Tags**: Use the remove button to delete unwanted tags
- **Reposition**: Delete and re-add tags to change their position

## 📐 Best Practices

### **Image Guidelines:**
- Use high-resolution images (minimum 1920x1080)
- Ensure good lighting and clear product visibility
- Avoid cluttered compositions for easier tagging
- Consider the image aspect ratio (16:9 works best)

### **Product Tagging Tips:**
- **Be Specific**: Use exact product names and model numbers
- **Strategic Placement**: Tag 3-5 key products per image (avoid overcrowding)
- **Accurate Positioning**: Click precisely on the product you're tagging
- **Consistent Naming**: Use manufacturer names consistently (e.g., always "Herman Miller" not "HM")

### **Content Writing:**
- **Image Titles**: Be descriptive but concise
- **Descriptions**: Tell a story about how the space functions
- **Specifications**: Include key features that matter to clients
- **Sustainability**: Highlight environmental benefits when relevant

## 🎨 Visual Guidelines

### **Hotspot Appearance:**
- Orange circles (#f9a31c) with white borders
- Numbered sequence (1, 2, 3...)
- Subtle pulsing animation to draw attention
- 24px diameter for optimal visibility

### **Product Information:**
- Clean, minimal popup design
- Product name as primary information
- Category and price prominently displayed
- Partner/manufacturer attribution
- Optional detailed specifications

## 🔧 Technical Notes

### **Data Structure:**
```javascript
{
  image: SanityImageAsset,
  title: "Reception Area",
  description: "Welcoming space with biophilic design",
  spaceType: "reception",
  productTags: [
    {
      x: 25.5,  // Percentage from left
      y: 45.2,  // Percentage from top
      customProduct: {
        name: "Steelcase Gesture Chair",
        category: "seating",
        price: "$1,200",
        partner: "Steelcase"
      }
    }
  ],
  metrics: [
    {
      metric: "Visitor Satisfaction",
      value: "96%",
      change: "+23%"
    }
  ]
}
```

### **Frontend Display:**
- Automatic responsive scaling
- Hover interactions with smooth animations
- Mobile-friendly touch interactions
- Graceful fallback for images without tags

## 🚨 Troubleshooting

### **Common Issues:**

**"Upload an image first to enable product tagging"**
- Make sure you've uploaded an image in the Image field before trying to tag

**Tags appear in wrong positions**
- This can happen if the image is resized after tagging
- Re-upload the image and re-tag if necessary

**Product information not saving**
- Ensure all required fields (Name, Category, Price) are filled
- Check for special characters that might cause issues

**Hotspots not appearing on frontend**
- Verify the project is published in Sanity
- Check that the tagged images field has data
- Ensure the frontend is pulling from the correct dataset

### **Support:**
For technical issues or questions:
1. Check the browser console for error messages
2. Verify Sanity Studio connectivity
3. Contact the development team with specific error details

## 📊 Content Strategy

### **Project Storytelling:**
Use tagged images to create compelling narratives:

1. **Journey Mapping**: Start with entrance/reception, move through collaborative spaces, end with private areas
2. **Product Highlighting**: Feature 2-3 signature pieces per space
3. **Performance Metrics**: Include measurable improvements when available
4. **Sustainability Focus**: Highlight eco-friendly choices and certifications

### **SEO Benefits:**
- Rich product information improves search visibility
- Alt text and descriptions enhance accessibility
- Structured data helps with product discovery
- Internal linking opportunities through product references

## 🎯 Success Metrics

Track the effectiveness of your tagged images:
- **Engagement**: Time spent on project pages
- **Interactions**: Hotspot clicks and product views
- **Conversions**: Contact form submissions from project pages
- **SEO**: Search rankings for product-related terms

---

**Ready to create world-class interactive case studies? Start tagging!** 🚀 