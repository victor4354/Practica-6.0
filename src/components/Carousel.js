import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => (
    <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
    >
        {[1, 2, 3].map((num) => (
            <SwiperSlide key={num}>
                <img
                    src={`diapositiva${num}.jpg`}
                    alt={`Slide ${num}`}
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
            </SwiperSlide>
        ))}
    </Swiper>
);

export default Carousel;
