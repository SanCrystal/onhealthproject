import React from 'react'
import MaxWithWrapper from './MaxWithWrapper';
import Link from 'next/link';
import { Icons } from './Icons';
import NavItems from './NavItems';

export default function Navbar() {
  return (
    <div className='bg-white sticky z-50 top-0 inset-0 h-16'>
            <MaxWithWrapper>
                <header className='relative bg-white mx-auto'>
                        <div className='border-b border-gray-100 py-3 shadow-sm w-full'>
                            <div className='flex flex-16 items-center'>
        {/* mobile nav */}
                                <div className='ml-4 flex lg:ml-0'>
                                    <Link href={"/"}>
                                        <Icons.logo className='h-8 w-36'/>
                                    </Link>
                                </div>
                                <div className='hidden z-50 ld:ml-8 lg:block lg:self-stretch'>
                                    <NavItems/>
                                </div>
                            </div>
                        </div>
                </header>
            </MaxWithWrapper>
    </div>
  )
}
