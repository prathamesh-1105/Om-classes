import { useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    course: "MSCIT & Advanced Excel",
    quote: "OM Computer Education completely transformed my career path. The faculty is extremely patient and ensures you understand the concepts practically, not just theoretically. Thanks to them, I secured a back-office job immediately after completing my courses.",
    rating: 5,
    img: "/images/student_1.jpg"
  },
  {
    name: "Rahul Desai",
    course: "Web Development",
    quote: "The hands-on approach here is unmatched. I came in with zero coding knowledge and built three full websites by the end of the course. The trainers focus on industry standards, which gave me immense confidence during interviews.",
    rating: 5,
    img: "/images/student_2.jpg"
  },
  {
    name: "Anjali Gupta",
    course: "Tally Prime",
    quote: "I was struggling with commerce concepts before joining. The Tally course here is very comprehensive. They provided real-world GST scenarios which helped me clear my accountant interview easily. Highly recommended for commerce students!",
    rating: 5,
    img: "/images/student_3.jpg"
  },
  {
    name: "Vikram Singh",
    course: "Python Programming",
    quote: "Excellent infrastructure and knowledgeable staff. They don't just rush through the syllabus; they ensure every student is on the same page. The Python projects we did were actually useful and challenging.",
    rating: 4,
    img: "/images/student_1.jpg" // Reusing
  }
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    document.title = "Testimonials | OM Computer Education";
  }, []);

  return (
    <div className="pt-20 pb-24 min-h-screen bg-muted/30">
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            Student Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear what our alumni have to say about their learning experience.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="pl-4 min-w-[100%] md:min-w-[50%] lg:min-w-[40%]">
                <div className="bg-card border border-border p-8 rounded-2xl shadow-lg h-full flex flex-col relative">
                  <Quote className="absolute top-6 right-8 h-12 w-12 text-primary/10" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                    <div>
                      <h3 className="font-bold text-lg">{t.name}</h3>
                      <p className="text-sm text-primary font-medium">{t.course}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow italic mb-6">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex gap-1 mt-auto">
                    {[...Array(5)].map((_, idx) => (
                      <Star 
                        key={idx} 
                        className={`h-5 w-5 ${idx < t.rating ? "fill-secondary text-secondary" : "text-muted"}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
          Swipe to see more <span>→</span>
        </p>
      </section>
      
      {/* Wall of numbers */}
      <section className="py-20 mt-12 bg-primary text-primary-foreground border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif mb-12">Join Our Growing Community</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div>
              <p className="text-4xl md:text-6xl font-bold mb-2">4.9/5</p>
              <p className="text-primary-foreground/80 font-medium">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-bold mb-2">500+</p>
              <p className="text-primary-foreground/80 font-medium">Google Reviews</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-bold mb-2">95%</p>
              <p className="text-primary-foreground/80 font-medium">Completion Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
