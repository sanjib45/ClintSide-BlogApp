import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';


const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8">
      <div className=" md:w-1/2 w-full text-center">
        <h1 className=" md:text-5xl text-5xl md:leading-tight font-bold ">
          Welcome to AD's Blog
        </h1>
        <p className="py-6 font-light">
        Welcome to AD'S blog , where passion meets expertise in the
        world of blogging!
        </p>
      </div>
      <div className="md:w-1/2 w-full mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination , Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img className="w-full lg:h-[400px] sm:h-96 h-80" src="https://cdn.bulbapp.io/frontend/images/fcfd3855-6496-422d-ad15-d9f70d09f095/1" alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full lg:h-[400px] sm:h-96 h-80" src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/vdw3fdnjrjqyxxscep5n" alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full lg:h-[400px] sm:h-96 h-80" src="https://production-server-default-bucket.s3.amazonaws.com/64bf78c075183f8d743ef569" alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full lg:h-[400px] sm:h-96 h-80" src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full lg:h-[400px] sm:h-96 h-80" src="https://i.ytimg.com/vi/SXbEN5lWRt8/maxresdefault.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full lg:h-[400px] sm:h-96 h-80" src="https://bloggingguide.com/wp-content/uploads/2021/09/how-to-create-an-amazing-blog-featured-image.png" alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full lg:h-[400px] sm:h-96 h-80" src="https://static.uppromote.com/wp-content/uploads/2023/08/How-to-Find-Bloggers-for-Your-Brand-1.webp" alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full lg:h-[400px] sm:h-96 h-80" src="https://neilpatel.com/wp-content/uploads/2019/06/maos-masculinas-teclando-em-laptop-em-mesa-de-escr.jpeg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="w-full lg:h-[400px] sm:h-96 h-80" src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/11/shutterstock_1049564585-960.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
