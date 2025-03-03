import { useEffect } from 'react';
import AOS from 'aos'
import './main.css'
import 'aos/dist/aos.css'
import Hero from './components/Hero';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, []);

  return (
    <main>
      <Hero />
    </main>
  )
}

export default App
