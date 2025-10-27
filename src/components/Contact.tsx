'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    businessType: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const businessTypes = [
    'Restaurant / Cafe',
    'Retail Store',
    'Beauty Salon / Spa',
    'Professional Services',
    'Healthcare Practice',
    'Other'
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-warm-white">
        <div className="container-narrow">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-small text-text-secondary">
                MESSAGE RECEIVED
              </span>
            </div>
            <h2 className="text-heading text-charcoal mb-8">
              We'll be in touch within 24 hours
            </h2>
            <p className="text-body text-text-secondary">
              Thank you for your inquiry. We'll review your requirements and respond with next steps.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left Column - Contact Info */}
          <div className="fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                STRATEGIC CONSULTATION
              </span>
            </div>
            
            <h2 className="text-heading text-charcoal mb-12">
              Let's discuss your 
              payment infrastructure
            </h2>
            
            <div className="space-y-8 mb-16">
              <p className="text-body text-text-secondary">
                Independent advisory for sophisticated operators seeking competitive advantage 
                through superior payment infrastructure.
              </p>
              
              <p className="text-body text-text-secondary">
                Partnership ensures access to market-leading technology, 
                strategic implementation guidance, and ongoing optimization.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card p-6 bg-gradient-to-br from-white to-gray-50">
                <div className="text-small text-text-secondary mb-2">
                  RESPONSE TIME
                </div>
                <div className="text-xl font-serif text-charcoal">
                  24 hours
                </div>
              </div>
              
              <div className="card p-6 bg-gradient-to-br from-white to-gray-50">
                <div className="text-small text-text-secondary mb-2">
                  CONSULTATION
                </div>
                <div className="text-xl font-serif text-charcoal">
                  Complimentary strategic assessment
                </div>
              </div>
              
              <div className="card p-6 bg-gradient-to-br from-blue-50 to-slate-50 border-l-4 border-blue-600">
                <div className="text-small text-blue-800 mb-2">
                  PARTNERSHIP
                </div>
                <div className="text-xl font-serif text-charcoal">
                  Independent Consultancy • Certified • PCI compliant
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="slide-in-right">
            <div className="card p-8 lg:p-12 bg-white shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-3xl font-serif text-charcoal mb-4">Get Started Today</h3>
                <p className="text-body text-text-secondary">Tell us about your business and payment needs</p>
              </div>

              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit} 
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-small text-text-secondary mb-3">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-small text-text-secondary mb-3">
                      COMPANY
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-lg"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-small text-text-secondary mb-3">
                    BUSINESS TYPE
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-lg"
                  >
                    <option value="">Select your business type</option>
                    {businessTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-small text-text-secondary mb-3">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-lg"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-small text-text-secondary mb-3">
                      PHONE
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-lg"
                      placeholder="Contact number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-small text-text-secondary mb-3">
                    PROJECT REQUIREMENTS
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-lg resize-none"
                    placeholder="Describe your payment infrastructure requirements, current challenges, or strategic objectives..."
                  />
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="btn-primary w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    SEND INQUIRY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}