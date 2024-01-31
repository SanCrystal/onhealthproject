import Link from 'next/link'
import React from 'react'

export default function OpenButton({title,href}:{ title:string,href:string}) {
  return (
		<Link
			href={href}
			className="text-center w-52 font-sans font-semibold font-sm leading-4 text-white rounded-3xl px-5 py-2.5 border-2 border-slate-100"
		>
			{title}
		</Link>
	);
}
