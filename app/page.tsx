'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Package, Leaf, Award } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/cart-context';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";


const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "BMS Super X Capsule",
    category: "Male Wellness",
    MRP: '₹1999',
    price: "₹999",
    description: 'Boosts vitality, stamina & physical strength',
    image: '/images/capsule1.webp'
  },
  {
    id: 2,
    name: 'BMS Super X Oil',
    category: 'Male Wellness',
    MRP: '₹999',
    price: '₹699',
    description: "Best Massage Oil for men, strength, vitality aur nourishment support. ",
    image: '/images/oil1.webp'
  },

  {
    id: 3,
    name: 'BMS Super X Combo Pack (Capsule+Oil)',
    category: 'Male Wellness',
    MRP: '₹2998',
    price: '₹1399',
    description: 'Boost Vitality, Stamina & Physical Strength with Natural Ayurvedic Support – BMS Super X Capsule + Herbal Massage Oil for Energy, Stress Relief & Overall Performance.',
    image: "/images/Combo.jpeg"
  },
  {
    id: 4,
    name: 'Brahmi Hair Oil',
    category: 'Hair',
    price: '₹349',
    description: 'Strengthening and cooling',
    image: "/images/OutOfStock.webp"
  },
];
const HERO_IMAGES = [
   {
    src: "/images/1.png",
    alt: "Ayurvedic Wellness",
  },
   {
    src: "/images/2.png",
    alt: "Ayurvedic Wellness",
  },
   {
    src: "/images/3.png",
    alt: "Ayurvedic Wellness",
  }
];

const BENEFITS = [
  {
    icon: Leaf,
    title: '100% Ayurvedic & Natural',
    description: 'Made with pure herbal ingredients inspired by classical Ayurveda.',
  },
  {
    icon: Award,
    title: 'Lab-Tested & Certified',
    description: 'GMP, AYUSH, ISO & FSSAI certified for quality and safety.',
  },
  {
    icon: Package,
    title: 'No Harmful Chemicals',
    description: 'Free from parabens, sulfates and synthetic chemicals.',
  },
  {
    icon: ShoppingCart,
    title: 'Fast Delivery Across India',
    description: 'Quick and reliable shipping with safe packaging.',
  },
  {
    icon: Package,
    title: 'Easy 15-Day Returns',
    description: 'Hassle-free returns on damaged or wrong products.',
  },
  {
    icon: Award,
    title: 'Trusted by Thousands',
    description: 'Loved and recommended by customers across India.',
  },
];


