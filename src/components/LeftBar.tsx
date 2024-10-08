import Link from "next/link";
import Image from "next/image";



const LeftSide = () => {
    return (
        <div className=' p-10 bg-white pt-4 rounded-lg shadow-md overflow-scroll text-sm'>
            
       
      
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-orange-100"
        >
          
          <span>Filter</span>
        </Link>
      </div>
            
    )
}

export default LeftSide