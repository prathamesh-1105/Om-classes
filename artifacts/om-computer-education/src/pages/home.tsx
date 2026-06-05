import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Code, FileSpreadsheet, Award, GraduationCap, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InquiryForm } from "@/components/inquiry-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@assets/om-computer-education-worli-sea-face-mumbai-adobe-illustrator_1780594010970.webp";
import sessionImg from "@assets/om-computer-education-worli-sea-face-mumbai-adobe-illustrator_1780594001099.webp";
import celebrationImg from "@assets/om-computer-education-worli-sea-face-mumbai-adobe-illustrator_1780594051430.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  useEffect(() => {
    document.title = "Home | OM Computer Education | Worli, Mumbai";
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={heroImg}
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          {/* Bottom fade into page background */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
          {/* Blue tint overlay matching brand */}
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32 lg:py-48">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium mb-6 text-white">
                <MapPinIcon className="h-4 w-4 text-secondary" />
                <span>Premier Institute in Worli, Mumbai</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif tracking-tight text-white leading-[1.1] mb-6">
                Build Your Career with{" "}
                <span className="text-secondary">Industry-Relevant</span>{" "}
                Computer Skills
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
                Join thousands of successful students who have transformed their careers with practical, hands-on computer training at OM Computer Education, Worli, Mumbai.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-14 px-8 text-base font-medium rounded-full bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transition-all"
                  asChild
                >
                  <a href="#contact-section">
                    Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base font-medium rounded-full border-white/40 text-white hover:bg-white/10 backdrop-blur"
                  asChild
                >
                  <a href="https://wa.me/917021759021" target="_blank" rel="noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5 text-[#25D366]" />
                    WhatsApp Inquiry
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-6">
                {/* MS-CIT badge */}
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white leading-tight">MS-CIT Authorized</p>
                    <p className="text-xs text-white/60">MKCL Certified Centre</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm font-medium">
                  Trusted by <span className="text-white font-bold">5000+</span> students
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-px h-8 bg-white/30 origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20">
            {[
              { value: "5000+", label: "Students Trained" },
              { value: "20+", label: "Courses Offered" },
              { value: "10+", label: "Years Experience" },
              { value: "95%", label: "Placement Assistance" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-2">{stat.value}</h3>
                <p className="text-primary-foreground/80 font-medium text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Popular Courses</h2>
            <p className="text-muted-foreground text-lg">Master the skills that top employers are looking for today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "MSCIT Certification", desc: "Maharashtra State Certificate in Information Technology — the government-recognized foundation for digital literacy and govt. job eligibility.", icon: Monitor, color: "bg-blue-500/10 text-blue-500" },
              { title: "Advanced Excel", desc: "Master formulas, pivot tables, macros, and data analysis techniques used in modern businesses.", icon: FileSpreadsheet, color: "bg-green-500/10 text-green-500" },
              { title: "Python Programming", desc: "Learn the world's most versatile language from basics to advanced application development.", icon: Code, color: "bg-yellow-500/10 text-yellow-500" },
              { title: "Web Development", desc: "Build responsive websites using HTML, CSS, JavaScript, and modern frameworks.", icon: Monitor, color: "bg-purple-500/10 text-purple-500" },
              { title: "Tally Prime with GST", desc: "Comprehensive accounting software training essential for finance and accounting roles.", icon: FileSpreadsheet, color: "bg-red-500/10 text-red-500" },
              { title: "Digital Skills Training", desc: "Essential internet, email, and digital tools training for the modern workplace.", icon: GraduationCap, color: "bg-orange-500/10 text-orange-500" }
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border group hover:border-primary/50">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${course.color}`}>
                      <course.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">{course.desc}</p>
                    <Link href={course.title === "MSCIT Certification" ? "/mscit" : "/courses"} className="inline-flex items-center text-sm font-semibold text-primary group-hover:underline">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="/courses">View All 20+ Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Why Students & Parents Trust Us</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                For over a decade, OM Computer Education has been the trusted neighbourhood computer training centre in Worli, Mumbai — delivering quality education that translates into real jobs and real confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Experienced Faculty",
                  "100% Practical Training",
                  "MKCL Authorized MS-CIT Centre",
                  "Flexible Batch Timings",
                  "Government Programme Partner",
                  "Placement Assistance"
                ].map((reason, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <span className="font-medium">{reason}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button asChild>
                  <Link href="/about">About Our Institute</Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src={sessionImg}
                alt="Government workshop at OM Computer Education"
                className="rounded-2xl w-full h-[300px] object-cover mt-12 shadow-lg"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src={celebrationImg}
                alt="Annual celebration at OM Computer Education"
                className="rounded-2xl w-full h-[300px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Contact Section */}
      <section id="contact-section" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-serif mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">Where is OM Computer Education located?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We are located at Worli Village, Behind 169 Bus Stop, Worli Sea Face, Mumbai. The institute is easily accessible to individuals in Mumbai and nearby areas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">What are the working hours?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We are open Monday to Saturday from 8:00 AM to 10:00 PM. We are closed on Sundays. We offer flexible scheduling options for individuals managing other responsibilities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">What modes of payment are accepted?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can make payment via Cash at our centre.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">Is the MSCIT certification government recognized?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely. MSCIT is an initiative of the Maharashtra Knowledge Corporation Ltd (MKCL) and is recognized by the Government of Maharashtra for various government jobs and examinations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">Do I need to own a computer to enroll?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, it is not mandatory. We provide fully equipped training facilities with the latest software so you can practice during and after your class hours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-semibold">Do you offer weekend or evening batches?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. We are open from 8:00 AM to 10:00 PM Monday to Saturday, giving you the flexibility to choose a batch time that suits your schedule — whether you are a student, working professional, or homemaker.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="shadow-xl border-border bg-card">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold font-serif mb-2">Request a Call Back</h3>
                    <p className="text-muted-foreground">Fill out the form below and our counselor will get in touch with you.</p>
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

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
