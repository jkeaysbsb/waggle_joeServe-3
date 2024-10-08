
import Link from "next/link";
import Image from "next/image";



const RightSide = () => {
  
        return (
            <div className=' p-10 bg-white pt-5 rounded-lg shadow-md overflow-scroll text-sm'>
                
            <Link
              href="/"
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-orange-100"
            >
             
              <span>Controls</span>
            </Link>
           
            
          </div>
                
        )
    }

export default RightSide