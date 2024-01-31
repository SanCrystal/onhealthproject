"use client"
import React, { useState } from 'react'
import { NAV_LINKS,CALL_TO_ACTION,PRODUCTS_CATEGORY } from '@/config'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Icons } from './Icons'
export default function NavItems() {
    const [activeIndex,setActiveIndex] = useState<number|null>(null);
    const [showProduct,setShowProduct] = useState<boolean>(false);
  return (
		<div className="flex h-full gap-4 text-secondary items-center ml-8">
			<div className="h-full items-center flex gap-4">
				<ul className="flex relative">
					<li
						onClick={() => setShowProduct((prev) => !prev)}
						className="flex gap-2 cursor-pointer items-center"
					>
						<Icons.product className="text-secondary" />
						<span className='text-sm'>Product</span>
						<Icons.downArrow
							className={`${
								showProduct ? "rotate-180" : ""
							}  transition-all duration-300`}
						/>
					</li>
					<li
						className={`${
							showProduct ? "opacity-100" : "opacity-0 "
						} bg-muted absolute left-0 top-10 transition-all duration-500 flex p-2 fade-in-75 `}
					>
						<ul className="flex flex-col ">
							{PRODUCTS_CATEGORY.map((item, index) => (
								<li
									className="bg-slate-150 hover:bg-slate-200 px-3 py-2 rounded-full text-sm"
									key={index}
								>
									<Link href={`/${item}`}>{item}</Link>
								</li>
							))}
						</ul>
					</li>
				</ul>
				<div className="shadow-lg border border-slate-150 rounded-lg bg-slate-200">
					<form>
						<div className="rounded-lg flex items-center bg-slate-50 focus-within:outline focus-within:outline-primary">
							<button type="submit" className="p-1.5">
								<Icons.search className="" />
							</button>
							<input
								className="py-2 placeholder:text-sm focus:outline-none bg-transparent placeholder:text-slate-500 pr-1.5 w-52"
								type="search"
								placeholder="Search medicines, plans etc."
							/>
						</div>
					</form>
				</div>
			</div>

			<ul className="nav-links flex gap-1 ml-8">
				{NAV_LINKS.map((items, index) => (
					<li
						className="bg-slate-150 hover:bg-slate-200 px-3 py-2 rounded-full text-sm"
						key={index}
					>
						<Link href={items.href}>{items.label}</Link>
					</li>
				))}
			</ul>
			<ul className="call-to-action flex ml-8 gap-2">
				{CALL_TO_ACTION.map((items, index) => (

						<Link key={index}
							className={`${items.variant} text-sm whitespace-nowrap flex items-center gap-2`}
							href={items.href}
						>
							{items.label == "Call us" && <Icons.call />}
							{items.label}
						</Link>
				))}
			</ul>
		</div>
	);
}
