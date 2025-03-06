import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/Layout';
import ServiceIcon from '../components/ServiceIcon';
import { services } from '../data/services';
import type { GetServerSideProps, NextPage } from 'next';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
}

interface ServicesProps {
  services: Service[];
}

export const getServerSideProps: GetServerSideProps<ServicesProps> = async () => {
  return { props: { services } };
};

export default function Services({ services }: ServicesProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Layout
      title="Our Services"
      description="Explore our comprehensive range of technology solutions and services"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl mb-8 font-inter">
              Comprehensive technology solutions tailored to transform your business
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            ref={servicesRef}
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
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto">
                    <ServiceIcon
                      name={service.icon}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            ref={processRef}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                We follow a systematic approach to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <motion.div
                variants={fadeIn}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-elegant"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl font-playfair font-bold ml-4 text-gray-900 dark:text-white">
                    Discovery & Analysis
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We begin by understanding your business needs, challenges, and objectives through comprehensive analysis and consultation.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                variants={fadeIn}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-elegant"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-xl font-playfair font-bold ml-4 text-gray-900 dark:text-white">
                    Strategy & Planning
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We develop a tailored strategy and detailed implementation plan aligned with your goals and timeline.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                variants={fadeIn}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-elegant"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-xl font-playfair font-bold ml-4 text-gray-900 dark:text-white">
                    Implementation
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Our expert team executes the plan using industry best practices and cutting-edge technologies.
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                variants={fadeIn}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-elegant"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-xl font-playfair font-bold ml-4 text-gray-900 dark:text-white">
                    Monitoring & Support
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We provide ongoing monitoring, optimization, and support to ensure long-term success.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help you achieve your technology goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-900 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
