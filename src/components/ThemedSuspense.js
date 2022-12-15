import React from "react";
import { motion } from "framer-motion";

function ThemedSuspense() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
      className="h-full w-full text-lg font-medium themeText"
    >
      Loading...
    </motion.div>
  );
}

export default ThemedSuspense;
