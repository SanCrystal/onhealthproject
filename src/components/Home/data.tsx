import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Icons } from "../Icons";
import HeroIndividual from "../../../public/heroIndividual.svg";
import HeroInsures from "../../../public/heroPartner.svg";
import HeroOnboard from "../../../public/heroOnboard.svg";
import HW from "../../../public/heroWomen.svg";
import bgHeroL from "../../../public/bgHeroL.svg";
import bgHeroR from "../../../public/bgHeroR.svg";
import cart from "../../../public/cart.svg";
import insureC from "../../../public/insureC.svg";
import delivery from "../../../public/delivery.svg";
import careImg from "../../../public/careImg.svg";
import onewellness from "../../../public/onewellness.svg";
import woh1 from "../../../public/woh1.svg";
import woh2 from "../../../public/woh2.svg";
import woh3 from "../../../public/woh3.svg";
import pills from "../../../public/pills.svg";
import platformImgH1 from "../../../public/platformImgH1.svg";
import platformImgH2 from "../../../public/platformImgH2.svg";
import platformImgF1 from "../../../public/platformImgF1.svg";
import platformImgF2 from "../../../public/platformImgF2.svg";
import testimonialB from "../../../public/testmonialB.png";
import coughColdTestimonial from "../../../public/coughColdTestimonial.svg";
import herHealthTestimonial from "../../../public/herHealthTestimonial.svg";
import hisHealthTestimonial from "../../../public/hisHealthTestimonial.svg";
import sexualHealthTestimonial from "../../../public/sexualHealthTestimonial.svg";
import multivitaminsTestimonial from "../../../public/multivitaminsTestimonial.svg";
import needMedicalGuide1 from "../../../public/needMedicalGuide1.svg";
import needMedicalGuide2 from "../../../public/needMedicalGuide2.svg";
import needMedicalGuide3 from "../../../public/needMedicalGuide3.svg";
import getStartedLeft1 from "../../../public/getStartedLeft1.svg";
import getStartedLeft2 from "../../../public/getStartedLeft2.svg";
import getStartedLeft3 from "../../../public/getStartedLeft3.svg";
import getStartedRight from "../../../public/getStartedRight.svg";

export const HeroWomen = HW as string;
export const HeroBGL = bgHeroL as string;
export const HeroBGR = bgHeroR as string;
export const CareCart = cart as string;
export const CareInsure = insureC as string;
export const CareDelivery = delivery as string;
export const CareImage = careImg as string;
export const OneWellness = onewellness as string;
export const WhyOneHealth1 = woh1 as string;
export const WhyOneHealth2 = woh2 as string;
export const WhyOneHealth3 = woh3 as string;
export const WhyOneHealthPills = pills as string;
export const PlatformImgH1 = platformImgH1 as string;
export const PlatformImgH2 = platformImgH2 as string;
export const PlatformImgF1 = platformImgF1 as string;
export const PlatformImgF2 = platformImgF2 as string;
export const TestimonialB = testimonialB;
export const CoughColdTestimonial = coughColdTestimonial as string;
export const HerHealthTestimonial = herHealthTestimonial as string;
export const HisHealthTestimonial = hisHealthTestimonial as string;
export const SexualHealthTestimonial = sexualHealthTestimonial as string;
export const MultivitaminsTestimonial = multivitaminsTestimonial as string;
export const NeedMedicalGuide1 = needMedicalGuide1 as string;
export const NeedMedicalGuide2 = needMedicalGuide2 as string;
export const NeedMedicalGuide3 = needMedicalGuide3 as string;

export const GetStartedLeft1=getStartedLeft1 as string;
export const GetStartedLeft2=getStartedLeft2 as string;
export const GetStartedLeft3=getStartedLeft3 as string;
export const GetStartedRight=getStartedRight as string;

export const HeroCardData = [
	{
		title: "INDIVIDUALS",
		Image: HeroIndividual as string,
		action: { title: "Enter Pharmacy", href: "enter-pharmacy" },
	},
	{
		title: "INSURERS",
		Image: HeroInsures as string,
		action: { title: "Partner With Us", href: "/partner-with-us" },
	},
	{
		title: "PROVIDERS",
		Image: HeroOnboard as string,
		action: { title: "Get On Board", href: "/get-on-board" },
	},
];

export const CareSolutionData = [
	{
		title: "FOR INSURERS",
		image: CareInsure,
		action: "Learn more",
		heading: "Medication & pharmacy benefits for patients",
		description: "Enrollee-friendly Pharmacy Benefit & Fulfilment Solution",
		bgColor: "#E9FFEB",
	},
	{
		title: "FOR PHARMACIES",
		image: CareCart,
		action: "Learn more",
		heading: "Pharmacy fulfillment & dispensing",
		description:
			"Healthcare fulfillment to transform healthcare service provision in Nigeria",
		bgColor: "#F1FFE4",
	},
];

export const WhyOneHealthcareData = [
	{
		heading: "Lowest prices",
		image: WhyOneHealth1,
		description:
			"We offer the lowest prices and discounts to give you the best prices on your medications & healthcare solutions",
	},
	{
		heading: "Medication Support",
		image: WhyOneHealth2,
		description:
			"We manage & automate your refills, provide convenient medication support, patient follow-up and advisory.",
	},
	{
		heading: "Same Day, Last Mile Care",
		image: WhyOneHealth3,
		description:
			"Before work, in the evening, at home or right to your office. We deliver your quality healthcare right to your door.",
	},
];

export const PlatformCardData = [
	{
		title: "Pillmova",
		description: "#1 Pharma logistics and mobility platform in Nigeria",
		action: "Learn more",
		imageHeader: PlatformImgH1,
		imageFooter: PlatformImgF1,
		bgColor: "#228821",
		bgColorSec: "#379A44",
	},
	{
		title: "Pillfinda",
		description:
			"Pharma procurement, inventory intelligence for pharmacies in Africa",
		action: "Learn more",
		imageHeader: PlatformImgH2,
		imageFooter: PlatformImgF2,
		bgColor: "#EAFBDA",
		bgColorSec: "#61AC1A",
	},
];

export const TestimonialCardData = [
	{
		image: CoughColdTestimonial,
		title: "Cough & Cold",
		link: "#",
	},
	{
		image: HerHealthTestimonial,
		title: "Her Health",
		link: "#",
	},
	{
		image: HisHealthTestimonial,
		title: "His Health",
		link: "#",
	},
	{
		image: SexualHealthTestimonial,
		title: "Sexual Health",
		link: "#",
	},
	{
		image: MultivitaminsTestimonial,
		title: "Multivitamins",
		link: "#",
	},
];

export const GuideCardData = [
	{
		image: NeedMedicalGuide1,
	},
	{
		image: NeedMedicalGuide2,
	},
	{
		image: NeedMedicalGuide3,
	},
];

export const ContactGuideInfoData = [
	{
		icon: BsWhatsapp,
		title: "08179017319",
	},
	{
		icon: Icons.call,
		title: "08179017319",
	},
	{
		icon: FiMail,
		title: "customerservice@onehealthng.com",
	},
];
