# Tangram Interiors Corporate Frontend

## 🎯 Project Overview

This project transforms Tangram Interiors' static Webflow website into a dynamic, AI-driven corporate frontend that leverages their existing API-server backend and integrates seamlessly with their toolbox ecosystem.

## 🔄 Migration from Webflow

### Current State Analysis
- **Platform**: Webflow CMS
- **Content**: Static pages with manual updates
- **Limitations**: No real-time data, limited personalization, no backend integration

### New Architecture Benefits
- **Dynamic Content**: Real-time project data, team updates, and metrics
- **AI Integration**: Intelligent visitor assistance and content recommendations
- **Backend Connection**: Direct integration with existing API-server
- **Enhanced UX**: Modern animations, progressive loading, and responsive design
- **SEO Optimization**: Next.js SSR/SSG for better search engine performance

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Corporate Frontend                        │
│                     (Next.js 14)                           │
├─────────────────────────────────────────────────────────────┤
│  Components:                                                │
│  • AI Assistant (OpenAI Integration)                       │
│  • Dynamic Project Showcase                                │
│  • Real-time Team Directory                                │
│  • Interactive Service Explorer                            │
│  • Lead Capture & CRM Integration                          │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                   API Gateway                               │
│              (Next.js API Routes)                          │
├─────────────────────────────────────────────────────────────┤
│  • Authentication Proxy                                    │
│  • Content Management                                      │
│  • Lead Processing                                         │
│  • Analytics Integration                                   │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                 Existing Backend                            │
│                (API-Server + Toolbox)                      │
├─────────────────────────────────────────────────────────────┤
│  • Customer Management                                     │
│  • Project Data                                            │
│  • Team Management                                         │
│  • Business Analytics                                      │
│  • CRM Integration                                         │
└─────────────────────────────────────────────────────────────┘
```

## 🤖 AI-Driven Features

### Intelligent Assistant
- **Context-Aware Responses**: Understands company services, projects, and capabilities
- **Lead Qualification**: Automatically categorizes and routes inquiries
- **Content Recommendations**: Suggests relevant projects and services
- **Appointment Scheduling**: Direct integration with team calendars

### Smart Content Personalization
- **Industry-Specific Content**: Tailored messaging for healthcare, education, corporate
- **Geographic Relevance**: Location-based project showcases and team contacts
- **Behavior Tracking**: Progressive content delivery based on user interests

## 📊 Backend Integration

### Data Sources
```typescript
// Real-time data from existing API-server
interface CorporateDataSources {
  projects: ProjectSummary[]        // Live project portfolio
  teamMembers: TeamMember[]         // Current team directory
  capabilities: ServiceOffering[]   // Dynamic service catalog
  testimonials: ClientFeedback[]    // Recent client reviews
  metrics: CompanyMetrics           // Business performance data
  locations: OfficeLocation[]       // Showroom information
}
```

### API Endpoints Integration
- `/api/projects` - Featured project showcase
- `/api/team-members` - Team directory with expertise
- `/api/capabilities` - Service offerings and specializations
- `/api/testimonials` - Client feedback and case studies
- `/api/leads` - Prospect capture and qualification
- `/api/analytics` - Performance tracking and insights

## 🎨 Design System

### Visual Hierarchy
- **Primary Brand Colors**: Tangram's established palette
- **Typography**: Modern, readable font stack optimized for web
- **Spacing**: Consistent grid system with responsive breakpoints
- **Animations**: Subtle, purposeful micro-interactions

### Component Library
```typescript
// Reusable UI components
├── layout/
│   ├── Header              // Navigation with smart search
│   ├── Footer              // Contact info and social links
│   └── Navigation          // Responsive menu system
├── sections/
│   ├── HeroSection         // Dynamic value proposition
│   ├── ServicesOverview    // Interactive service explorer
│   ├── ProjectShowcase     // Filterable project gallery
│   ├── TeamDirectory       // Searchable team profiles
│   ├── Testimonials        // Rotating client feedback
│   └── ContactSection      // Multi-channel contact options
├── interactive/
│   ├── AIAssistant         // Intelligent chat interface
│   ├── ProjectFilter       // Smart project discovery
│   ├── ServiceExplorer     // Interactive capability matrix
│   └── LocationFinder      // Geographic showroom locator
└── forms/
    ├── ContactForm         // Lead capture with qualification
    ├── ProjectInquiry      // Detailed project requirements
    └── QuoteRequest        // Service estimation request
