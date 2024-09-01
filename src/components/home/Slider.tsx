import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

type ImageType = {
    src: string;
    alt: string;
};

export default function Slider({ imagesArray }: { imagesArray: ImageType[] }) {
    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {imagesArray.map((image) => (
                    <SwiperSlide>
                        <img src={image.src} alt={image.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
