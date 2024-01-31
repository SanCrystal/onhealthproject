import React from 'react'
import { Icons } from '../Icons';
import { PlatformData, ProductData, ResourceData } from './data';
import Link from 'next/link';

export default function FooterLinks() {
  return (
		<div className="col-span-7 bg-slate-100/75 w-full rounded-[20px]">
			<div className="flex justify-between p-8 text-[#3E3838] text-sm font-medium">
				<div>
					<h5 className="text-[#3E3838]/75">Product</h5>
					<ul className="flex flex-col gap-3 top-4 relative">
						{ProductData.map((item, index) => (
							<li key={index}>
								<Link href={item.link}>{item.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h5 className="text-[#3E3838]/75">Platform</h5>
					<ul className="flex flex-col gap-3 top-4 relative">
						{PlatformData.map((item, index) => (
							<li key={index}>
								<Link href={item.link}>{item.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h5 className="text-[#3E3838]/75">Resources</h5>
					<ul className="flex flex-col gap-3 top-4 relative">
						{ResourceData.map((item, index) => (
							<li key={index} className="flex relative items-center">
								<Link href={item.link}>{item.title}</Link>
								{Boolean(item.tag) && (
									<span className="absolute -right-14 px-2 py-1 rounded-sm bg-[#B1FFB8] text-wrap w-fit text-secondary font-sans font-bold text-[0.55rem]">
										{item.tag}
									</span>
								)}
							</li>
						))}
					</ul>
				</div>
				<div>
					<Icons.logo />
				</div>
			</div>
			<div className="flex w-full justify-between p-7 text-[text-[#3E3838] font-semibold text-sm">
				<ul className="flex gap-5">
					<li>
						<Link href="#">Privacy Policy</Link>
					</li>
					<li>
						<Link href="#">Terms & Conditions</Link>
					</li>
				</ul>
				<div>&copy; 2024withOneHealth</div>
			</div>
		</div>
	);
}
