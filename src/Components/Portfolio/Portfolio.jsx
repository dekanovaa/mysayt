import Downup from '../Downup/Downup'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Portfolio.css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.png'
import slide4 from '../../assets/slide4.jpg'
import slide5 from '../../assets/slide5.jpg'
import slide6 from '../../assets/slide6.jpg'
import slide7 from '../../assets/slide7.jpg'
import slide8 from '../../assets/slide8.jpg'
import slide9 from '../../assets/slide9.jpg'
import slide10 from '../../assets/slide10.jpg'

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='container portfolio_container'>
        <h2 className='portfolio_title'>Portfolio</h2>
        <Downup/>
       <div className="swiper">
       <Swiper
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      modules={[ Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        820: {
          slidesPerView: 3,
          spaceBetween: 20,

        },
        720: {
          slidesPerView: 2,
          spaceBetween: 20,

        },
        620: {
          slidesPerView: 2,
          spaceBetween: 20,

        },
        520: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        }

    }}
    >
      <SwiperSlide>
        <a  href="course-seven-phi.vercel.app"><img className='portfolio_img' src={slide1} alt="portfolio1" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <a  href="https://designo-three-zeta.vercel.app/"><img className='portfolio_img' src={slide2} alt="portfolio1" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <a  href="business-taour.vercel.app"><img className='portfolio_img' src={slide9} alt="portfolio1" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <a  href="coffee-wbg7.vercel.app"><img className='portfolio_img' src={slide4} alt="portfolio1" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <a  href="london-phi.vercel.app"><img className='portfolio_img' src={slide5} alt="portfolio1" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <a  href="https://nofo-net.vercel.app/"><img className='portfolio_img' src={slide6} alt="portfolio1" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <a  href="course-seven-phi.vercel.app"><img className='portfolio_img' src={slide7} alt="portfolio1" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <a  href="unicall-uz.vercel.app"><img className='portfolio_img' src={slide8} alt="portfolio1" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <a  href="aoquvmarkazi.vercel.app"><img className='portfolio_img' src={slide3} alt="portfolio1" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <a  href="discover-blush.vercel.app"><img className='portfolio_img' src={slide10} alt="portfolio1" /></a>
      </SwiperSlide>
      </Swiper>
       </div>
        




      </div>

    </div>
  )
}

export default Portfolio