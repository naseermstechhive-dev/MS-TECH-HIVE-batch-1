import React from 'react';
import { Target, Eye, Lightbulb, Heart, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About MS Tech Hive</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Empowering businesses with intelligent automation solutions since 2020
          </p>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="bg-gray-800 rounded-3xl p-10">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To help businesses across industries automate their workflows and accelerate growth through innovative technology solutions. We believe that every business, regardless of size, deserves access to cutting-edge automation tools that drive efficiency and success.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-gray-800 rounded-3xl p-10">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-10 h-10 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To become the leading provider of automation solutions globally, transforming how businesses operate and helping them achieve unprecedented levels of efficiency, productivity, and growth in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-0">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-3xl p-12 md:p-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-900 font-semibold text-lg">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">12</div>
                <div className="text-gray-900 font-semibold text-lg">Industries Served</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-900 font-semibold text-lg">Happy Clients</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">5</div>
                <div className="text-gray-900 font-semibold text-lg">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Innovation */}
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <Lightbulb className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>

            {/* Customer First */}
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <Heart className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Customer First</h3>
              <p className="text-gray-300 leading-relaxed">
                Your success is our priority. We build lasting relationships through exceptional service.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <Award className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                We maintain the highest standards in everything we do, from code quality to customer support.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <Users className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-300 leading-relaxed">
                We work closely with our clients as partners to achieve shared success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Our Story</h2>
          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <p>
              MS Tech Hive was founded with a simple yet powerful vision: to make advanced automation technology accessible to businesses of all sizes. What started as a small team of passionate developers has grown into a comprehensive technology partner serving clients across 12+ industries.
            </p>
            <p>
              Our journey began when we recognized that many businesses were struggling with repetitive tasks and inefficient processes that were holding them back from achieving their full potential. We set out to change that by creating intelligent automation solutions that not only save time but also unlock new possibilities for growth.
            </p>
            <p>
              Today, we're proud to have helped hundreds of businesses transform their operations, from small startups to established enterprises. Our commitment to innovation, quality, and customer success continues to drive us forward as we build the future of business automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
