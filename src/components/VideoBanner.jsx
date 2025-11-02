import React from 'react';
import { motion } from 'framer-motion';

const VideoBanner = () => {
  return (
    <section id="lookbook" className="relative overflow-hidden">
      <div className="relative h-[60vh] w-full">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-street-graffiti-artist-1083/1080p.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold">Lookbook</h3>
            <p className="mt-3 text-white/80">
              Street shots, studio vibes, and collabs. Dive into the world of Alonzo.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="rounded-full bg-[#00FFFF] px-5 py-2.5 font-semibold text-black shadow-[0_0_25px_rgba(0,255,255,0.5)] hover:opacity-90 transition"
              >
                Explore Lookbook
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
