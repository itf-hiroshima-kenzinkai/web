import React, { useState } from 'react'
import ProductCard from './GoodsCard'
import { goodsData } from '../data/goods'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

const GoodsCarousel: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          el: '#goods-carousel-pagination',
          clickable: true
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          448: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
      >
        {goodsData.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard
              id={item.id}
              imageUrl={item.imageUrl}
              price={item.price}
              description={item.description}
              linkUrl={item.linkUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="goods-carousel-pagination" className="flex justify-center mt-4"></div>
    </div>
  )
}

export default GoodsCarousel
