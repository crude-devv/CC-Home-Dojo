export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <div className="max-w-2xl">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Payment Systems • Business Funding • Technology Solutions
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif text-charcoal mb-8 leading-tight">
                Better payments.
                <span className="text-blue-600"> Faster funding.</span>
                <br />
                More money.
              </h1>
              
              <p className="text-xl lg:text-2xl text-text-secondary mb-12 leading-relaxed">
                Professional payment solutions that help UK businesses 
                accept cards, get funding, and grow faster.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="#contact" 
                  className="btn-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  GET FREE QUOTE
                </a>
                <a 
                  href="/services" 
                  className="btn-secondary hover:bg-blue-50 transition-all duration-300"
                >
                  VIEW SERVICES
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-mono font-light text-charcoal mb-1">
                      150K+
                    </div>
                    <div className="text-sm text-text-secondary">
                      UK Businesses
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono font-light text-charcoal mb-1">
                      99.99%
                    </div>
                    <div className="text-sm text-text-secondary">
                      Uptime
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono font-light text-charcoal mb-1">
                      2 sec
                    </div>
                    <div className="text-sm text-text-secondary">
                      Processing
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              {/* Image Placeholder - Card Terminal */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for card terminal image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-slate-200/50"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div className="text-lg font-semibold text-charcoal mb-2">
                      Professional Card Terminals
                    </div>
                    <div className="text-sm text-text-secondary">
                      Next-day setup • 24/7 support • 350+ integrations
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  ✓ Live
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-xs text-text-secondary">Processing Speed</div>
                  <div className="text-lg font-mono font-semibold text-charcoal">2.1s</div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  )
}