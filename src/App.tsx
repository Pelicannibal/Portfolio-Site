import { About } from "./components/About";
import { ContactBar } from "./components/ContactBar";
import { Projects } from "./Slides";

function App() {
  
  return (
    <div className="dark">
      <div className="bg-schemeB dark:bg-schemeA min-h-screen">
        <ContactBar />

        <div className="absolute top-52 flex justify-center left-1/2 -translate-x-1/2 w-3/4">
          <About defClass="col-span-1 pr-4"/>

          <div className="pl-4 col-span-1">
            <Projects/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
