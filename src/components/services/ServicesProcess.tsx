export default function ServicesProcess() {
  const processSteps = [
    {
      number: "01",
      title: "Strategic Assessment",
      duration: "Week 1",
      description: "Comprehensive evaluation of current payment infrastructure, competitive positioning, and optimization opportunities.",
      activities: [
        "Current system performance audit",
        "Business requirements analysis",
        "Competitive landscape review",
        "ROI opportunity identification",
        "Technical integration assessment"
      ],
      outcome: "Detailed strategic roadmap with clear implementation priorities"
    },
    {
      number: "02",
      title: "Solution Design",
      duration: "Week 2",
      description: "Bespoke Dojo implementation strategy tailored to your operational requirements and growth objectives.",
      activities: [
        "Dojo ecosystem configuration",
        "Integration architecture planning",
        "Rollout timeline development",
        "Risk mitigation strategies",
        "Success metrics definition"
      ],
      outcome: "Comprehensive implementation blueprint with technical specifications"
    },
    {
      number: "03",
      title: "Implementation Management",
      duration: "Weeks 3-6",
      description: "Managed deployment with minimal business disruption and continuous optimization throughout the process.",
      activities: [
        "Phased system deployment",
        "Staff training and adoption",
        "Performance monitoring setup",
        "Issue resolution and optimization",
        "Documentation and procedures"
      ],
      outcome: "Fully operational Dojo infrastructure with optimized performance"
    },
    {
      number: "04",
      title: "Performance Optimization",
      duration: "Weeks 7-8",
      description: "Fine-tuning and optimization to ensure maximum competitive advantage and operational efficiency.",
      activities: [
        "Performance metrics analysis",
        "System optimization adjustments",
        "Advanced feature activation",
        "Competitive advantage validation",
        "Future roadmap planning"
      ],
      outcome: "Sustained competitive advantage through payment infrastructure excellence"
    }
  ]

  const methodology = [
    {
      principle: "Zero-Disruption Implementation",
      description: "Phased rollout ensuring continuous business operations throughout the transition period"
    },
    {
      principle: "Data-Driven Optimization",
      description: "Continuous performance monitoring and evidence-based adjustment strategies"
    },
    {
      principle: "Competitive Intelligence",
      description: "Market analysis ensuring your infrastructure provides sustainable competitive advantages"
    },
    {
      principle: "Strategic Partnership",
      description: "Long-term advisory relationship extending beyond initial implementation"
    }
  ]

  return (
    <section className="section-padding bg-cool-grey">
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-24">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="text-small text-text-secondary">
                IMPLEMENTATION METHODOLOGY
              </span>
            </div>
            
            <h2 className="text-heading text-charcoal mb-12">
              Systematic approach to payment 
              infrastructure transformation
            </h2>
            
            <p className="text-subheading text-text-secondary">
              Proven methodology ensuring seamless Dojo implementation 
              with minimal disruption and maximum competitive advantage.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex items-start space-x-6 mb-8">
                  <div className="text-6xl font-mono font-light text-charcoal">
                    {step.number}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-2xl font-serif text-charcoal mb-2">
                      {step.title}
                    </h3>
                    <div className="text-small text-text-secondary">
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-body text-text-secondary mb-8">
                  {step.description}
                </p>

                {/* Activities */}
                <div className="mb-8">
                  <div className="text-small text-text-secondary mb-4">
                    KEY ACTIVITIES
                  </div>
                  <div className="space-y-2">
                    {step.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-start space-x-3">
                        <div className="w-1 h-1 bg-charcoal rounded-full mt-2 flex-shrink-0"></div>
                        <div className="text-sm text-text-secondary">
                          {activity}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="bg-white p-6 border-l-4 border-accent-blue">
                  <div className="text-small text-text-secondary mb-2">
                    OUTCOME
                  </div>
                  <div className="text-sm font-medium text-charcoal">
                    {step.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Principles */}
        <div className="border-t border-gray-200 pt-24">
          <div className="mb-16">
            <div className="mb-8">
              <span className="text-small text-text-secondary">
                CORE PRINCIPLES
              </span>
            </div>
            <h3 className="text-heading text-charcoal mb-8">
              Methodology foundations
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {methodology.map((principle, index) => (
              <div key={index} className="bg-white p-8">
                <h4 className="text-xl font-serif text-charcoal mb-4">
                  {principle.principle}
                </h4>
                <p className="text-body text-text-secondary">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 pt-24 border-t border-gray-200 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-heading text-charcoal mb-8">
              Ready to begin your payment 
              infrastructure transformation?
            </h3>
            <p className="text-subheading text-text-secondary mb-12">
              Strategic consultation begins with understanding your current challenges 
              and competitive positioning requirements.
            </p>
            <a href="#contact" className="btn-primary">
              SCHEDULE STRATEGIC ASSESSMENT
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}