import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Monitor, Award, Clock, MapPin, CreditCard } from "lucide-react";
import sessionImg from "@assets/om-computer-education-worli-sea-face-mumbai-adobe-illustrator_1780594001099.webp";
import celebrationImg from "@assets/om-computer-education-worli-sea-face-mumbai-adobe-illustrator_1780594051430.webp";

export default function About() {
  useEffect(() => {
    document.title = "About Us | OM Computer Education";
  }, []);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            About OM Computer Education
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Empowering Worli and Mumbai with digital literacy and advanced computing skills for over a decade.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-serif mb-6 text-primary">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Om Computer Education, located in Worli Sea Face, Mumbai, has been a leader in skill development since many years. The institute specialises in providing a comprehensive range of training programs designed to equip individuals with the practical knowledge and expertise needed to excel in their chosen fields.
                </p>
                <p>
                  We are a prominent institution in the IT and vocational training sector, offering various skill-building programs tailored to meet the demands of today's competitive job market. Whether you are looking to improve your technical skills, leadership capabilities, or industry-specific knowledge, OM Computer Education has the right program for you.
                </p>
                <p>
                  With a wide range of offerings including IT, management, soft skills, and vocational training, OM Computer Education stands as a comprehensive solution for all your skill development needs. Our highly experienced team is committed to delivering high-quality training to each participant.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 bg-muted/60 rounded-xl p-4">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">Worli Village, Behind 169 Bus Stop, Worli Sea Face, Mumbai</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-muted/60 rounded-xl p-4">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">Working Hours</p>
                    <p className="text-sm text-muted-foreground">Mon – Sat: 8:00 AM – 10:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-muted/60 rounded-xl p-4">
                  <CreditCard className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">Payment</p>
                    <p className="text-sm text-muted-foreground">Cash accepted</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl h-[260px]"
              >
                <img src={sessionImg} alt="Live workshop session at OM Computer Education" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="rounded-2xl overflow-hidden shadow-2xl h-[200px]"
              >
                <img src={celebrationImg} alt="Annual celebration at OM Computer Education" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20"
            >
              <h3 className="text-2xl font-bold font-serif mb-4 flex items-center gap-3">
                <Award className="h-6 w-6 text-secondary" /> Our Mission
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To provide high-quality, accessible, and industry-relevant computer education that empowers individuals to succeed in a digital-first world. We strive to create an inclusive learning environment where technical skills meet practical application.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20"
            >
              <h3 className="text-2xl font-bold font-serif mb-4 flex items-center gap-3">
                <Users className="h-6 w-6 text-secondary" /> Our Vision
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To be the leading institution for computer training in Mumbai, recognized for excellence in teaching, innovative learning methodologies, and producing highly skilled professionals who drive technological advancement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities & Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold font-serif mb-12 text-center">Our Learning Environment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Infrastructure</h3>
              <p className="text-muted-foreground text-sm">State-of-the-art training facilities designed to foster growth and creativity, providing participants with the ideal atmosphere to focus on professional development.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Practical</h3>
              <p className="text-muted-foreground text-sm">We believe in learning by doing. Every concept is backed by practical exercises, projects, and real-world scenarios.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Faculty</h3>
              <p className="text-muted-foreground text-sm">Learn from industry professionals who bring years of real-world experience and patience into the classroom.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
