import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceIcon from './ServiceIcon';

export default function Services({ services }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={servicesRef}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">Our Services</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to transform your business and drive growth
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ServiceIcon
                    name={service.icon}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4 text-white group-hover:text-primary-200 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-white/70 hover:text-white flex items-center gap-2 transition-colors duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
