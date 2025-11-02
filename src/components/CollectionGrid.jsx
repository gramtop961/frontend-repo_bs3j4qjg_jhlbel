import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Galactic Oversize Tee',
    price: '₹1,999',
    image: 'https://images.unsplash.com/photo-1547999962-65403ca852f9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHYWxhY3RpYyUyME92ZXJzaXplJTIwVGVlfGVufDB8MHx8fDE3NjIwODQ5MTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    colors: ['#FFFFFF', '#A020F0', '#00FFFF'],
  },
  {
    id: 2,
    title: 'Neon Tokyo Tee',
    price: '₹1,899',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
    colors: ['#000000', '#A020F0', '#00FFFF'],
  },
  {
    id: 3,
    title: 'Desi Hip-Hop Club Tee',
    price: '₹2,199',
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop',
    colors: ['#FFFFFF', '#000000'],
  },
  {
    id: 4,
    title: 'Anime Arc Tee',
    price: '₹1,799',
    image: 'https://images.unsplash.com/photo-1755756383664-af3cf523242b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmltZSUyMEFyYyUyMFRlZXxlbnwwfDB8fHwxNzYyMDg0OTE4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    colors: ['#FFFFFF', '#A020F0'],
  },
];

const ProductCard = ({ product }) => {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 hover:ring-[#00FFFF]/60 transition"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
      </div>
      <div className="mt-3 flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{product.title}</h3>
          <p className="text-white/70 text-sm">{product.price}</p>
        </div>
        <div className="flex items-center gap-1.5">
          {product.colors.map((c) => (
            <span
              key={c}
              className="h-4 w-4 rounded-full ring-2 ring-white/20"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const CollectionGrid = () => {
  return (
    <section id="shop" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Fresh Drops</h2>
            <p className="text-white/70 mt-2">Oversized cuts. Premium cotton. Limited runs.</p>
          </div>
          <a href="#" className="hidden sm:inline-block rounded-full border border-white/20 px-5 py-2.5 text-sm hover:border-[#A020F0] hover:text-[#A020F0] transition">View All</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
