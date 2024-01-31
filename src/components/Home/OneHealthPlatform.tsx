"use client"
import React,{useRef,useEffect} from 'react'
import MaxWithWrapper from '../MaxWithWrapper'
import { PlatformCardData } from './data';
import PlatformCard from '../cards/PlatformCard';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import function to register Swiper custom elements
// import { register} from 'swiper/element/bundle';

// // register Swiper custom elements
// register();

export default function OneHealthPlatform() {
      const swiperElRef = useRef<HTMLDivElement>(null); 
      const paginationRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef?.current?.addEventListener('swiperprogress', (e:any) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef?.current?.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
		<section className="pt-24 mb-12">
			<MaxWithWrapper>
				<div className="flex flex-col gap-5 items-center mb-10">
					<p className="px-4 py-2 bg-[#F0F2F5] rounded-[40px] w-fit">
						THE ONEHEALTH PLATFORM
					</p>
					<h1 className="text-secondary leading-[72px] font-semibold font-head text-center text-5xl">
						Our products powering positive health experience
					</h1>
				</div>

				{/* <Swiper
					// install Swiper modules
					modules={[Pagination, A11y, Autoplay]}
					spaceBetween={4}
					breakpoints={{
						639: {
							slidesPerView: 2,
						},
						// 865: {
						// 	slidesPerView: 4,
						// },
					}}
					slidesPerView={2}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
					className="mySwiper"
				>
							<SwiperSlide >
                                </SwiperSlide>
                                </Swiper> */}
                <div className='flex gap-5 w-full justify-center'>
                
                    {PlatformCardData.map((item, index) => (
                        <PlatformCard key={index}
                            action={item.action}
                            description={item.description}
                            image1={item.imageHeader}
                            image2={item.imageFooter}
                            heading={item.title}
                            bgColorSec={item.bgColorSec}
                            bgColor={item.bgColor}
                            index={index}
                        />
                    ))}
                </div>   
                    <div className='flex gap-2 justify-center mt-20'>
                        <p className='w-20 h-2 rounded-md bg-[#8DDE44]'></p>
                        <p className='w-20 h-2 rounded-md bg-[#8DDE44]/15'></p>
                    </div>

			</MaxWithWrapper>
		</section>
	);
}
