import { AnimatePresence, motion, Variants } from "framer-motion";
import Landingdescription from "../components/landingpage/Landingdescription";
import Landingbutton from "../components/landingpage/Landingbutton";
import Landingimage1 from "../components/landingpage/Landingimage1";
import About from "../components/landingpage/About";
import Footer from "../components/Footer";
import Publicnavbar from "../components/Navbar/publicnavbar";

export default function Home() {

  const sectionvariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1,
      y: 30,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };


  return (
    <div className="h-screen overflow-y-scroll scroll-snap-y bg-[#f2f7f9]">
      <AnimatePresence>
        <motion.div
          key='section1'
          className="h-screen scroll-snap-start"
          variants={sectionvariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.8 }}
        >
          <Publicnavbar />
          <Landingdescription />
          <Landingbutton />
          <Landingimage1 />
        </motion.div>

        <motion.div
          key='section2'
          className="h-screen scroll-snap-start bg-white flex flex-col justify-between"
          variants={sectionvariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.8 }}
        >
          <About />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
