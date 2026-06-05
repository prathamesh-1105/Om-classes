import { useEffect } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, GraduationCap, Briefcase, BookOpen, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InquiryForm } from "@/components/inquiry-form";

export default function Mscit() {
  useEffect(() => {
    document.title = "MSCIT Course | OM Computer Education";
  }, []);

  return (
    <div className="pt-20 pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24 text-primary-foreground mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>Government Recognized Certification</span>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight"
            >
              Maharashtra State Certificate in Information Technology
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-8"
            >
              The most popular digital literacy course in Maharashtra. Essential for government jobs and a solid foundation for your career.
            </motion.p>
            
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg">
                <Clock className="h-5 w-5" /> Duration: 2 Months
              </div>
              <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg">
                <BookOpen className="h-5 w-5" /> 100% Practical
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold font-serif mb-6 text-foreground">What is MS-CIT?</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  MS-CIT is an Information Technology (IT) literacy course started by MKCL in the year 2001. It is the most popular IT Literacy course in Maharashtra.
                </p>
                <p>
                  This course comprises of reading and understanding a highly illustrated book, eLearning based self-learning sessions, hands-on practice sessions, and academic interactions.
                </p>
                <p>
                  Successfully completing MS-CIT proves that you are digitally literate and equipped with the essential skills to operate computers, internet, and office productivity tools effectively.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold font-serif mb-6 text-foreground">Course Syllabus Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Computer Hardware & Operating System (Windows)",
                  "Word Processing (MS Word)",
                  "Spreadsheet Management (MS Excel)",
                  "Presentation Graphics (MS PowerPoint)",
                  "Personal Information Manager (MS Outlook)",
                  "Internet, Web Browsing & Email",
                  "Digital Lifestyle Apps & Utilities",
                  "Cyber Security & Netiquette"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted border border-border">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold font-serif mb-6 text-foreground">Benefits & Career Opportunities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 border border-border rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Govt. Jobs</h3>
                  <p className="text-sm text-muted-foreground">Mandatory qualification for various Group A, B, C & D posts in Maharashtra Government.</p>
                </div>
                <div className="p-6 border border-border rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Private Sector</h3>
                  <p className="text-sm text-muted-foreground">Enhances employability in clerical, back-office, data entry, and administrative roles.</p>
                </div>
                <div className="p-6 border border-border rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Higher Studies</h3>
                  <p className="text-sm text-muted-foreground">Provides a strong foundation for advanced technical courses and higher education.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar / Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-2xl border-border">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold font-serif mb-2">Enroll for MS-CIT</h3>
                  <p className="text-muted-foreground mb-8 text-sm">Next batch starts soon. Limited seats available.</p>
                  
                  {/* Reuse the InquiryForm but we can inject a default value contextually if we wanted, 
                      but since InquiryForm manages its own state, user will just select MSCIT from dropdown */}
                  <div className="bg-muted/50 p-4 rounded-lg mb-6 border border-border">
                    <p className="text-sm font-medium text-foreground mb-1">Eligibility:</p>
                    <p className="text-sm text-muted-foreground">Anyone who wishes to be digitally literate. No strict age or educational bar.</p>
                  </div>
                  
                  <InquiryForm />
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
