import React from 'react';
import { Palette, Code, Zap, TrendingUp, BarChart, Users } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to automate your work and accelerate your growth across all business functions.
              </p>
            </div>

            {/* Design & Branding Section */}
            <div className="space-y-16">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800">
                      <Palette className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Design & Branding</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Web Designing */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Web Designing</h3>
                    <p className="text-gray-300 leading-relaxed">Modern, responsive websites that convert visitors into customers</p>
                  </div>

                  {/* Graphic Designing */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Graphic Designing</h3>
                    <p className="text-gray-300 leading-relaxed">Creative visual solutions for all your branding needs</p>
                  </div>

                  {/* Branding & Visual Identity */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Branding & Visual Identity</h3>
                    <p className="text-gray-300 leading-relaxed">Complete brand identity packages that make you stand out</p>
                  </div>
                </div>
              </div>

              {/* Marketing & Ads Section */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-r from-green-600 to-green-800">
                      <TrendingUp className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Marketing & Ads</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* SEO */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">SEO</h3>
                    <p className="text-gray-300 leading-relaxed">Boost your search rankings and organic traffic</p>
                  </div>

                  {/* Social Media Marketing */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Social Media Marketing</h3>
                    <p className="text-gray-300 leading-relaxed">Engage your audience across all social platforms</p>
                  </div>

                  {/* AI-Powered Ad Generator */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">AI-Powered Ad Generator</h3>
                    <p className="text-gray-300 leading-relaxed">Create high-converting ads with artificial intelligence</p>
                  </div>

                  {/* No-Code Landing Page Builder */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">No-Code Landing Page Builder</h3>
                    <p className="text-gray-300 leading-relaxed">Build professional landing pages without coding</p>
                  </div>
                </div>
              </div>

              {/* Automation Section */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800">
                      <Zap className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Automation</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* WhatsApp CRM Automation */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">WhatsApp CRM Automation</h3>
                    <p className="text-gray-300 leading-relaxed">Automate customer interactions through WhatsApp</p>
                  </div>

                  {/* Lead Nurturing Workflow */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Lead Nurturing Workflow</h3>
                    <p className="text-gray-300 leading-relaxed">Convert leads into customers with automated sequences</p>
                  </div>

                  {/* Social Media Content Automation */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Social Media Content Automation</h3>
                    <p className="text-gray-300 leading-relaxed">Schedule and automate your social media presence</p>
                  </div>
                </div>
              </div>

              {/* Analytics Section */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-r from-red-600 to-red-800">
                      <BarChart className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Analytics</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Campaign Performance Dashboards */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Campaign Performance Dashboards</h3>
                    <p className="text-gray-300 leading-relaxed">Real-time insights into your marketing campaigns</p>
                  </div>

                  {/* Client Portal & Billing Tools */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Client Portal & Billing Tools</h3>
                    <p className="text-gray-300 leading-relaxed">Streamlined client management and billing solutions</p>
                  </div>
                </div>
              </div>

              {/* Dev & Hosting Section */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800">
                      <Code className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Dev & Hosting</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Mobile App Development */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Mobile App Development</h3>
                    <p className="text-gray-300 leading-relaxed">Native and cross-platform mobile applications</p>
                  </div>

                  {/* Domain Hosting */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Domain Hosting</h3>
                    <p className="text-gray-300 leading-relaxed">Reliable hosting solutions for your websites</p>
                  </div>

                  {/* Custom Integrations */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Custom Integrations</h3>
                    <p className="text-gray-300 leading-relaxed">Connect your tools and automate workflows</p>
                  </div>
                </div>
              </div>

              {/* Onboarding Section */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-r from-orange-600 to-orange-800">
                      <Users className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Onboarding</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Interactive Product Demos */}
                  <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-600 to-orange-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">Interactive Product Demos</h3>
                    <p className="text-gray-300 leading-relaxed">Engaging demos that showcase your product's value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* CTA Section */}
      <div className="mt-20 text-center bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Let's discuss how our services can help automate your work and accelerate your business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
            Contact Us
          </a>
          <a href="/about" className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
            Learn More
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-400">© 2025 MS Tech Hive. All rights reserved.</p>
      </footer>
    </div>
  );
}