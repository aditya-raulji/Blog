import React from 'react';
import { Stethoscope, Linkedin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Stethoscope className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold">CareSlotter</span>
            </div>
            <p className="text-gray-400">
              Transforming healthcare through innovative digital solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500">Telemedicine</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500">Health Records</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500">Appointments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 CareSlotter. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}