import Link from "next/link"
import { Button } from '@sky-uk/ui-core';
import React from 'react';
import './Navbar.css';
import BurgerMenu from "./BurgerMenu";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Image from "next/image";

const Navbar = () => {
    return (
        <div className='navbar flex items-center justify-between'>
            <div className='navbar-left font-bold h1 gradient-text'>
            
                <Link href="/">Waggle</Link>
                
                
                
            
            </div>
            
           
            <div className='navbar-centre text-purple-600'>
            <div className='md:hidden'>
                <BurgerMenu/>
            </div>
                <div className='hidden flex md:flex gap-6  '>
                <strong><Link href='/compose'> Compose</Link></strong>
                    <Link href='/'> My Activity</Link>
                    <Link href='/'> CxD Activity</Link>
                  
                    <Link href='/'> Problems & Solutions</Link>

                </div>
            </div>
            <div className="navbar-right flex items-center gap-4 xl:gap-8 justify-end">
            
                <div className="">
                    <input type="text" placeholder="Search" className="flex bg-transparent outline-none h-6"/>
                </div>
                <ClerkLoaded>
                    <SignedIn>
                <div className="nav_logo cursor-pointer">
                    <img src='./IE-310.png' alt="Sky" className="SkyLogo"/>
                    

                </div>
                </SignedIn>
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <Image src="https://www.sciencefriday.com/wp-content/uploads/2023/09/Anthophora-bomboides-bee-min.jpg" alt="Pic" width={20} height={20} className="w-10 h-10 rounded-full"/>
                       Account Name
                    </div>
                <SignedOut>

                </SignedOut>
                </ClerkLoaded>
                
                
            </div>


        </div>
    )
}

    


export default Navbar