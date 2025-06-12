interface PhilosophySectionProps {
  sectionNumber?: string
  totalSections?: string
  quote?: {
    main: string[]
    subtext: string[]
  }
  attribution?: {
    title: string
    organization: string
    established: string
    focus: string
  }
  metrics?: Array<{
    value: string
    label: string
    description?: string
  }>
}

export default function PhilosophySection({
  sectionNumber = "02",
  totalSections = "04",
  quote = {
    main: [
      "Design is not",
      "what it looks like",
      "Design is how it",
      "works"
    ],
    subtext: [
      "Every space we create serves a deeper purpose. We don't just arrange furniture or select colors—we choreograph human experiences.",
      "Through evidence-based design principles and meticulous attention to behavioral psychology, we transform environments into catalysts for creativity, collaboration, and wellbeing."
    ]
  },
  attribution = {
    title: "Core Design Philosophy",
    organization: "Tangram Interiors",
    established: "Est. 1964",
    focus: "Human-Centered Design"
  },
  metrics = [
    { value: "$250M+", label: "Annual Project Value", description: "Transforming billions in real estate" },
    { value: "50+", label: "Design Professionals", description: "Multidisciplinary expertise" },
    { value: "8", label: "Strategic Locations", description: "Nationwide reach, local expertise" }
  ]
}: PhilosophySectionProps) {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden">
      {/* Simplified architectural background - much more subtle */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
        <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
      </div>
      
      <div className="relative z-10 w-full px-8 sm:px-16 lg:px-24">
        <div className="max-w-8xl mx-auto">
          
          {/* Enhanced grid layout */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Main quote section */}
            <div className="lg:col-span-7 lg:col-start-1 space-y-16">
              <div className="relative">
                {/* Refined quotation mark with orange accent */}
                <div className="absolute -top-12 -left-8 text-[8rem] font-extralight leading-none select-none" style={{ color: '#f9a31c', opacity: 0.1 }}>"</div>
                
                {/* Enhanced section label with orange accent */}
                <div className="flex items-center space-x-6 mb-12">
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Design Philosophy</div>
                  <div className="w-16 h-px bg-gray-900"></div>
                  <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                  <div className="text-xs text-gray-400 tracking-wide">{sectionNumber} / {totalSections}</div>
                </div>
                
                <blockquote className="relative z-10 space-y-10">
                  <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">{quote.main[0]}</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      {quote.main[1]}
                      <span className="italic text-gray-600 ml-3">looks like</span>
                    </span>
                    <span className="block transform hover:translate-x-3 transition-transform duration-300 delay-150">
                      {quote.main[2]}
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      {quote.main[3]}
                    </span>
                  </div>
                  
                  {/* Enhanced subtext */}
                  <div className="max-w-4xl pt-8 space-y-6">
                    <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                      {quote.subtext[0]}
                    </p>
                    
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                      {quote.subtext[1]}
                    </p>
                  </div>
                </blockquote>
                
                {/* Enhanced attribution with orange accent */}
                <div className="mt-16 flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-lg relative">
                    <span className="text-white font-light text-lg tracking-wide">TI</span>
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium text-gray-900 text-lg tracking-wide">{attribution.title}</div>
                    <div className="text-gray-600 text-sm tracking-[0.1em] uppercase font-medium">{attribution.organization}</div>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span>{attribution.established}</span>
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>{attribution.focus}</span>
                    </div>
                  </div>
                </div>
                
                {/* Architectural measurement lines with orange accents */}
                <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="absolute -left-10 top-3 text-xs text-gray-500 transform -rotate-90 origin-center">
                  02
                </div>
              </div>
            </div>
            
            {/* Enhanced metrics column with orange accents */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-16">
              <div className="space-y-12">
                
                {metrics.map((metric, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300" style={{ background: index === 1 ? `linear-gradient(to bottom, rgb(17, 24, 39), #f9a31c, rgb(229, 231, 235))` : undefined }}></div>
                    <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                    <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                    
                    <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                      <div className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-[-0.02em] group-hover:text-gray-700 transition-colors duration-300">
                        {metric.value.includes('+') ? (
                          <>
                            {metric.value.replace('+', '')}<span className="text-3xl" style={{ color: '#f9a31c' }}>+</span>
                          </>
                        ) : (
                          metric.value
                        )}
                      </div>
                      <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium">{metric.label}</div>
                      {metric.description && (
                        <div className="text-sm text-gray-500 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {metric.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Refined architectural elements with orange accent */}
              <div className="space-y-4 opacity-40 pt-8">
                <div className="w-12 h-px bg-gray-900 ml-auto"></div>
                <div className="w-6 h-px ml-auto" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="w-8 h-px bg-gray-900 ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 