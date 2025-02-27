import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Mission } from '../components/Mission';
import { Testimonials } from '../components/Testimonials';
import { Subscribe } from '../components/Subscribe';

export function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <Features />
        <Mission />
        <Testimonials />
        <Subscribe />
      </main>
    </PageTransition>
  );
}