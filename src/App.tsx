import { About } from "./components/About";
import { ContactBar } from "./components/ContactBar";
import { Projects } from "./Slides";

function App() {
  
  return (
    <div className="dark">
      <ContactBar />

      <div className="absolute top-52 grid grid-cols-3 left-1/2 -translate-x-1/2">
        <About defClass="col-span-1 pr-4"/>
        
        <div className="pl-4 col-span-2">
          <Projects/>
        </div>
      </div>
    </div>
  )
}

export default App
