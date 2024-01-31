import React, { ReactNode } from 'react'
import Link  from 'next/link';
import { Icons } from '@/components/Icons';
import Image  from 'next/image';

export default function HeroCard({
	title,
	imagesrc,
	action,
}: {
	title: string;
	imagesrc: string;
	action: { title: string; href: string };
}) {
	return (
		<div
			className="flex flex-col w-[199px] h-[201px] p-5 rounded-3xl shadow-xs shadow-[#101928]/15 bg-white inset-0 drop-shadow-md m-1 border "
		>
			<div className="text-xs uppercase font-sans tracking-wide font-semibold flex items-center gap-3 text-slate-600 leading-4">
				<p className="w-5 bg-slate-600 h-0.5" />
				<p>
					{"  "} {title}
				</p>
			</div>
			<div className="bg-[#F4F4F4] p-1.5 m-1.5 px-3 mx-0 rounded-md relative h-24 w-40 my-3 overflow-hidden">
				<div className="absolute top-3 -right-0">
					<Image src={imagesrc} alt="hero image" width={90} height={90} />
				</div>
			</div>
			<div className="action font-bold text-md leading-4 flex items-center justify-between text-primary mt-2">
				<Link href={action.href}>{action.title}</Link>
				<Icons.downArrow className="-rotate-90 text-primary font-bold" />
			</div>
		</div>
	);
}
