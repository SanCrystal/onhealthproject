import Image  from 'next/image';
import React from 'react';
import {TestimonialB, TestimonialCardData, GuideCardData, ContactGuideInfoData} from "./data";
import MaxWithWrapper from '../MaxWithWrapper';
import TestimonialCard from '../cards/TestimonialCard';

import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import GuidesCard from '../cards/GuidesCard';
import ContactGuideMini from './ContactGuideMini';
import Link from 'next/link';
import { Icons } from '../Icons';

// register Swiper custom elements
register();


export default function Testimonial() {
  return (
		<section className="mt-9 flex flex-col">
			<Image src={TestimonialB} alt="testimonial hero image" />
			<MaxWithWrapper>
				<div className='pb-20 border-b border-slate-200'>

				<div className="mt-28">
					<div className="flex flex-col items-center relative">
						<p className="px-3 py-2 text-slate-600 font-sans text-sm leading-5 bg-slate-200 rounded-full w-fit relative z-10">
							OUR PHARMACY
						</p>
						<p className="w-full h-1 bg-slate-200 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0"></p>
					</div>
					<p className="font-head font-semibold text-4xl text-secondary leading-[64px] mt-7 text-center">
						Better care for all health categories
					</p>
				</div>
				<div className="testimonial flex gap-5 mt-10">
					{TestimonialCardData.map((item, index) => (
						<TestimonialCard
							image={item.image}
							link={item.link}
							title={item.title}
							index={index}
							key={index}
						/>
					))}
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
					<SwiperSlide></SwiperSlide>
				</Swiper> */}

				<div className="flex gap-3 mt-10 justify-center w-full mb-10">
					{TestimonialCardData.map((item, index) => (
						<p
							className={`h-1 w-16 rounded-3xl ${
								index == 0 ? "bg-[#8DDE44]" : "bg-[#8DDE44]/15"
							}`}
							key={index}
						/>
					))}
				</div>

				<div className='flex justify-between mt-16 items-center'>
					<div className="guide-cards flex relative w-fit">
						{GuideCardData.map((item, index) => (
							<GuidesCard key={index} image={item.image} index={index} />
						))}
					</div>
					<div className="writer-guide">
						<h1 className="font-head font-semibold text-4xl leading-9 text-secondary">
							Need medical guidance? 
						</h1>
						<h1 className="font-head font-semibold text-4xl leading-9 text-secondary">
							 Speak with our in-house care team
						</h1>
						<div className='flex gap-7 items-center mt-6'>
							{ContactGuideInfoData.map((item, index) => (
								<ContactGuideMini
									title={item.title}
									Icon={item.icon}
									key={index}
								/>
							))}
						</div>
					</div>
						<Link
							href={"#"}
							className="px-8 py-3 bg-[#8DDE44] text-wrap flex w-fit gap-3 rounded-3xl text-#004449 font-sans font-semibold leading-5"
						>
							<span>Call us now</span>
							<Icons.rightArrow strokec="#004449" />
						</Link>
				</div>
				</div>
			</MaxWithWrapper>
		</section>
	);
}
