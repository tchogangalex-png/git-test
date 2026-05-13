import { useEffect, useRef } from 'react';
import './App.css';

function App() {

  const newsletterref1 = useRef()
  const newsletterref2 = useRef()
  const newsletterref3 = useRef()
  const newsletterref4 = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        newsletterref1.current.classList.add("active")
      }
    })
    observer.observe(newsletterref1.current)
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        newsletterref2.current.classList.add("active")
      }
    })
    observer.observe(newsletterref2.current)
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        newsletterref3.current.classList.add("active")
      }
    })
    observer.observe(newsletterref3.current)
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        newsletterref4.current.classList.add("active")
      }
    })
    observer.observe(newsletterref4.current)
  }, []);
  return (
    <div className="container">
      <div className='newsletter' ref={newsletterref1}>
        <h2>observer l'element </h2>
      </div>
      <div className='newsletter' ref={newsletterref2}>
        <h2>observer l'element </h2>
      </div>
      <div className='newsletter' ref={newsletterref3}>
        <h2>observer l'element </h2>
      </div>

      <div className='newsletter' ref={newsletterref4}>
        <h2>observer l'element </h2>
      </div>
    </div>
  );
}

export default App;
