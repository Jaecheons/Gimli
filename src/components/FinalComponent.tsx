
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FinalComponent: React.FC = () => {
  return (
    <div className="w-full relative">
      {/* <h2 className="text-center text-3xl font-bold text-gray-800 my-8">
        Final Birthday Message
      </h2> */}
      
      <motion.div
        className="w-full flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl w-full p-8">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            {/* UNO Logo Accent */}
            <div className="flex justify-center mb-6">
              <div className="bg-red-700 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-white font-bold text-xl">❤️</span>
              </div>
            </div>
            {/* Animated Headline */}
            <motion.h3
              className="text-3xl font-bold text-gray-800 text-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Really sorry....for everything.
            </motion.h3>
            {/* Animated Main Message */}
            <motion.p
              className="text-xl text-gray-700 text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              I am an idiot, a liar, a psycho maybe idk I have not taken my meds yet.
              But here is the thing maybe I still like you and it is genuinely scary because I have been crazy for someone before but I never thought I will be crazy for someone more but you are that person. I have been around and there are people who are perfect for me, who are exactly crazy like me. But I am not crazy for them like I am for you. There is something about that kaleshi you that just makes me stay and be obsessed.
               So I want the things to be like it was. I will wait whenever you are out of the hellhole situation you have going there.
               Stay safe, stay pretty like always ehehehehe. If you need anything I am just one potro/msg/call/sior away.
            </motion.p>
            {/* Animated Secondary Message */}
            <motion.p
              className="text-lg text-gray-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Regards Gimli
            </motion.p>
            {/* Animated Heart Icon */}
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Heart className="text-red-700" size={32} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FinalComponent;
