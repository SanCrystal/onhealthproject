import Image from 'next/image'
import React from 'react'

export default function GuidesCard({image,index}:{image:string,index:number}) {
  return (
		<div
			className={`relative ${
				index == 0 ? "" : index==1? "right-3":"right-6"
			}`}
		>
			<Image src={image} alt="guides image" />
		</div>
	);
}
