import { useEffect, useRef } from 'react';

import VideoMp4 from "../assets/vid4.mov";
import VideoWebm from "../assets/vid4.webm";
// import FallbackImage from "../assets/fallback.png";
import "../styles/BackgroundVideo.css";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Assure que la vidéo est bien en mode silencieux
      video.play().catch(error => {
        console.error('Autoplay a été bloqué', error);
      });
    }
  }, []);
  
  return (
    <div className="video-background">
    <video autoPlay muted loop playsInline controls={false}  className="background-video">
      <source src={VideoMp4} type="video/mov" />
      <source src={VideoWebm} type="video/webm" />
      Votre navigateur ne supporte pas la lecture des vidéos.
    </video>
    {/* <img
        src={FallbackImage}
        alt="Image de fallback"
        className="fallback-image"
      /> */}
    </div>
  );
};

export default BackgroundVideo;