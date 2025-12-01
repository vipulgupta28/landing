import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { BackgroundLines } from "../ui/bg-lines";
import axios from "axios";

const Hero = () => {
  const containerRef = useRef(null);

  // Track count & status
  const [demoCount, setDemoCount] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const demoEndpoint = "https://landing-do7i.onrender.com/api/demo";

  useEffect(() => {
    const fetchDemoCount = async () => {
      try {
        const { data } = await axios.get(demoEndpoint);
        setDemoCount(data?.demoCount ?? 0);
      } catch (error) {
        console.error("Failed to fetch demo count", error);
      }
    };

    fetchDemoCount();
  }, [demoEndpoint]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedValue = window.localStorage.getItem("hasBookedDemo");
    if (storedValue === "true") {
      setHasClicked(true);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        await axios.get(demoEndpoint);
        console.log("Pingged")
      } catch (error) {
        console.error("Backend ping failed", error);
      }
    }, 20000);

    return () => clearInterval(intervalId);
  }, [demoEndpoint]);

  const handleDemoClick = async () => {
    if (hasClicked || isLoading) return;

    setIsLoading(true);

    try {
      const { data } = await axios.post(demoEndpoint);
      setDemoCount(data?.demoCount ?? demoCount + 1);
      setHasClicked(true);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("hasBookedDemo", "true");
      }
    } catch (error) {
      console.error("Failed to book demo", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll animation logic unchanged
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    springConfig
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.8]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0]),
    springConfig
  );

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative h-screen mt-10 flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0 opacity-30 [background-size:20px_20px] [background-image:radial-gradient(#444444_1px,transparent_1px)]" />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        style={{ y, scale, opacity }}
      >
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
              Everything, Everywhere All at once
            </h1>

            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              <p className="mb-3 md:mb-4">Your trusted and verified news app</p>
            </div>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-4 leading-relaxed">
              Stay ahead with real-time updates, deep insights, and curated
              stories that matter — all in one trusted place.
            </p>

            <p className="border rounded-full p-3">{demoCount} demo requests so far</p>

            {/* Button */}
            <div className="pt-2">
              <button
                onClick={handleDemoClick}
                disabled={hasClicked || isLoading}
                className={`relative font-medium p-3 rounded-xl transition-all ${
                  hasClicked
                    ? "bg-gray-500 text-gray-300 cursor-not-allowed opacity-70"
                    : "bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer"
                }`}
              >
                {hasClicked ? "Demo Booked ✔" : isLoading ? "Booking..." : "Book a demo"}
              </button>
            </div>
          </div>
        </BackgroundLines>
      </motion.div>
    </div>
  );
};

export default Hero;
