"use client"
import Image from 'next/image'
import React from 'react'
import Background from '../Background'
import Link from 'next/link'
import { Icons } from '../Icons'
import { cn } from '@/lib/utils'

interface CareCardProps {
	title: string;
	image: string;
	action: string;
	heading: string;
	description: string;
	bgColor?: string;
	cls?: string;
	linkCls?: string;
	desCls?: string;
	headCls?: string;
	contentCls?: string;
	paraCls?: string;
	arrowCls?: string;
	strokec?: string;
	contextcls?: string;
	imgcls?: string;
	showBackground: boolean;
	index?: number;
}

export default function CareCard({
	title,
	image,
	action,
	heading,
	description,
	bgColor,
	showBackground,
	cls,
	linkCls,
	desCls,
	headCls,
	contentCls,
	paraCls,
	arrowCls,
	strokec,
	contextcls,
	imgcls,
	index
}: CareCardProps) {
	return (
		<div
			className={cn(
				`${index == 0 ? "bg-[#E9FFEB]" : ""} ${index == 1 ? "bg-[#F1FFE4]":""}
				 relative h-[622px] w-[400px] overflow-hidden rounded-[40px]`,
				cls
			)}
		>
			{showBackground && (
				<Background
					cls="absolute z-10 h-full w-full top-5 flex -bottom-0 border-0 "
					cls2="w-full absolute  top-2 z-20"
					cls1="top-36 absolute z-10"
				/>
			)}
			<div
				className={cn(
					"content relative z-10 p-10 gap-20 flex flex-col",
					contentCls
				)}
			>
				<p
					className={cn(
						"bg-[#B1FFB8] font-sans font-bold leading-5 px-3 py-1.5 rounded-md w-fit",
						paraCls
					)}
				>
					{title}
				</p>
				<Image src={image} alt="care images" className={cn("", imgcls)} />
				<div className={cn("flex flex-col gap-4", contextcls)}>
					<h2
						className={cn(
							"font-bold text-3xl text-secondary font-head leading-8",
							headCls
						)}
					>
						{heading}
					</h2>
					<p
						className={cn(
							"text-lg text-secondary-foreground leading-5",
							desCls
						)}
					>
						{description}
					</p>
					<Link
						href={"#"}
						className={cn(
							`font-sans font-semibold text-xs leading-5 py-2 px-4 flex justify-between w-fit gap-3 border-2 border-secondary rounded-full`,
							linkCls
						)}
					>
						<span>{action}</span>{" "}
						<Icons.rightArrow className={cn("", arrowCls)} strokec={strokec} />
					</Link>
				</div>
			</div>
		</div>
	);
}
