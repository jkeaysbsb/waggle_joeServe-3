import Image from "next/image"

const Compose = () => {
    return (
        <div className='shadow-md p-4 bg-white rounded-lg flex gap-4 justify-between text-sm'>
            <div className="flex-col">
            <Image src="https://www.sciencefriday.com/wp-content/uploads/2023/09/Anthophora-bomboides-bee-min.jpg" alt="Pic" width={20} height={20} className="w-10 h-10 rounded"/>
            
            </div>
           
         
      
     <div className='flex gap-2 flex-1'>
        <textarea placeholder="Type here" className="p-2 flex-1 bg-orange-100  rounded-lg"></textarea>
     </div>   
     <div className='flex items-center gap-4 mt-4 text-purple-400' >
        <div className='strong  cursor-pointer self-end'>
            +
        </div>
     </div>   
     
        
        </div>
     
    )
}

export default Compose