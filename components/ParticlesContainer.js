import {Particles} from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import React, {useCallback} from 'react';

const ParticlesContainer = () => {
  //init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, [])

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles 
      className='w-full h-full absolute translate-z-0'
      id='tsparticles' 
      init={particlesInit} 
      loaded={particlesLoaded}
      options={{
        fullScreen: {enble:false},
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90
            },
            repulse: {
              distance: 200,
              duration: 0.5,
            }
          }
        },
        particles: {
          color: {
            value: '#ff6f3c',
          },
          links: {
            color: '#8ef6e4',
            distance: 165,
            enable: true,
            opacity: .5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: .7,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 700
            },
            value: 70
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: {min: 1, max: 5}
          },
        },
        detectRetina: true
    }}/>
  )
};

export default ParticlesContainer;
