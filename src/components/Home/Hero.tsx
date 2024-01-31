import React from 'react'
import {  HeroCardData, HeroWomen } from './data';
import HeroCard from '../cards/HeroCard';
import Image from "next/image";
import Background from '../Background';
import MaxWithWrapper from '../MaxWithWrapper';

export default function Hero() {
  return (
		<section className="gap-28 grid grid-cols-12 relative  w-full h-[94vh] ">
			<Background />
			<MaxWithWrapper>
				<div className="content gap-[6.5rem] grid grid-cols-12 relative top-16 pl-12">
					<div className="left flex flex-col gap-10 col-span-7 top-10 relative">
						<div className=" flex flex-col gap-10">
							<h1 className="text-wrap w-full text-start font-bold leading-12 font-head text-5xl text-primary">
								Simplified access to quality medicines & healthcare
							</h1>
							<p className="leading-7 text-xl font-normal text-slate-600 pr-10">
								Digital infrastructure for Individuals, Payers & Providers to
								access quality medicines & healthcare solutions
							</p>
						</div>
						<div className="cards flex gap-4">
							{HeroCardData.map((item, index) => (
								<HeroCard
									key={index}
									title={item.title}
									action={item.action}
									imagesrc={item.Image}
								/>
							))}
						</div>
					</div>
					<div className="right w-[500px] h-[500px] col-span-3 col-start-8 top-4 relative ">
						<Image
							src={HeroWomen}
							alt="elegant healthy women"
							className="h-full w-full"
							// width={504}
							// height={500}
						/>
					</div>
				</div>
			</MaxWithWrapper>
		</section>
	);
}
