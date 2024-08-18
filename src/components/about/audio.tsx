'use client';
import { useEffect, useState } from 'react';

export default function AudioPlayer() {
  const [audioSrc, setAudioSrc] = useState('');

  useEffect(() => {
    const direction = document.documentElement.getAttribute('dir');

    if (direction === 'rtl') {
      setAudioSrc('/voice/english.mp3');
    } else {
      setAudioSrc('/voice/persian.mp3');
    }
  }, []);

  return <audio src={audioSrc} controls autoPlay></audio>;
}
