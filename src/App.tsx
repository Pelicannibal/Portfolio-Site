import { About } from "./components/About";
import { ContactBar } from "./components/ContactBar";

function App() {
  
  return (
    <div className="dark">
      <ContactBar />

      <div className="absolute top-52 flex left-1/2 -translate-x-1/2">
        <About defClass="flex-[1] pr-4"/>
        
        <div className="flex-[2] pl-4">placeholder</div>
      </div>
    </div>
  )
}

export default App
