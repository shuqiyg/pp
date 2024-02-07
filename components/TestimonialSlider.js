

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper sytles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination} from 'swiper'

//icons 
import { FaQuoteLeft } from 'react-icons/fa'

//next image
import Image from 'next/image';

// testimonial data
export const testimonialSliders = [
  {
    image: '/t-avt-1.png',
    name: 'Luka Doncic',
    position: 'Customer',
    message:
      'This software has significantly streamlined our workflow, saving us hours of work every week!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Tyrese Haliburton',
    position: 'Customer',
    message:
      'Incredibly intuitive and user-friendly - it has transformed the way we manage our projects.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Scottie Barnes',
    position: 'Customer',
    message:
      "The customer support is outstanding, and the product's reliability has exceeded our expectations.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper 
      navigation={true}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      freeMode={true}
      modules={[Navigation, Pagination]}
      className="h-[480px]" 
    >
      {
        testimonialSliders.map((person, index)=> {
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                {/* avatar, name, position */}
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                  <div className='flex flex-col justify-center text-center'>
                    {/* avatar */}
                    <div className='mb-2 mx-auto'>
                      <Image src={person.image} width={100} height={100} alt=''></Image>
                    </div>
                    {/* name */}
                    <div className='text-lg'>{person.name}</div>
                    {/* position */}
                    <div className='test-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                  </div>
                </div>
                {/* quote & message */}
                <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
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


