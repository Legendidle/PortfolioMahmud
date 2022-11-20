import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem suscipit facere nulla explicabo, eos commodi, laboriosam, praesentium debitis accusantium omnis qui. Nostrum fugit molestias eum repellat necessitatibus aspernatur nam, debitis laborum, et officia, atque esse sit eaque corporis. Aliquam?"
        },
        {
            img: profilePic2,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem suscipit facere nulla explicabo, eos commodi, laboriosam, praesentium debitis accusantium omnis qui. Nostrum fugit molestias eum repellat necessitatibus aspernatur nam, debitis laborum, et officia, atque esse sit eaque corporis. Aliquam?"
        },
        {
            img: profilePic3,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem suscipit facere nulla explicabo, eos commodi, laboriosam, praesentium debitis accusantium omnis qui. Nostrum fugit molestias eum repellat necessitatibus aspernatur nam, debitis laborum, et officia, atque esse sit eaque corporis. Aliquam?"
        },
        {
            img: profilePic4,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem suscipit facere nulla explicabo, eos commodi, laboriosam, praesentium debitis accusantium omnis qui. Nostrum fugit molestias eum repellat necessitatibus aspernatur nam, debitis laborum, et officia, atque esse sit eaque corporis. Aliquam?"
        }
    ]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-header">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
        </div>

        <div className='blur t-blur1' style={{background: 'var(--purple)'}}></div>
        <div className='blur t-blur2' style={{background: 'skyblue'}}></div>

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {clients.map((client, index)=>{
                return (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                          <img src={client.img} alt={client.img} />
                          <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials