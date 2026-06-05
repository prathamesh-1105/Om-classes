import { useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "@assets/om-computer-education-worli-sea-face-mumbai-computer-training_1780593994701.avif";
import img2 from "@assets/om-computer-education-worli-sea-face-mumbai-adobe-illustrator_1780594001099.webp";
import img3 from "@assets/om-computer-education-worli-sea-face-mumbai-adobe-illustrator_1780594010970.webp";
import img4 from "@assets/om-computer-education-worli-sea-face-mumbai-adobe-illustrator_1780594051430.webp";
import img5 from "@assets/om-computer-education-worli-sea-face-mumbai-adobe-illustrator-_1780594060170.jpg";

const IMAGES = [
  { src: img3, alt: "Students at a classroom orientation session", className: "col-span-1 md:col-span-2 row-span-2" },
  { src: img2, alt: "Live government workshop session at OM Computer Education", className: "col-span-1 row-span-1" },
  { src: img4, alt: "Festive celebration with students and staff", className: "col-span-1 row-span-1" },
  { src: img5, alt: "MS-CIT — Maharashtra's most trusted computer certificate", className: "col-span-1 row-span-1" },
  { src: img1, alt: "Hands-on computer training session", className: "col-span-1 row-span-1" },
  { src: img2, alt: "CMEGP programme seminar hosted at OM Computer Education", className: "col-span-1 row-span-1" },
  { src: img4, alt: "Annual event and student recognition ceremony", className: "col-span-1 md:col-span-2 row-span-1" },
];

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery | OM Computer Education";
  }, []);

  return (
    <div className="pt-20 pb-24 min-h-screen">
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            Life at OM Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A glimpse into our classrooms, events, government programmes, and the vibrant learning atmosphere we cultivate every day.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.1 }}
              className={`relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
