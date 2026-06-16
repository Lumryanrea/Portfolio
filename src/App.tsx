import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { ProjectDetail } from './components/ProjectDetail';
import { TeachingPage } from './components/TeachingPage';
import { ConsultingPage } from './components/ConsultingPage';
import { BackgroundVisuals } from './components/BackgroundVisuals';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/teaching" element={<TeachingPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <BackgroundVisuals />
      <div className="relative z-10 min-h-screen py-4 px-4 md:py-8 md:px-8">
        <div className="portfolio-card">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
