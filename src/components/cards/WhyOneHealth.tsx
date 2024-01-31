import Image from 'next/image'
import React from 'react'

interface WhyOneHealthProps {
    image:string;
    heading:string;
    description:string;
}

export default function WhyOneHealthCard({image,heading,description}: WhyOneHealthProps) {
  return (
		<div className="flex flex-col gap-8 items-center w-82 max-w-82 m-2">
			<Image src={image} alt="why one health images" />
			<h1 className="text-[#228821] font-head text-3xl font-semibold text-center">{heading}</h1>
			<p className='text-center leading-5 text-lg '>{description}</p>
		</div>
	);
}
