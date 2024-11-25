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