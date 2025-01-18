import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Projects, Testimonials, Footer } from './components';
import ChatBot from './components/ChatBot';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Testimonials />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
        <ChatBot />
      </div>
    </BrowserRouter>
  );
}

export default App;
