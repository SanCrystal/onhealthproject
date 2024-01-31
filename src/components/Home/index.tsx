import React from 'react'
import Hero from "./Hero";
import CareSolution from './CareSolution';
import WhyOneHealth from './WhyOneHealth';
import OneHealthPlatform from './OneHealthPlatform';
import Testimonial from './Testimonial';
import Footer from '../Footer/Footer';

export default function index() {
  return (
    <div>
        <Hero/>
        <CareSolution/>
        <WhyOneHealth/>
        <OneHealthPlatform/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

