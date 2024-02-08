import React, { useState } from 'react'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  about data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2020 - 2021',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2021 - 2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Developer - XYZ Company',
        stage: '2018 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2018 - 2023',
      },
      {
        title: 'DevOps Intern - DEF Corporation',
        stage: '2017 - 2020',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Finance - Beijing Normal University, Beijing, China',
        stage: '2015',
      },
      {
        title: 'Computer Science Diploma - Seneca College, Toronto, ON',
        stage: '2020',
      },
      {
        title: 'Accounting - George Brown College, Toronto, ON',
        stage: '2018',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles'

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

//counter
import Countup from 'react-countup'

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', .2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h3
            variants={fadeIn('right', .2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            My Name is  <span className='text-accent'>Shuqi Yang</span>
          </motion.h3>
          <motion.p 
            variants={fadeIn('right', .2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            I&apos;m a Software Developer dedicated to exploring the potential of AI
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', .6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <Countup start={0} end={8} duration={5}></Countup>+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.] max-w-[120px]'>
                  Years of Exp
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <Countup start={0} end={200} duration={5}></Countup>+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]'>
                  Statisfied clients
                </div>
              </div>
              {/* Projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <Countup start={0} end={300} duration={5}></Countup>+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]'>
                  Finished Projects
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <Countup start={0} end={6} duration={5}></Countup>+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]'>
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>  
        {/* info */}
        <motion.div 
          variants={fadeIn('left', .5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                > 
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className='bg-white-300/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'></div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, innerItemIndex) => {
                       return <div key={innerItemIndex} className='text-2xl text-white'>{icon}</div>
                    })}
                  </div>
                  
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
