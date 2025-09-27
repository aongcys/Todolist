import { AnimatePresence, motion } from "framer-motion";
import { sectionvariants } from "./components/changepageanimate/sectionvariants";
import Landingdescription from "./components/landingpage/Landingdescription";
import Landingbutton from "./components/landingpage/Landingbutton";
import Landingimage1 from "./components/landingpage/Landingimage1";
import About from "./components/landingpage/About";
import Footer from "./components/Footer";
import Publicnavbar from "./components/Navbar/publicnavbar";

export default function Home() {
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
