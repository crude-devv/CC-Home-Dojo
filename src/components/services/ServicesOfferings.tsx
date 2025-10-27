export default function ServicesOfferings() {
  const offerings = [
    {
      title: "Card Terminal Setup",
      description: "We install your card terminals and train your staff.",
      deliverables: [
        "Working card terminals",
        "Staff training completed",
        "Access to payment dashboard",
        "Support contact details"
      ],
      ideal: "Businesses ready to get card terminals",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Business Funding",
      description: "Help you get business loans up to £150K.",
      deliverables: [
        "Funding application submitted",
        "Updates on progress",
        "Help with questions",
        "Support if approved"
      ],
      ideal: "Businesses needing £5K-£150K funding",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Booking & Reservation Systems",
      description: "Set up online booking systems that connect to your card terminals.",
      deliverables: [
        "Working booking system",
        "Staff training done",
        "Customer booking website",
        "Payment processing setup"
      ],
      ideal: "Businesses that take appointments or bookings",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "purple"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { bg: 'bg-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-300' }
      case 'green':
        return { bg: 'bg-green-600', border: 'border-green-200', hover: 'hover:border-green-300' }
      case 'purple':
        return { bg: 'bg-purple-600', border: 'border-purple-200', hover: 'hover:border-purple-300' }
      default:
        return { bg: 'bg-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-300' }
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container-wide relative">
        {/* Section Header */}
        <div className="mb-24 text-center fade-in-up">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              SERVICE OFFERINGS
            </span>
          </div>
          
          <h2 className="text-heading text-charcoal mb-12">
            What we do for your business
          </h2>
          
          <p className="text-subheading text-text-secondary max-w-3xl mx-auto">
            Professional payment solutions and business growth services 
            that help you make more money.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {offerings.map((offering, index) => {
            const colorClasses = getColorClasses(offering.color)
            return (
              <div 
                key={index} 
                className={`card p-8 border-2 ${colorClasses.border} ${colorClasses.hover} fade-in-up transition-all duration-300`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Icon Header */}
                <div className="mb-8">
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    {offering.icon}
                  </div>
                  
                  <h3 className="text-2xl font-serif text-charcoal mb-4">
                    {offering.title}
                  </h3>
                  
                  <p className="text-body text-text-secondary mb-6">
                    {offering.description}
                  </p>
                  
                  <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {offering.ideal}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-8">
                  <div className="text-small text-text-secondary mb-4">
                    WHAT YOU GET
                  </div>
                  <div className="space-y-3">
                    {offering.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 ${colorClasses.bg} rounded-full mt-2 flex-shrink-0`}></div>
                        <div className="text-sm text-charcoal font-medium">
                          {deliverable}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-6">
                  <a 
                    href="#contact" 
                    className="btn-secondary w-full text-center block hover:shadow-lg transition-all duration-300"
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}