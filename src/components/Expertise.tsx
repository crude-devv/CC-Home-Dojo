export default function Expertise() {
  return (
    <section id="expertise" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Column - Expertise */}
          <div className="fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                STRATEGIC EXPERTISE
              </span>
            </div>
            
            <h2 className="text-heading text-charcoal mb-12">
              Payment systems 
              as competitive advantage
            </h2>
            
            <div className="space-y-8">
              <div className="card p-8 fade-in-up delay-200">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-4 text-charcoal">
                      Card Terminal Setup
                    </h3>
                    <p className="text-body text-text-secondary">
                      Professional installation of card payment terminals. 
                      Next-day settlement optimization. 
                      Staff training and ongoing support.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card p-8 fade-in-up delay-300">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-4 text-charcoal">
                      Business Funding
                    </h3>
                    <p className="text-body text-text-secondary">
                      Help businesses access funding up to £150K. 
                      Application support and guidance. 
                      Revenue-based repayment structures.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card p-8 fade-in-up delay-500">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-4 text-charcoal">
                      Booking & Reservation Systems
                    </h3>
                    <p className="text-body text-text-secondary">
                      Online booking systems that connect to card terminals. 
                      Customer booking websites and calendar management. 
                      Integrated payment processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Technical Excellence */}
          <div className="slide-in-right">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-slate-100 text-slate-800 text-sm font-medium rounded-full">
                TECHNICAL EXCELLENCE
              </span>
            </div>
            
            <h2 className="text-heading text-charcoal mb-12">
              Market-leading 
              payment technology
            </h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="card p-6 text-center card-gradient">
                <div className="text-4xl font-mono font-light text-charcoal mb-2">
                  99.99%
                </div>
                <div className="text-sm text-text-secondary">
                  Uptime Since Feb 2022
                </div>
              </div>
              
              <div className="card p-6 text-center card-gradient">
                <div className="text-4xl font-mono font-light text-charcoal mb-2">
                  2 sec
                </div>
                <div className="text-sm text-text-secondary">
                  Average Transaction
                </div>
              </div>
              
              <div className="card p-6 text-center card-gradient">
                <div className="text-4xl font-mono font-light text-charcoal mb-2">
                  350+
                </div>
                <div className="text-sm text-text-secondary">
                  EPOS Integrations
                </div>
              </div>
              
              <div className="card p-6 text-center card-gradient">
                <div className="text-4xl font-mono font-light text-charcoal mb-2">
                  24/7
                </div>
                <div className="text-sm text-text-secondary">
                  UK-Based Support
                </div>
              </div>
            </div>
            
            {/* Market Leadership Quote */}
            <div className="card p-8 bg-gradient-to-br from-blue-50 to-slate-50 border-l-4 border-blue-600">
              <div className="mb-4">
                <span className="text-small text-blue-800 font-medium">
                  MARKET LEADERSHIP POSITION
                </span>
              </div>
              <blockquote className="text-lg text-text-secondary leading-relaxed">
                "One in eight UK high street transactions processed through our preferred partner Dojo. 
                While competitors focus on price competition, we deliver measurable competitive 
                advantages through better payments technology and service."
              </blockquote>
            </div>

          </div>
        </div>
        
        {/* Bottom Section - Why We Partnered */}
        <div className="mt-32 pt-24 border-t border-gray-200">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-6">
              WHY WE PARTNERED WITH DOJO
            </span>
            <h3 className="text-4xl font-serif text-charcoal mb-8">
              Independent Consultancy choosing the right partners since 2024
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center card p-8 card-gradient">
              <div className="text-5xl font-mono font-light text-charcoal mb-3">
                2024
              </div>
              <div className="text-lg font-medium text-charcoal mb-2">
                Partnership
              </div>
              <div className="text-sm text-text-secondary">
                established to serve UK merchants
              </div>
            </div>
            
            <div className="text-center card p-8 card-gradient">
              <div className="text-5xl font-mono font-light text-charcoal mb-3">
                £12.5B+
              </div>
              <div className="text-lg font-medium text-charcoal mb-2">
                Annual volume
              </div>
              <div className="text-sm text-text-secondary">
                processed through the network
              </div>
            </div>
            
            <div className="text-center card p-8 card-gradient">
              <div className="text-5xl font-mono font-light text-charcoal mb-3">
                1 in 8
              </div>
              <div className="text-lg font-medium text-charcoal mb-2">
                UK transactions
              </div>
              <div className="text-sm text-text-secondary">
                processed on high streets
              </div>
            </div>

            <div className="text-center card p-8 card-gradient">
              <div className="text-5xl font-mono font-light text-charcoal mb-3">
                PCI
              </div>
              <div className="text-lg font-medium text-charcoal mb-2">
                Compliant
              </div>
              <div className="text-sm text-text-secondary">
                point-to-point encryption & fraud detection
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}