export default function Home() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section - Full Width Carousel */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <Carousel opts={{ loop: true }} className="w-full h-full">
          <CarouselContent>
            {HERO_IMAGES.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[90vh]">

                  {/* Background Image with Slow Zoom */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover scale-110 transition-transform duration-6000 ease-out hover:scale-125"

                  />

                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 " />

                  {/* Hero Content */}
        
                  <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
                    <div className="max-w-3xl text-center rounded-2xl p-6 sm:p-10">

                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight"
                      >
                        Shop Ayurvedic Products —
                        <motion.span
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                          className="block text-primary drop-shadow-lg"
                        >
                          BAMUSO Ayurveda Store
                        </motion.span>
                      </motion.h1>

                      <p className="text-lg text-white/90 mb-8">
                        India’s most trusted Ayurvedic wellness range for daily health.
                        Pure, certified and effective solutions for every stage of life.
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex justify-center gap-4 flex-wrap">
                        <Button
                          size="lg"
                          className="
                          bg-primary 
                          hover:bg-primary/90
                          shadow-lg shadow-primary/40
                          hover:shadow-primary/80
                          hover:scale-[1.06]
                          active:scale-95
                          transition-all duration-300
                        "
                        >
                          <Link href="/products">Shop Now</Link>
                        </Button>

                        <Button
                          size="lg"
                          variant="outline"
                          className="
                          group 
                          text-white 
                          border-white/70
                          bg-white/10
                          backdrop-blur
                          hover:bg-white/20
                          hover:scale-105
                          transition-all
                        "
                        >
                          <a
                            href="https://wa.me/919990359097"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="w-4 h-4 mr-2 inline transition-transform group-hover:translate-x-1" />
                            WhatsApp Order
                          </a>
                        </Button>
                      </div>

                      {/* Trust Indicators */}
                      <div className="mt-8 flex justify-center gap-6 text-white/80 text-sm">
                        <span>🌿 100% Natural</span>
                        <span>🇮🇳 Made in India</span>
                      </div>

                    </div>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls */}
          <CarouselPrevious className="left-4 z-50 h-12 w-12 rounded-full bg-black/60 text-white border border-white/20 backdrop-blur hover:bg-black/80 hover:scale-110 transition" />
          <CarouselNext className="right-4 z-50 h-12 w-12 rounded-full bg-black/60 text-white border border-white/20 backdrop-blur hover:bg-black/80 hover:scale-110 transition" />
        </Carousel>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
            Featured Products
          </h2>
          <p className="text-foreground/70 mb-12">Curated blends for your wellness journey</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {FEATURED_PRODUCTS.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-primary font-semibold mb-1">{product.category}</p>
                  <h3 className="font-serif font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-serif font-bold text-primary">{product.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <Link href={`/products/${product.id}`}>View</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                      <a href={`https://wa.me/919990359097?text=I'm interested in ${product.name}`} target="_blank" rel="noopener noreferrer">
                        Order
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Brand Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">
            Welcome to BAMUSO Ayurveda
          </h2>

          <p className="text-lg text-foreground/80 leading-relaxed">
            India’s ancient Ayurvedic tradition and the perfect blend of modern science.
          </p>

          <p className="text-lg text-foreground/80 leading-relaxed">
            Our goal is — to deliver true, safe, and effective Ayurveda to every home.
          </p>

          <p className="text-lg text-foreground/80 leading-relaxed">
            At BAMUSO, we don’t just make products…
            We initiate a new journey of health, balance, and life energy.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Our Ayurvedic Product Categories
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Male Wellness & Stamina", link: "/products" },
              { title: "Women Wellness", link: "/products?cat=women" },
              { title: "Immunity & Daily Health", link: "/products" },
              { title: "Weight Loss & Digestion", link: "/products" },
              { title: "Beauty & Skin Care", link: "/products" },
              { title: "Mind, Stress & Sleep", link: "/products" },
              { title: "Special Condition Remedies", link: "/products" },
              { title: "Super Premium Range", link: "/products" },
            ].map((cat, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition">
                <h3 className="text-xl font-serif font-bold mb-4">{cat.title}</h3>
                <Button asChild>
                  <Link href={cat.link}>Shop Now</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
            Why Choose BAMUSO Ayurveda?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="
    p-8 text-center
    border border-border
    hover:border-primary/50
    hover:-translate-y-2
    hover:shadow-xl
    transition-all duration-300
  ">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary transition-transform group-hover:scale-110" />

                  <h3 className="text-xl font-serif font-bold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Our Promise */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">
            Our Promise to You
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Nature-Sourced",
              "Ayurveda-Approved",
              "Scientifically-Tested",
              "Safe for Daily Use",
              "Results You Can Feel",
            ].map((item, i) => (
              <Card key={i} className="p-6">
                <p className="font-semibold">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-12 text-foreground">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rahul S.', review: 'Products are authentic and highly effective. Feeling more energetic!' },
              { name: 'Sneha Sharma', review: 'Natural, safe, and genuine Ayurveda. Loved the quality.' },
              { name: 'Amit K.', review: 'Fast delivery, great support, excellent results!' },
            ].map((r, idx) => (
              <Card key={idx} className="p-6 border border-border text-left hover:shadow-lg transition">
                <p className="text-foreground/70 mb-4">&quot;{r.review}&quot;</p>
                <h4 className="font-bold text-foreground">{r.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Stay Updated with Wellness Tips
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our WhatsApp channel for wellness tips, product updates, and special offers
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <a href="https://wa.me/919990359097" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Subscribe on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
