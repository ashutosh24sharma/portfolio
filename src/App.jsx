import Navbar from "./component/navbar";
import Exprience from "./component/exprience";
import Hero from "./component/Hero";
import About from "./component/about";
import Teach from "./component/technologies";
import Contact from "./component/contact";
import Achie from "./component/achievment";
import ProjectsPage from "./component/projects";

function App() {
  return (    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300">
   <div className="fixed top -z-10 h-full w-full">
   <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
   </div>
  
   <div className="container mx-auto px-8">
    <Navbar/>
    <Hero></Hero>
    <About/>
    <Teach/>
    <Exprience/>
    
    <ProjectsPage/>
    
    <Achie/>
    <Contact/>
   </div>
   
  </div>);
}

export default App;