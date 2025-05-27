import { ContactBar } from "./components/ContactBar";

function App() {
  
  return (
    <div className="dark">
      <ContactBar />
      <div className='bg-slate-200 dark:bg-schemeA text-schemeA dark:text-schemeB'>
        test
      </div>
      <div className='bg-schemeA'>
        test2
      </div>
    </div>
  )
}

export default App
