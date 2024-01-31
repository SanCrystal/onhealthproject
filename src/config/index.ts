import { Icons } from "@/components/Icons";
import { ReactNode } from "react";

export const PRODUCTS_CATEGORY = ["Medicine", "Consultant", "Appointment"];

export const NAV_LINKS = [
	{
		label: "Pharmacies",
		value: "pharmacies" as const,
		href: "/pharmacies" as const,
	},
	{
		label: "Insurers",
		value: "insurers" as const,
		href: "/insurers" as const,
	},
	{
		label: "Resources",
		value: "resources" as const,
		href: "/resources" as const,
	},
	{
		label: "About",
		value: "about" as const,
		href: "/about" as const,
	},
];

export const CALL_TO_ACTION = [
	{
		label: "Call us",
		value: "call-us" as const,
		icon: Icons.call,
		href: "/call-us" as const,
		variant: "btn-white",
	},
	{
		label: "Sign in",
		value: "sign-in" as const,
		icon: "<></>",
		href: "/sign-in" as const,
		variant: "btn-light-green",
	},
	{
		label: "Enter Pharmarcy",
		value: "enter-pharmarcy" as const,
		icon: "<></>",
		href: "/enter-pharmarcy" as const,
		variant: "btn-green",
	},
];
