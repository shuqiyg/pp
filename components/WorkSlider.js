// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/projects/imdbclone.png',
        },
        {
          title: 'title',
          path: '/projects/liveScore.png',
        },
        {
          title: 'title',
          path: '/projects/prompthero.png',
        },
        {
          title: 'title',
          path: '/projects/freneticar.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/projects/freneticar.png',
        },
        {
          title: 'title',
          path: '/projects/chatbox.png',
        },
        {
          title: 'title',
          path: '/projects/liveScore.png',
        },
        {
          title: 'title',
          path: '/projects/Luka22-23.png',
        },
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper sytles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination} from 'swiper';

//icons 
import { BsArrowRight } from 'react-icons/bs'
//next image
import Image from 'next/image';

const WorkSlider = () => {
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
        workSlides.slides.map((slide, index)=> {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image,index) => {
                  return (
                    <div 
                      className='relative rounded-lg overflow-hidden flex items-center justify-center group' 
                      key={index}
                    >
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* image */}
                        <Image src={image.path} width={400} height={300} alt=""/>
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e323cd] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* titles */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[.2em]'>
                            {/* title p1 */}
                            <div className='delay-100'>Be</div>
                            {/* title p2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-140'>Amazed</div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight></BsArrowRight>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default WorkSlider;

