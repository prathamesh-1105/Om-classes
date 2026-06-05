import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InquiryForm } from "@/components/inquiry-form";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | OM Computer Education";
  }, []);

  return (
    <div className="pt-20 pb-24">
      {/* Header */}
      <section className="bg-muted py-16 text-center border-b border-border">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have questions about our courses? Visit our institute or drop us a message. We're here to help you make the right career choice.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Worli Village, Behind 169 Bus Stop,<br />Worli Sea Face, Mumbai 400030
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-border">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-1">+91 70217 59021</p>
                    <p className="text-sm text-muted-foreground">+91 93246 23066</p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-1">info@omcomputereducation.com</p>
                    <p className="text-sm text-muted-foreground">admissions@omcomputereducation.com</p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">Working Hours</h3>
                    <p className="text-sm text-muted-foreground mb-1">Mon – Sat: 8:00 AM – 10:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-md h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.2!2d72.8177!3d18.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU5JzU1LjAiTiA3MsKwNDknMDMuNiJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OM Computer Education Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="shadow-xl border-border h-full bg-card">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold font-serif mb-2 text-foreground">Send an Inquiry</h2>
                    <p className="text-muted-foreground">Fill out the form below and we will contact you as soon as possible.</p>
                  </div>
                  <InquiryForm />
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
