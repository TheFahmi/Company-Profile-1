import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { Inter, Playfair_Display } from 'next/font/google';
import Loading from '../components/Loading';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    if (typeof window !== 'undefined') {
      const hasVisited = localStorage.getItem('hasVisitedBefore');
      if (!hasVisited) {
        // First visit
        localStorage.setItem('hasVisitedBefore', 'true');
        // Show loading for 2 seconds
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        // Not first visit, don't show loading
        setIsFirstVisit(false);
        setIsLoading(false);
      }
    }
  }, []);

  return (
    <ThemeProvider attribute="class">
      <AnimatePresence mode="wait">
        {isFirstVisit && isLoading ? (
          <Loading key="loading" />
        ) : (
          <div className={`${inter.variable} ${playfair.variable} font-sans`}>
            <Component {...pageProps} />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
