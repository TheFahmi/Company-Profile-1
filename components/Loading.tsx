import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900"
    >
      <div className="relative">
        {/* Outer circle */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-20 h-20 border-4 border-primary-300/30 border-t-white rounded-full"
        />
        
        {/* Inner circle */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-12 h-12 -mt-6 -ml-6 border-4 border-secondary-300/30 border-t-white rounded-full"
        />
        
        {/* Company name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-24 left-1/2 transform -translate-x-1/2 text-white text-xl font-medium"
        >
          TechVision
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
