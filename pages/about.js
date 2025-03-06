import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Layout from '../components/Layout';
import { companyData } from '../data/company';

export async function getServerSideProps() {
  return { props: { companyData } }
}

export default function About({ companyData }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Layout
      title="About Us | TechVision Solutions"
      description="Learn about our journey, our team, and our vision for the future of technology"
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
              Our Story
            </h1>
            <p className="text-xl mb-8 font-inter">
              {companyData.stats.yearsInBusiness}+ years of innovation and excellence in technology solutions
            </p>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            ref={statsRef}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: companyData.stats.yearsInBusiness, label: 'Years in Business' },
              { value: companyData.stats.completedProjects, label: 'Projects Delivered' },
              { value: companyData.stats.happyClients, label: 'Happy Clients' },
              { value: companyData.stats.teamMembers, label: 'Team Members' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}+</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            ref={visionRef}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-gray-900 dark:text-white">
              Our Vision & Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-elegant">
                <h3 className="text-xl font-playfair font-bold mb-4 text-primary-600 dark:text-primary-400">
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the leading innovator in technology solutions, transforming businesses and empowering success in the digital age.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-elegant">
                <h3 className="text-xl font-playfair font-bold mb-4 text-primary-600 dark:text-primary-400">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To deliver cutting-edge technology solutions that drive growth, efficiency, and innovation for our clients while maintaining the highest standards of excellence and integrity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <motion.div
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {companyData.team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our story as we continue to innovate and transform the digital landscape
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
}
