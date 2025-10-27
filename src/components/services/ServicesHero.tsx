export default function ServicesHero() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      <div className="container-wide relative">
        <div className="max-w-6xl">
          {/* Breadcrumb */}
          <div className="mb-8 lg:mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              HOME → SERVICES
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-display text-charcoal mb-12 lg:mb-16">
            Card payment systems.
            <span className="text-blue-600"> Better setup.</span>
            <br />
            More money.
          </h1>

          {/* Description Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-subheading text-text-secondary mb-12">
                Payment system experts helping businesses get paid faster 
                and access funding when they need it.
              </p>
              
              <div className="space-y-8">
                <div className="card p-6 fade-in-up">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-serif text-charcoal mb-2">
                        Payment System Experts
                      </div>
                      <div className="text-body text-text-secondary">
                        We know everything about card payment systems and how to make 
                        them work better for your business
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6 fade-in-up delay-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-serif text-charcoal mb-2">
                        All Types of Business
                      </div>
                      <div className="text-body text-text-secondary">
                        Restaurants, shops, small businesses - we help everyone 
                        get better payment systems
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6 fade-in-up delay-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-serif text-charcoal mb-2">
                        Business Funding Too
                      </div>
                      <div className="text-body text-text-secondary">
                        Get business funding - up to £150K 
                        when your business needs it
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative slide-in-right">
              {/* Service Cards Stack */}
              <div className="relative">
                {/* Back Card */}
                <div className="absolute top-4 left-4 w-full h-64 bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl shadow-lg opacity-60"></div>
                
                {/* Middle Card */}
                <div className="absolute top-2 left-2 w-full h-64 bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl shadow-lg opacity-80"></div>
                
                {/* Front Card */}
                <div className="relative w-full h-64 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif text-charcoal mb-4">
                      Professional Services
                    </h3>
                    <p className="text-text-secondary">
                      Card terminals • Business funding • Booking systems
                    </p>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  ✓ 3 Services
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-xs text-text-secondary">Setup Time</div>
                  <div className="text-lg font-mono font-semibold text-charcoal">48hrs+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <a 
              href="#contact" 
              className="btn-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              GET STARTED TODAY
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  )
}