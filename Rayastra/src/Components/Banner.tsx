import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Banner = () => {
  const lines = ["Come", "Join", "Us"];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden px-6 text-center">
      
      {/* Animated Heading */}
      <div className="space-y-4">
        {lines.map((line, i) => (
          <motion.h1
            key={line}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={headingVariants}
            className="text-[4rem] sm:text-[6rem] font-bold leading-tight"
          >
            {line}
          </motion.h1>
        ))}
      </div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="mt-8 text-lg sm:text-xl text-white/90 max-w-xl"
      >
        #Stay informed effortlessly
      </motion.p>

      {/* Discord Button */}
      <motion.a
        href="https://discord.gg/MGdQ2u8A"  // <-- Replace with your Discord Invite Link
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="mt-6 inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
      >
        Join Our Discord
      </motion.a>
    </section>
  );
};

export default Banner;
