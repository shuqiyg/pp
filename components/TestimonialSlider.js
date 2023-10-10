// testimonial data
export const testimonialSliders = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper sytles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination} from 'swiper';

//icons 
import { FaQuoteLeft } from 'react-icons/fa'
//next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      freeMode={true}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]" 
    >
      {
        testimonialSliders.map((person, index)=> {
          return (
            <SwiperSlide key={index}>
              <div>
                {/* avatar, name, position */}
                <div>
                  {/* avatar */}
                  <div>avatar img</div>
                  {/* name */}
                  <div>name</div>
                  {/* position */}
                  <di>position</di>
                </div>
                {/* quote & message */}
                <div className='bg-yellow-500/10 flex01 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                  {/* quote & icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                  </div>
                  {/* message */}
                  <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default TestimonialSlider;


