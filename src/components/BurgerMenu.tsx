"use client";
import {useState} from "react";
import Link from "next/link";



const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        
        <div className=''>
            <div className="flex flex-col cursor-pointer gap-[4.5px]" onClick={()=>setIsOpen((prev)=>!prev)}>
            <div className={`w-6 h-1 bg-black rounded-sm ${isOpen?"rotate-45":""} origin-left`}/>
            <div className={`w-6 h-1 bg-black rounded-sm ${isOpen?"opacity-0":""}`}/>
            <div className={`w-6 h-1 bg-black rounded-sm ${isOpen?"-rotate-45":""} origin-left`}/>

        
            
            </div>
            {isOpen && (
                
                <div className=' absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'>

                    <Link href='/'>My Activity</Link>
                    <Link href='/'>CxD Activity</Link>
                    <Link href='/'>Compose</Link>
                    <Link href='/'>Problems & Solutions</Link>
                    
                    
                    

                </div>
            )}
        </div>
            
           
        
    
)}

export default BurgerMenu