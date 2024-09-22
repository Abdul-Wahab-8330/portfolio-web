import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Foot } from './components';
import Tech1 from "./components/tech1";

// App component to be rendered in the BrowserRouter
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Works />
        <About />
        <Experience />
        <div className="md:hidden flex"><Tech1 /></div>
        <div className="md:flex hidden"><Tech /></div>
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Foot />
      </div>
    </BrowserRouter>
  )
}
export default App