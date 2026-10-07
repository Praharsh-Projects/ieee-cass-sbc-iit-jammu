import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { CAMPUS_SLIDES } from '../data/campus';

export const CampusSlideshow: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(() => document.hidden);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [manualPlayback, setManualPlayback] = useState(false);
  const motionPaused = reducedMotion && !manualPlayback;
  const playing = !paused && !motionPaused;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotionChange = () => { setReducedMotion(media.matches); setManualPlayback(false); };
    const onVisibilityChange = () => setHidden(document.hidden);
    media.addEventListener('change', onMotionChange);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      media.removeEventListener('change', onMotionChange);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!playing || hovered || focused || hidden) return;
    const timer = window.setInterval(() => setIndex(current => (current + 1) % CAMPUS_SLIDES.length), 5000);
    return () => window.clearInterval(timer);
  }, [playing, hovered, focused, hidden, index]);

  const goTo = (next: number) => setIndex((next + CAMPUS_SLIDES.length) % CAMPUS_SLIDES.length);

  return (
    <div
      className="campus-banner"
      role="region"
      aria-roledescription="carousel"
      aria-label="Explore the IIT Jammu campus"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false); }}
      onKeyDown={event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          goTo(index + (event.key === 'ArrowRight' ? 1 : -1));
        }
      }}
    >
      {CAMPUS_SLIDES.map((slide, slideIndex) => (
        <div key={slide.image} className={`campus-slide ${index === slideIndex ? 'campus-slide-active' : ''}`} aria-hidden={index !== slideIndex} role="group" aria-roledescription="slide" aria-label={`${slideIndex + 1} of ${CAMPUS_SLIDES.length}`}>
          <img src={slide.image} alt={slide.alt} className="campus-photo" style={{ objectPosition: slide.focalPoint, objectFit: slide.fit ?? 'cover' }} fetchPriority={slideIndex === 0 ? 'high' : 'auto'} decoding="async" />
        </div>
      ))}
      <button type="button" className="slideshow-arrow slideshow-arrow-left" aria-label="Previous campus slide" onClick={() => goTo(index - 1)}><ChevronLeft aria-hidden="true" /></button>
      <button type="button" className="slideshow-arrow slideshow-arrow-right" aria-label="Next campus slide" onClick={() => goTo(index + 1)}><ChevronRight aria-hidden="true" /></button>
      <div className="slideshow-controls">
        <div className="flex items-center gap-1" role="group" aria-label="Choose a campus slide">
          {CAMPUS_SLIDES.map((slide, slideIndex) => (
            <button key={slide.image} type="button" className="slide-dot" aria-label={`Show campus slide ${slideIndex + 1}`} aria-current={index === slideIndex ? 'true' : undefined} onClick={() => goTo(slideIndex)}><span /></button>
          ))}
        </div>
        <span className="slideshow-divider" aria-hidden="true" />
        <button type="button" className="slideshow-playback" aria-label={playing ? 'Pause campus slideshow' : 'Play campus slideshow'} onClick={() => {
          if (motionPaused) { setManualPlayback(true); setPaused(false); } else setPaused(!paused);
        }}>
          {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>
      <p className="sr-only" aria-live={!playing || hovered || focused ? 'polite' : 'off'}>Campus slide {index + 1} of {CAMPUS_SLIDES.length}</p>
    </div>
  );
};
