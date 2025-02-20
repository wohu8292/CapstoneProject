import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";


const accordianItems = [
    { title: "title1", content: "ARC - A thrift store for buying reused material" },
    { title: "title2", content: "Basic Needs Center - Essential resources for what you need the most " },
    { title: "title3", content: "resource3" }
  ];

  const Accordian = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleItem = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
        <div className="w-full max-w-2xl mx-auto mt-5 bg-primaryGold text-[#000] font-arimo">
          {accordianItems.map((item, index) => (
            <div key={index} className="border-b border-[#000]">
              <button
                className="flex justify-between items-center w-full p-3 text-left text-lg bg-[#000] text-primaryGold hover:bg-[#333] focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                {item.title}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {openIndex === index && (
                  <div className="p-3 bg-white text-black border-t border-[#000]">
                    {item.content}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      );
    };

  export default Accordian