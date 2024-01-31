import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FiMail } from "react-icons/fi";

export default function Subsriber() {
  return (
		<div className="bg-[#228821] p-9 rounded-3xl col-span-4 flex flex-col gap-5 pr-20">
			<h1 className="font-head font-semibold text-4xl leading-8 text-white">
				Subscribe to our newsletter
			</h1>
            <div>

			<p className="text-white">Feeling a bit lost some times?</p>
			<p className="text-white">
				Get a weekly dose of actionable health advice, secrets, tips, trends,
				and banter in your inbox.
			</p>
            </div>
			<div>
				<div className="flex w-full max-w-sm items-center space-x-2">
					<div className="flex relative">
						<Input type="email" placeholder="Email Address" className="pl-6 w-[17.5rem]" />
						<FiMail className="text-[#667185] absolute flex top-[32%] ml-2" />
					</div>
					<Button
						type="submit"
						className="text-secondary text-center bg-[#8DDE44] w-[7.9rem]"
					>
						Subscribe
					</Button>
				</div>
			</div>
		</div>
	);
}
