import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon and vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(160,32,240,0.16),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.1),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Alonzo.co — Cosmic Luxury Streetwear
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className="mt-4 text-lg text-white/85"
          >
            Oversized tees with hip-hop, desi, and anime energy. Dark mode. Neon aura. Built for the culture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#shop"
              className="group inline-flex items-center gap-2 rounded-full bg-[#A020F0] px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(160,32,240,0.6)] ring-1 ring-white/10 transition hover:brightness-110"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#customize"
              className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3 font-semibold text-white ring-1 ring-white/20 transition hover:text-[#00FFFF] hover:ring-[#00FFFF]"
            >
              Customize Tee
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
