//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper sytles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import {FreeMode, Pagination} from 'swiper';

const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Crafting distinctive brand identities that encapsulate your business ethos and captivate your target audience.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creating visually stunning and intuitive designs for digital platforms that enhance user engagement.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Developing robust, scalable websites and applications with a focus on performance and user experience.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Writing compelling, brand-aligned content designed to engage audiences and drive conversions.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Boosting your online visibility and organic reach through targeted search engine optimization strategies.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]" 
    >
      {
        serviceData.map((item, index)=> {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300">
                {/* icon */}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                {/* title & desc */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default ServiceSlider;
