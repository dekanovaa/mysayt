import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Downup from '../Downup/Downup'
import './Skills.css'

function Skills() {
  return (
    <div className='skills' id='skills'>
      <div className='container skills_container'>
        <h2 className='skills_title'>My skillls</h2>
        <Downup/>
        <Swiper
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        820: {
          slidesPerView: 6,
          spaceBetween: 20,

        },
        720: {
          slidesPerView: 5,
          spaceBetween: 20,

        },
        620: {
          slidesPerView: 4,
          spaceBetween: 20,

        },
        520: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        420: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        320: {
          slidesPerView:3,
          spaceBetween: 10,
        }

    }}
    >
      <SwiperSlide>
        <div className='slider'>
          <p className='slider_text'>HTML</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slider'>
          <p className='slider_text'>CSS</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slider'>
          <p className='slider_text'>JS</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slider'>
          <p className='slider_text'>SASS</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slider'>
          <p className='slider_text'>GIT</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slider'>
          <p className='slider_text'>REACT</p>
        </div>
      </SwiperSlide>
    </Swiper>

      </div>

    </div>
  )
}

export default Skills