import React from 'react'
import MaxWithWrapper from '../MaxWithWrapper';
import { GSO,GSO1 } from './data';
import FillButtonC from './FillButton';
import OpenButton from './OpenButton';
import Image from 'next/image';
import { GetStartedLeft1, GetStartedRight,GetStartedLeft2,GetStartedLeft3 } from '../Home/data';
import Subsriber from './Subsriber';
import FooterLinks from './FooterLinks';
import TextWordy from "./TextWordy";

export default function Footer() {
  return (
		<section>
			<MaxWithWrapper>
				<div className="h-[480px] w-[70rem] mx-auto flex bg-[#228821] relative rounded-[40px] overflow-hidden mb-12 ">
					<div className="absolute footclipleft h-full w-full bg-[#10441E]"></div>
					<div className="absolute footclipright h-full w-full bg-[#27634E]"></div>
					<div className="content left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] flex items-center justify-center gap-10  flex-col absolute w-full h-full">
						<h1 className="font-head text-white text-5xl leading-[64px] text-center font-semibold">
							Get started with OneHealth
						</h1>
						<div className="flex gap-10 mt-5 ">
							{GSO.map((item, index) => (
								<FillButtonC href={item.link} title={item.title} key={index} />
							))}
						</div>
						<div className="gap-20 flex -mt-3">
							{GSO1.map((item, index) => (
								<OpenButton href={item.link} title={item.title} key={index} />
							))}
						</div>
            <div className='flex w-full'>

						<div className="relative left-0 z-10 w-full h-full">
							<Image
								src={GetStartedLeft1}
								alt="get started footer images"
								className="absolute -bottom-24 left-14"
							/>
							<Image
								src={GetStartedLeft2}
								alt="get started footer images"
								className="absolute -top-24"
							/>
							<Image
								src={GetStartedLeft3}
								alt="get started footer images"
								className="absolute -bottom-14 left-4"
							/>
						</div>
						<div className="relative z-10 w-80 bg-red-400 h-full">
							<Image
								src={GetStartedRight}
								alt="get started footer images"
								className="absolute w-full -left-9 -top-[83px] scale-[128%]"
							/>
						</div>
            </div>
					</div>
          <div>
          </div>
				</div>
        <div className='grid grid-cols-11 gap-6'>

          <Subsriber/>
          <FooterLinks/>
        </div>
        <TextWordy/>
			</MaxWithWrapper>
		</section>
	);
}
