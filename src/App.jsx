import './App.css';
import React, { useEffect, Suspense, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LoadingSpinner from './Components/LoadingSpinner/Loadingspinner';
import ErrorBoundary from './Components/errorBoundary/ErrorBoundary';
import usePerformanceMonitoring from './hooks/Performance';
import ServiceRoutes from './routes/Serviceroute';
import seoData from '../seoData.json';
import SeO from '../Seo';
import CaseStudy from './Components/component/caseStudy/CaseStudy';
import Landing from './Pages/Landing';
import Contact1 from './Pages/Contact1';
import Privacypolicy from './Pages/Privacypolicy';

// Lazy loaded components
const Home = React.lazy(() => import('./Components/Home/Home'));
const Services = React.lazy(() => import('./Components/Services/Services'));
const About = React.lazy(() => import('./Components/AboutUs/About'));
const How = React.lazy(() => import('./Components/How/How'));
const Blog = React.lazy(() => import('./Components/Blog/Blog'));
const BlogDetails = React.lazy(() =>
  import('./Components/Blog/BlogDetails/BlogDetails')
);
const Contact = React.lazy(() => import('./Components/contact/contact'));
const Calendar = React.lazy(() =>
  import('./Components/components/calendar/Calendar')
);
const NotFound = React.lazy(() =>
  import('./Components/notFound/NotFound')
);

function App() {
  const { pathname } = useLocation();

  const [currentSEO, setCurrentSEO] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // LANDING PAGES
  const landingPages = [
    '/lp/outsource2backoffice/australia/may2026/',
    '/lp/outsource2backoffice/australia/may2026/contact-us'
  ];

  const isLandingPage = landingPages.includes(pathname);

  // Performance monitoring
  usePerformanceMonitoring(pathname);

  // SEO + Scroll
  useEffect(() => {
    const matchingSEO = seoData.find(
      (item) => item.path === pathname
    );

    if (matchingSEO) {
      setCurrentSEO(matchingSEO);
    } else {
      setCurrentSEO(null);
    }

    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // Header height
  useEffect(() => {
    const header = document.querySelector('.navbar');

    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () =>
      window.removeEventListener(
        'resize',
        handleResize
      );
  }, []);

  // Preload components
  useEffect(() => {
    const preloadComponents = () => {
      if (pathname === '/') {
        const preload = async () => {
          await Promise.all([
            import('./Components/Services/Services'),
            import('./Components/AboutUs/About'),
          ]);
        };

        preload();
      }
    };

    preloadComponents();
  }, [pathname]);

  return (
    <React.Fragment>

      {currentSEO && (
        <SeO
          title={currentSEO.title}
          description={currentSEO.description}
          keywords={currentSEO.keywords}
          canonicalUrl={`https://outsource2backoffice.com${pathname}`}
        />
      )}

      <ErrorBoundary>

        {/* HEADER */}
        {!isLandingPage && <Header />}

        <Container
          fluid
          className="px-0"
          style={{
            paddingTop: isLandingPage
              ? '0px'
              : `${headerHeight}px`,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >

          <ErrorBoundary>

            <Suspense fallback={<LoadingSpinner />}>

              <div style={{ flex: 1 }}>

                <Routes>

                  <Route
                    path="/"
                    element={<Home />}
                  />

                  <Route
                    path="/ourservices"
                    element={<Services />}
                  />

                  <Route
                    path="/ourservices/*"
                    element={<ServiceRoutes />}
                  />

                  <Route
                    path="/about"
                    element={<About />}
                  />

                  <Route
                    path="/contact-us"
                    element={<Contact />}
                  />

                  <Route
                    path="/how-it-works"
                    element={<How />}
                  />

                  <Route
                    path="/blog"
                    element={<Blog />}
                  />

                  <Route
                    path="/blog/:title"
                    element={<BlogDetails />}
                  />

                  <Route
                    path="/thank-you"
                    element={<Calendar />}
                  />

                  <Route
                    path="/case-study/:id"
                    element={<CaseStudy />}
                  />

                  {/* LANDING PAGE */}
                  <Route
                    path="/lp/outsource2backoffice/australia/may2026/"
                    element={<Landing />}
                  />

                  {/* CONTACT1 PAGE */}
                  <Route
                    path="/lp/outsource2backoffice/australia/may2026/contact-us"
                    element={<Contact1 />}
                  />

                  {/* NOT FOUND */}
                  <Route
                    path="*"
                    element={<NotFound />}
                  />
                  <Route path="/privacy-policy" element={<Privacypolicy />} />

                </Routes>

              </div>

            </Suspense>

          </ErrorBoundary>

          {/* FOOTER */}
          {!isLandingPage && <Footer />}

        </Container>

      </ErrorBoundary>

    </React.Fragment>
  );
}

export default App;