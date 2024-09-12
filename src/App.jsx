import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Tech1 from "./components/tech1";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <div className="md:hidden flex"><Tech1/></div>
        <div className="md:flex hidden"><Tech/></div>
        <Works/>
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>

      </div>
    </BrowserRouter>
  )
}
export default App