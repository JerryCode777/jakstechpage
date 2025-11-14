import React, { useRef, useEffect } from 'react';
import '@dotlottie/player-component';

/**
 * Componente para reproducir animaciones .lottie
 * Usa el DotLottie Web Component para soportar archivos .lottie
 */
const LottieAnimation = ({
  src,
  loop = true,
  autoplay = true,
  className = "",
  speed = 1,
  style = {}
}) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;
    if (player) {
      player.load(src);
      if (autoplay) {
        player.play();
      }
    }
  }, [src, autoplay]);

  return (
    <dotlottie-player
      ref={playerRef}
      src={src}
      background="transparent"
      speed={speed}
      style={{ width: '100%', height: 'auto', ...style }}
      loop={loop ? '' : undefined}
      autoplay={autoplay ? '' : undefined}
      className={className}
    ></dotlottie-player>
  );
};

export default LottieAnimation;
