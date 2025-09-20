import { easeOut, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Landingdescription from "./components/landingpage/Landingdescription";
import Landingbutton from "./components/landingpage/Landingbutton";
import Landingimage1 from "./components/landingpage/Landingimage1";
import About from "./components/landingpage/About";
import Footer from "./components/Footer";

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeOut } },
};

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll scroll-snap-y bg-[#f2f7f9]">
      <motion.section
        className="h-screen scroll-snap-start"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.8 }}
      >
        <Navbar />
        <Landingdescription />
        <Landingbutton />
        <Landingimage1 />
      </motion.section>

      <motion.section
        className="h-screen scroll-snap-start bg-white flex flex-col justify-between"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.8 }}
      >
        <About />
        <Footer />
      </motion.section>
    </div>
  );
}
