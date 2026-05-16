'use client';

import { useState, useEffect, useRef } from 'react';

const slides = [
  { id: 1, title: 'Paradise Onsenn', description: '極上のパラダイス温泉。極楽の湯。日々の疲れを癒すのに最適',image: '/images/gokujouonsenn.png',textColor: 'white' },
  { id: 2, title: 'TechnologyLand', description: 'AIのワクワクを、最高の環境で。',image: '/images/dragonai.png',textColor: '#1d1d1f' },
  { id: 3, title: 'Japanese Hokkaido', description: '道産子パラダイス。まだまだのびしろあり',image: '/images/onsen.jpg',textColor: '#1d1d1f' },
  { id: 4, title: 'Shokujiba Beach', description: 'Paradiseを感じよう。',image: '/images/onsen.jpg',textColor: '#1d1d1f' },
  { id: 5, title: 'Japanese Tokyo', description: 'Tokyo',image: '/images/onsen.jpg',textColor: '#1d1d1f' },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
         <div key={slide.id} style={{ 
  minWidth: '100%',
  backgroundImage: `url(${slide.image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: slide.textColor,
  padding: '60px 40px',
  height: '400px',
  boxSizing: 'border-box'
}}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold' }}>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: '8px', height: '8px', borderRadius: '50%', margin: '0 4px', background: i === current ? '#1d1d1f' : '#ccc', border: 'none', cursor: 'pointer' }} />
          
        ))}
      </div>
    </div>
  );
}