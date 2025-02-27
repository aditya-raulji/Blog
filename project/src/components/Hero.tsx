import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
          alt="Healthcare Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              The Future of <span className="text-amber-500">Healthcare</span> Is Here
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience seamless healthcare solutions with AI-driven diagnostics and instant access to medical professionals.
            </p>
            <button className="bg-amber-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-amber-500/30">
              <img
                src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg"
                alt="AI Healthcare"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-full overflow-hidden border-4 border-amber-500/30 mt-12">
              <img
                src="https://bigmedia.bpifrance.fr/sites/default/files/styles/dossier_page/public/2024-08/Dossier%20IA%20dans%20le%20secteur%20de%20la%20sant%C3%A9.png.webp?itok=iy--1UU3"
                alt="Medical Diagnostics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}