import axios from "axios";
import Parser from "html-react-parser";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import moment from "moment";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { MediumBlog } from "../../config/api";
import "./Blog.css";
import data from "../../Post.json";

import blog from "../../assets/blog.png";

export const Blog = () => {
  const [post, setPost] = useState();

  // const fetchBlog = async () => {
  //   try {
  //     // const { data } = await axios.get(MediumBlog());

  //     console.log(data);
  //     setPost(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   fetchBlog();
  //   console.log(post);
  // }, []);

  useEffect(() => {
    let content = data[0].content;
    let img = content.match(/<img([\w\W]+?)>/g)[0];
    // let img = document.querySelector(`figure > img`);
    console.log(typeof img.toHtmlObject);
    setPost(img);
  }, []);
  return (
    <section id="blogSection">
      <img src={blog} alt="" />
      <section id="blog">
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          direction="horizontal"
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            868: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {/* {data &&
          data.map((cc, index) => (
            <SwiperSlide className="swiperSlide" key={index}>
              <div className="blog">
                {Parser(cc.content.match(/<img([\w\W]+?)>/g)[0])}
              </div>
            </SwiperSlide>
          ))} */}

          {data &&
            data.map((cc, index) => (
              <SwiperSlide className="swiperSlide">
                {Parser(cc.content.match(/<img([\w\W]+?)>/g)[0])}

                <div className="category">
                  <span>#blue-sky</span>
                  <span>#blue-sky</span>
                </div>
                <h4 className="heading">{cc.title}</h4>
                <h3 className="author">{cc.author}</h3>
                <div className="bottom">
                  <p>{moment(cc.created).format("L")}</p>
                  <button>
                    <a href={`${cc.link}`} target="blank">
                      Read More
                    </a>
                  </button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </section>
  );
};