```

## 🚀 Performance Optimizations

### Loading Strategy
- **Critical Path**: Above-the-fold content loads in <1.5s
- **Progressive Enhancement**: Non-critical features load asynchronously
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Route-based and component-based splitting

### SEO Enhancements
- **Server-Side Rendering**: Dynamic content with full SEO support
- **Structured Data**: Rich snippets for projects and services
- **Meta Optimization**: Dynamic meta tags based on content
- **Sitemap Generation**: Automated sitemap with real-time updates

## 📱 Responsive Design

### Breakpoint Strategy
```scss
// Tailwind CSS breakpoints
sm: 640px   // Mobile landscape
md: 768px   // Tablet portrait
lg: 1024px  // Tablet landscape / Small desktop
xl: 1280px  // Desktop
2xl: 1536px // Large desktop
```

### Mobile-First Features
- **Touch Optimization**: Gesture-friendly navigation
- **Progressive Web App**: Offline capability and app-like experience
- **Performance Budget**: <100kb initial bundle size
- **Accessibility**: WCAG 2.1 AA compliance

## 🔗 Integration Points

### CRM Synchronization
```typescript
// Lead data flows to existing CRM
interface LeadIntegration {
  source: 'website_form' | 'ai_chat' | 'project_inquiry'
  qualification: 'hot' | 'warm' | 'cold'
  preferences: {
    services: string[]
    industry: string
    timeline: string
    budget_range: string
  }
  routing: {
    assigned_rep: string
    priority: number
    follow_up_date: Date
  }
}
```

### Analytics Pipeline
- **Google Analytics 4**: Enhanced ecommerce tracking
- **Custom Events**: Interaction tracking for optimization
- **Conversion Funnel**: Multi-touch attribution
- **A/B Testing**: Feature flag system for experimentation

## 🛠️ Development Workflow

### Local Development
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Access application
http://localhost:3002
```

### Environment Configuration
```env
# Core settings
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=https://tangraminteriors.com

# AI Integration
NEXT_PUBLIC_OPENAI_API_KEY=sk-...
OPENAI_ORGANIZATION_ID=org-...

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...
NEXT_PUBLIC_HOTJAR_ID=...

# CRM Integration
SALESFORCE_CLIENT_ID=...
HUBSPOT_API_KEY=...
```

## 📈 Success Metrics

### Performance KPIs
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- **Conversion Rate**: 25% improvement in qualified leads
- **Engagement**: 40% increase in time on site
- **AI Interactions**: 60% of visitors engage with assistant

### Business Impact
- **Lead Quality**: Improved qualification through AI pre-screening
- **Sales Velocity**: Faster lead-to-opportunity conversion
- **Brand Perception**: Enhanced digital presence and credibility
- **Operational Efficiency**: Reduced manual lead processing

## 🔄 Migration Timeline

### Phase 1: Foundation (Week 1-2)
- [ ] Next.js application setup
- [ ] Component library development
- [ ] API integration layer
- [ ] Basic responsive layouts

### Phase 2: Core Features (Week 3-4)
- [ ] AI Assistant implementation
- [ ] Dynamic content integration
- [ ] Project showcase with real data
- [ ] Team directory connection

### Phase 3: Advanced Features (Week 5-6)
- [ ] Lead capture and CRM integration
- [ ] Analytics implementation
- [ ] Performance optimization
- [ ] SEO enhancements

### Phase 4: Launch Preparation (Week 7-8)
- [ ] User acceptance testing
- [ ] Performance validation
- [ ] Content migration from Webflow
- [ ] DNS and hosting setup

## 🚦 Deployment Strategy

### Staging Environment
- **Vercel Preview**: Automatic deployments for every PR
- **Content Testing**: Parallel content validation
- **Performance Monitoring**: Lighthouse CI integration

### Production Launch
- **Blue-Green Deployment**: Zero-downtime migration
- **Feature Flags**: Gradual rollout of AI features
- **Monitoring**: Real-time performance and error tracking
- **Rollback Plan**: Immediate reversion capability if needed

## 🤝 Team Collaboration

### Content Management
- **Hybrid Approach**: Technical team manages code, marketing manages content
- **Git-based Workflow**: Content changes via pull requests
- **Preview System**: Stakeholder review before publishing

### Maintenance Plan
- **Security Updates**: Automated dependency updates
- **Performance Monitoring**: Weekly performance audits
- **Content Freshness**: Monthly review of project showcases
- **AI Training**: Quarterly AI model refinement

---

## Next Steps

1. **Review and Approve Architecture**: Stakeholder sign-off on technical approach
2. **Environment Setup**: Configure development and staging environments
3. **Content Audit**: Identify priority content for migration
4. **Team Training**: Developer handoff and knowledge transfer
5. **Launch Planning**: Coordinate marketing and communications

This transformation will position Tangram Interiors as a technology-forward design firm while leveraging their existing backend infrastructure and providing a superior user experience for prospects and clients. 