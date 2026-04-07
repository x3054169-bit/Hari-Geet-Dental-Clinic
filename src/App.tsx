import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  ArrowRight,
  Stethoscope,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Constants ---
const CLINIC_NAME = "HARI GEET DENTAL CLINIC";
const DOCTOR_NAME = "Dr. Nitin Agrawal";
const PHONE_NUMBER = "+91 97709 07205";
const WHATSAPP_LINK = "https://wa.me/919770907205?text=Hello%20Hari%20Geet%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.";
const ADDRESS = "57, Khajrana Rd, Behind Axis Bank, Shree Nagar Extension, Indore, MP 452018";
const RATING = 4.8;
const REVIEWS_COUNT = 89;

const SERVICES = [
  {
    title: "Root Canal Treatment",
    description: "Painless and precise RCT to save your natural teeth using advanced rotary technology.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Dental Implants",
    description: "Permanent and natural-looking tooth replacement solutions for a confident smile.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Teeth Cleaning & Whitening",
    description: "Professional scaling and polishing to remove stains and brighten your pearly whites.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Tooth Extraction",
    description: "Safe and comfortable removal of damaged or wisdom teeth with minimal discomfort.",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with veneers, bonding, and smile makeover treatments.",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

const TESTIMONIALS = [
  {
    text: "I always had great experience with Dr. Nitin Agrawal. He treated very patiently and understands patient pain.",
    author: "Patient Review",
    rating: 5
  },
  {
    text: "Very professional service, polite staff and very good treatment.",
    author: "Local Guide",
    rating: 5
  },
  {
    text: "Excellent service, friendly environment, hygienic and appropriate consultancy.",
    author: "Verified Patient",
    rating: 5
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12",
      isScrolled ? "py-4" : "py-6 md:py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ease-in-out px-6 py-3 rounded-2xl md:rounded-full",
        isScrolled 
          ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]" 
          : "bg-transparent border-transparent"
      )}>
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-[15deg] shadow-lg shadow-brand-primary/20">
            <ShieldCheck size={22} />
          </div>
          <span className="font-display font-black text-lg md:text-xl tracking-tighter text-brand-dark">
            HARI GEET <span className="text-brand-primary">DENTAL</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-sm font-bold text-slate-600 hover:text-brand-primary transition-colors py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="btn-black py-2.5 px-8 text-sm rounded-full shadow-lg shadow-brand-dark/10 hover:shadow-brand-dark/20 transition-all active:scale-95">
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-800 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-full left-6 right-6 mt-4 bg-white/90 backdrop-blur-2xl border border-white/20 p-8 md:hidden shadow-2xl rounded-3xl z-50"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-slate-800 flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowRight size={18} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand-primary" />
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="btn-black w-full py-4 rounded-2xl text-center mt-2 shadow-xl shadow-brand-dark/10"
              >
                Book Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-12 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/20 -z-10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 md:shadow-sm">
                <Star size={12} className="text-amber-400 fill-amber-400" />
                {RATING} Rating from {REVIEWS_COUNT} Patients
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 md:mb-8 leading-[0.9] tracking-tighter font-black text-brand-dark">
                Crafting <br />
                Confident <br />
                Smiles.
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-md mb-8 md:mb-12 font-medium leading-relaxed">
                Experience world-class dental care with a gentle touch. Advanced treatments tailored to your unique needs.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Working Hours Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 md:p-8 card-rounded flex flex-col justify-between shadow-sm border border-slate-50"
              >
                <div>
                  <h4 className="text-slate-900 font-bold mb-3 md:mb-4 flex items-center gap-2">
                    <Clock size={16} className="text-brand-primary" />
                    Hours
                  </h4>
                  <div className="space-y-2 text-xs md:text-sm font-medium text-slate-600">
                    <div className="flex justify-between">
                      <span>Mon – Fri</span>
                      <span>10AM – 8PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sat</span>
                      <span>10AM – 6PM</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Book Card */}
              <motion.a 
                href="#contact"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-brand-primary p-6 md:p-8 card-rounded flex flex-col justify-between group cursor-pointer shadow-xl shadow-brand-primary/20"
              >
                <div className="flex justify-end">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowRight className="-rotate-45 text-white" size={20} />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  Book Your <br /> Visit
                </h3>
              </motion.a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -15, 0],
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                x: { duration: 0.8 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Dental Care" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-slate-50 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-primary">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Painless Care</p>
                    <p className="text-xs text-slate-500">Advanced Techniques</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <span className="inline-block px-4 py-1.5 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 md:mb-8">
            OUR MISSION
          </span>
          <h2 className="text-3xl md:text-6xl mb-8 md:mb-12 font-black tracking-tighter text-brand-dark">
            Excellence in <br /> Modern Dentistry
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <p className="text-xl md:text-3xl font-medium text-slate-800 leading-tight mb-6 md:mb-8">
              At Hari Geet Dental, we believe that a healthy smile is a gateway to confidence and well-being.
            </p>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl">
              Our clinic is built on a foundation of trust, integrity, and clinical excellence. We combine years of expertise with the latest dental innovations to provide a seamless, comfortable experience for every patient.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-center">
            <div className="p-6 md:p-8 bg-slate-100/50 card-rounded w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-bold text-lg md:text-xl">Certified Care</h4>
              </div>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Fully licensed and adhering to international sterilization protocols to ensure your safety and peace of mind.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "State-of-the-art equipment", desc: "We use the latest advancements in dental technology to provide precise results.", icon: <ShieldCheck size={24} /> },
            { title: "Experienced Professionals", desc: "Our team brings years of expertise and a passion for patient care.", icon: <Users size={24} /> },
            { title: "Stress-Free Treatment", desc: "We understand dental visits can be stressful, which is why we prioritize comfort.", icon: <Sparkles size={24} />, accent: true },
            { title: "Personalized Approach", desc: "Every smile is unique, and so is every treatment plan we create.", icon: <Stethoscope size={24} /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-8 md:p-10 card-rounded border border-slate-100 flex flex-col gap-8 md:gap-12",
                item.accent ? "bg-brand-accent border-transparent" : "bg-white"
              )}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-dark text-white rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 leading-tight">{item.title}</h4>
                <p className={cn("text-xs md:text-sm leading-relaxed", item.accent ? "text-slate-700" : "text-slate-500")}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Doctor = () => {
  return (
    <section id="doctors" className="section-padding bg-white rounded-[3rem] md:rounded-[4rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=757&auto=format&fit=crop" 
                  alt={DOCTOR_NAME} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-brand-accent p-4 md:p-6 card-rounded shadow-xl">
                <p className="text-brand-primary font-bold text-base md:text-lg">15+ Years</p>
                <p className="text-brand-primary/70 text-[10px] font-bold uppercase tracking-widest">Experience</p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 md:mb-8">
              MEET THE DOCTOR
            </span>
            <h2 className="text-3xl md:text-6xl mb-6 md:mb-8 leading-tight font-black tracking-tighter text-brand-dark">
              {DOCTOR_NAME}
            </h2>
            <p className="text-lg md:text-xl text-slate-800 font-medium mb-6 md:mb-8 leading-relaxed">
              Leading the way in painless dentistry and clinical excellence in Indore.
            </p>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-500 leading-relaxed mb-8 md:mb-12">
              <p>
                Dr. Nitin Agrawal is a highly skilled dental professional dedicated to providing the highest standard of oral healthcare. With a focus on patient comfort and the latest technological advancements, he has transformed thousands of smiles.
              </p>
              <p className="hidden sm:block">
                His expertise spans across Root Canal Treatments, Dental Implants, and Cosmetic Smile Makeovers. He believes in a conservative approach to dentistry, preserving natural tooth structure whenever possible.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {[
                "Advanced Implantology",
                "Precision Root Canal",
                "Digital Smile Design",
                "Full Mouth Rehabilitation"
              ].map((spec, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-accent flex items-center justify-center text-brand-primary">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="font-bold text-sm md:text-base text-slate-700">{spec}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-slate-100">
              <a href="#contact" className="btn-black inline-flex w-full sm:w-auto">
                Consult with Dr. Nitin
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white rounded-[3rem] md:rounded-[4rem]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <div>
            <h2 className="text-3xl md:text-6xl mb-4 font-black tracking-tighter text-brand-dark">Our Services</h2>
            <p className="text-base md:text-lg text-slate-500 max-w-xl">
              Comprehensive dental care solutions for all ages, delivered with precision and care.
            </p>
          </div>
          <a href="#contact" className="btn-black w-full sm:w-auto">
            View All Services
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 card-rounded bg-brand-bg border border-slate-50 hover:border-brand-accent transition-all group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center mb-8 md:mb-10 shadow-sm group-hover:bg-brand-accent transition-colors">
                <div className="text-brand-primary">{service.icon}</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6 md:mb-8">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold group-hover:gap-4 transition-all">
                Learn more <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  const features = [
    { title: "Digital X-Rays", desc: "90% less radiation than traditional X-rays with instant high-resolution imaging." },
    { title: "Intraoral Cameras", desc: "See what we see. Real-time high-def images of your teeth for better diagnosis." },
    { title: "Rotary Endodontics", desc: "Advanced rotary technology for faster, quieter, and more precise root canals." },
    { title: "Apex Locators", desc: "Electronic precision for root canal measurement, ensuring 100% accuracy." },
    { title: "Ultrasonic Scalers", desc: "Gentle yet effective cleaning that removes plaque without damaging enamel." },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                alt="Advanced Dental Tech" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent rounded-full blur-3xl -z-10" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 md:mb-8">
              ADVANCED TECHNOLOGY
            </span>
            <h2 className="text-3xl md:text-6xl mb-8 md:mb-12 leading-tight font-black tracking-tighter text-brand-dark">Precision Meets <br /> Comfort</h2>
            <div className="space-y-8 md:space-y-10">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 md:gap-6 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-brand-primary group-hover:bg-brand-accent transition-colors">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl mb-1 md:mb-2">{f.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-white rounded-[3rem] md:rounded-[4rem]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl mb-4 font-black tracking-tighter text-brand-dark">Patient Stories</h2>
          <p className="text-base md:text-lg text-slate-500">Real experiences from our valued patients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-bg p-8 md:p-10 card-rounded border border-slate-50 relative"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-800 font-medium text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-brand-primary font-bold shadow-sm">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-slate-900">{t.author}</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <div>
            <h2 className="text-3xl md:text-6xl mb-4 font-black tracking-tighter text-brand-dark">Our Clinic</h2>
            <p className="text-base md:text-lg text-slate-500 max-w-xl">
              A glimpse into our modern facility designed for your comfort.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group relative cursor-pointer shadow-sm"
            >
              <img 
                src={img} 
                alt={`Clinic ${i+1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-white rounded-[3rem] md:rounded-[4rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-3xl md:text-6xl mb-8 md:mb-12 font-black tracking-tighter text-brand-dark">Get in Touch</h2>
            <div className="space-y-8 md:space-y-12">
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-primary flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Our Location</h4>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Call Us</h4>
                  <p className="text-slate-500 text-sm md:text-base">{PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="mt-8 md:mt-12 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 h-[250px] md:h-[350px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14719.753692234888!2d75.8792507!3d22.73053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4b187591cf%3A0x42543b037f16f1ec!2sHARI%20GEET%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1775577668702!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="bg-brand-bg p-8 md:p-16 card-rounded border border-slate-50">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Book an Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid gap-6 md:gap-8">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 md:mb-3">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b-2 border-slate-200 focus:border-brand-primary outline-none transition-all font-medium text-base md:text-lg"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 md:mb-3">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b-2 border-slate-200 focus:border-brand-primary outline-none transition-all font-medium text-base md:text-lg"
                    placeholder="+91 00000 00000"
                    value={formState.phone}
                    onChange={e => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 md:mb-3">Message</label>
                  <textarea 
                    rows={2}
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b-2 border-slate-200 focus:border-brand-primary outline-none transition-all font-medium text-base md:text-lg resize-none"
                    placeholder="How can we help you?"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>
              </div>
              <button type="submit" className="btn-black w-full py-4 md:py-5 text-base md:text-lg mt-6 md:mt-8">
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-bg pt-16 md:pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6 md:mb-8">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">
                <ShieldCheck size={20} />
              </div>
              <span className="font-display font-bold text-lg md:text-xl tracking-tight">
                HARI GEET DENTAL
              </span>
            </a>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
              Providing premium dental care with a gentle touch. Your smile is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-brand-primary transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-brand-primary transition-all shadow-sm">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 md:mb-8 uppercase tracking-widest text-[10px]">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium text-slate-500">
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-brand-primary transition-colors">Clinic Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 md:mb-8 uppercase tracking-widest text-[10px]">Services</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium text-slate-500">
              <li>Root Canal Treatment</li>
              <li>Dental Implants</li>
              <li>Teeth Whitening</li>
              <li>Cosmetic Dentistry</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 md:mb-8 uppercase tracking-widest text-[10px]">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium text-slate-500">
              <li className="flex gap-3">
                <MapPin size={16} className="text-brand-primary flex-shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-brand-primary flex-shrink-0" />
                <span>{PHONE_NUMBER}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} {CLINIC_NAME}
          </p>
          <div className="flex gap-6 md:gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-brand-primary">Privacy</a>
            <a href="#" className="hover:text-brand-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary/20 selection:text-brand-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Doctor />
        <Services />
        <Technology />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp CTA */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}
