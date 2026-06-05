import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Code, Monitor, FileSpreadsheet, Calculator, Database, Palette, Terminal, Settings, Globe, Award, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ALL_COURSES = [
  { id: "mscit", title: "MSCIT", desc: "Maharashtra State Certificate in Information Technology. Government recognized foundation course.", duration: "2 Months", icon: Award },
  { id: "adv-excel", title: "Advanced Excel", desc: "Master formulas, pivot tables, macros, vlookup, and data analysis techniques.", duration: "1 Month", icon: FileSpreadsheet },
  { id: "tally", title: "Tally Prime with GST", desc: "Comprehensive accounting software training essential for finance roles.", duration: "3 Months", icon: Calculator },
  { id: "python", title: "Python Programming", desc: "Learn Python from basics to advanced. Ideal for data science and web backend.", duration: "2 Months", icon: Terminal },
  { id: "web-dev", title: "Web Development", desc: "Full stack web development including HTML, CSS, JavaScript, and React.", duration: "4 Months", icon: Globe },
  { id: "html", title: "HTML & HTML5", desc: "The standard markup language for creating web pages and web applications.", duration: "2 Weeks", icon: Code },
  { id: "css", title: "CSS & CSS3", desc: "Style web pages beautifully with modern CSS layout techniques like Flexbox and Grid.", duration: "3 Weeks", icon: Palette },
  { id: "js", title: "JavaScript", desc: "Add interactivity to websites. Learn ES6+ features and DOM manipulation.", duration: "1 Month", icon: Code },
  { id: "c-prog", title: "C Programming", desc: "Strong foundation in programming logic, memory management, and algorithms.", duration: "1.5 Months", icon: Terminal },
  { id: "cpp", title: "C++ Programming", desc: "Object-oriented programming concepts using C++. Great for software engineering.", duration: "1.5 Months", icon: Terminal },
  { id: "ms-office", title: "MS Office Mastery", desc: "In-depth training in Word, PowerPoint, and basic Excel for office productivity.", duration: "1 Month", icon: FileSpreadsheet },
  { id: "basics", title: "Computer Basics", desc: "For absolute beginners. Learn OS navigation, file management, and typing.", duration: "15 Days", icon: Monitor },
  { id: "internet", title: "Internet Skills", desc: "Safe browsing, email etiquette, online banking, and digital awareness.", duration: "15 Days", icon: Globe },
  { id: "resume", title: "Resume Building", desc: "Workshop on creating ATS-friendly, professional resumes that get shortlisted.", duration: "1 Week", icon: FileSpreadsheet },
  { id: "interview", title: "Interview Prep", desc: "Mock interviews, communication skills, and technical round preparation.", duration: "2 Weeks", icon: Users },
  { id: "digital", title: "Digital Skills Training", desc: "Modern workplace tools like Google Workspace, Zoom, Slack, and cloud storage.", duration: "1 Month", icon: Settings },
  { id: "illustrator", title: "Adobe Illustrator", desc: "Create vector graphics, logos, illustrations, and print-ready designs with industry-standard Adobe Illustrator.", duration: "1.5 Months", icon: Palette },
  { id: "photoshop", title: "Adobe Photoshop", desc: "Master photo editing, digital painting, and graphic design using Adobe Photoshop.", duration: "1.5 Months", icon: Palette },
  { id: "dreamweaver", title: "Adobe Dreamweaver", desc: "Design and publish websites visually with Dreamweaver's powerful code and design view.", duration: "1 Month", icon: Globe },
];

function Users(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  )
}


export default function Courses() {
  useEffect(() => {
    document.title = "Courses | OM Computer Education";
  }, []);

  return (
    <div className="pt-20 pb-24">
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-24 mb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4 text-primary-foreground"
          >
            Our Training Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            From basic digital literacy to advanced programming, find the right course to accelerate your career.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ALL_COURSES.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border group overflow-hidden flex flex-col">
                <CardContent className="p-6 sm:p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <course.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none hover:bg-secondary/20 font-medium">
                      {course.duration}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{course.desc}</p>
                  
                  <div className="pt-4 border-t border-border mt-auto">
                    <Link 
                      href={course.id === "mscit" ? "/mscit" : `/contact?course=${encodeURIComponent(course.title)}`} 
                      className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors w-full justify-between"
                    >
                      <span>{course.id === "mscit" ? "View Details" : "Inquire Now"}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
