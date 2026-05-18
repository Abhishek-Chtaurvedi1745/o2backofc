// src/hooks/usePerformanceMonitoring.js
import { useEffect } from 'react';

const usePerformanceMonitoring = (pathname) => {
  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      // Log performance metrics
      console.log(`Route ${pathname} loaded in ${loadTime}ms`);
      
      // Send to analytics if needed
      // analytics.logPerformance({ pathname, loadTime });
    };
  }, [pathname]);
};

export default usePerformanceMonitoring;