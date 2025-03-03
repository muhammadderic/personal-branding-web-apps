import { useEffect } from 'react';
import AOS from 'aos'
import './main.css'
import 'aos/dist/aos.css'
import Hero from './components/Hero';
import Skill from './components/Skill';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, []);

  return (
    <main>
      <Hero />
      <Skill />
    </main>
  )
}

export default App
