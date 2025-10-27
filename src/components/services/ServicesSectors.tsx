export default function ServicesSectors() {
  const sectors = [
    {
      title: "Hospitality",
      description: "Restaurants, cafes, bars, and entertainment venues",
      challenges: [
        "Slow weekend payments affecting cash flow",
        "Staff need to share tips easily",
        "Card payments need to be fast when busy",
        "Multiple locations need same system"
      ],
      solutions: [
        "Card terminals with faster payments",
        "Built-in tip sharing features",
        "Fast card processing",
        "Same system across all locations"
      ],
      caseStudy: {
        client: "Multi-site Restaurant Group",
        result: "£180K annual operational savings, 35% faster transaction processing"
      },
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4l6 8 6-8M12 12v8M9 20h6" />
          <circle cx="12" cy="4" r="1" fill="currentColor" />
        </svg>
      ),
      color: "orange"
    },
    {
      title: "Retail",
      description: "Independent stores, chains, and specialty retail",
      challenges: [
        "Need money to buy stock",
        "Busy and quiet seasons",
        "Long queues when busy",
        "Can't afford to expand stock"
      ],
      solutions: [
        "Business funding for stock (£5K-£150K)",
        "Pay back as you earn",
        "Fast card terminals",
        "Business loans based on sales"
      ],
      caseStudy: {
        client: "Convenience Store Chain",
        result: "150 additional customers weekly, £20K revenue increase"
      },
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Small Business",
      description: "Independent shops, services, and growing businesses",
      challenges: [
        "Some days busy, some days quiet",
        "Need to get paid quickly",
        "Current card machine is slow",
        "Banks won't lend money to grow"
      ],
      solutions: [
        "Card terminals with next-day payments",
        "Business loans up to £150K",
        "Simple terminal setup",
        "Easy funding applications"
      ],
      caseStudy: {
        client: "Local Coffee Shop",
        result: "Got £25K in 3 days, doubled weekend sales with new equipment"
      },
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "blue"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange':
        return { bg: 'bg-orange-600', border: 'border-orange-200', accent: 'text-orange-600' }
      case 'green':
        return { bg: 'bg-green-600', border: 'border-green-200', accent: 'text-green-600' }
      case 'blue':
        return { bg: 'bg-blue-600', border: 'border-blue-200', accent: 'text-blue-600' }
      default:
        return { bg: 'bg-blue-600', border: 'border-blue-200', accent: 'text-blue-600' }
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container-wide relative">
        {/* Section Header */}
        <div className="mb-24 text-center fade-in-up">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-slate-100 text-slate-800 text-sm font-medium rounded-full">
              SECTOR EXPERTISE
            </span>
          </div>
          
          <h2 className="text-heading text-charcoal mb-12">
            Card terminals for different
            types of business
          </h2>
          
          <p className="text-subheading text-text-secondary max-w-3xl mx-auto">
            We set up card terminals, help with funding applications, 
            and install booking systems.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="space-y-16">
          {sectors.map((sector, index) => {
            const colorClasses = getColorClasses(sector.color)
            return (
              <div 
                key={index}
                className="card p-12 fade-in-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                  {/* Sector Info */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mr-4`}>
                        {sector.icon}
                      </div>
                      <h3 className="text-3xl font-serif text-charcoal">
                        {sector.title}
                      </h3>
                    </div>
                    <p className="text-body text-text-secondary mb-8">
                      {sector.description}
                    </p>
                    
                    {/* Case Study */}
                    <div className={`card p-6 border-l-4 ${colorClasses.border} bg-gradient-to-br from-gray-50 to-white`}>
                      <div className="text-small text-text-secondary mb-2">
                        CASE STUDY
                      </div>
                      <div className="font-serif text-lg text-charcoal mb-2">
                        {sector.caseStudy.client}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {sector.caseStudy.result}
                      </div>
                    </div>
                  </div>

                  {/* Challenges */}
                  <div className="lg:col-span-4">
                    <div className="mb-6">
                      <div className="text-small text-text-secondary mb-4">
                        SECTOR CHALLENGES
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {sector.challenges.map((challenge, challengeIndex) => (
                        <div key={challengeIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="text-body text-text-secondary">
                            {challenge}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="lg:col-span-4">
                    <div className="mb-6">
                      <div className="text-small text-text-secondary mb-4">
                        HOW WE HELP
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {sector.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 ${colorClasses.bg} rounded-full mt-2 flex-shrink-0`}></div>
                          <div className="text-body text-charcoal font-medium">
                            {solution}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 pt-24 border-t border-gray-200 text-center fade-in-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-heading text-charcoal mb-8">
              Ready to get card terminals 
              or apply for business funding?
            </h3>
            <p className="text-subheading text-text-secondary mb-12">
              Join hundreds of UK businesses already using our services
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#contact" 
                className="btn-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                GET CARD TERMINALS
              </a>
              <a 
                href="#contact" 
                className="btn-secondary hover:bg-blue-50 transition-all duration-300"
              >
                APPLY FOR FUNDING
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}