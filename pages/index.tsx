import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Layout from '../components/Layout';
import Services from '../components/Services';
import { companyData } from '../data/company';
import { services } from '../data/services';

interface CompanyStats {
  yearsInBusiness: number;
  completedProjects: number;
  happyClients: number;
  teamMembers: number;
}

interface Achievement {
  title: string;
  description: string;
}

interface CompanyData {
  description: string;
  stats: CompanyStats;
  achievements: Achievement[];
  testimonials: {
    id: number;
    name: string;
    company: string;
    comment: string;
    image: string;
  }[];
}

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface HomeProps {
  companyData: CompanyData;
  services: Service[];
}

export async function getStaticProps() {
  return {
    props: { companyData, services }
  };
}

export default function Home({ companyData, services }: HomeProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const [achievementsRef, achievementsInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });

  return (
    <Layout
      title="TechVision - Transforming Business Through Technology"
      description={companyData.description}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8 lg:col-span-3"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-playfair font-bold leading-tight"
              >
                Transform Your Business Through Technology
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-200 leading-relaxed max-w-xl"
              >
                Empower your business with cutting-edge solutions. We help companies innovate, grow, and succeed in the digital age.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-primary-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 text-center"
                >
                  Explore Our Services
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Get Started
                </motion.a>
              </motion.div>

            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] hidden lg:block lg:col-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-[40px] blur-3xl" />
              <Image
                src="/images/hero-illustration.svg"
                alt="Business Technology Illustration"
                layout="fill"
                objectFit="contain"
                className="relative z-10"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-[15%] w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-[15%] w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          />
        </div>
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

      {/* Services Section */}
      <Services services={services} />

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Achievements
          </h2>
          <motion.div
            ref={achievementsRef}
            initial="hidden"
            animate={achievementsInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {companyData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              >
                <h3 className="text-xl font-playfair font-bold mb-4 text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <motion.div
            ref={testimonialsRef}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {companyData.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeIn}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-playfair font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.comment}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>
    </Layout>
  );
}
