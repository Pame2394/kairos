import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import CRMDemo from './components/CRMDemo';
import Trust from './components/Trust';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Services />
      <Trust />
      <AboutUs />
      <CRMDemo />
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
