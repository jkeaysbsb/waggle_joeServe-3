
import Image from "next/image"
import Comments from "";
const FullSub = () => {
    return (
       

        
            <div className="flex items-center flex-col gap-4 pt-5 pb-5 p-2">
           
                <div className="flex items-center justify-between">
               
                    <div className='flex items-center gap-4'>
                        <Image src="https://www.sciencefriday.com/wp-content/uploads/2023/09/Anthophora-bomboides-bee-min.jpg" alt="Pic" width={20} height={20} className="w-10 h-10 rounded"/>
                        <span className="text-sm">Account Name</span>

                   
                        <div className="ml-60">
                            <span>+</span>
                        </div>
                   
                    </div>
                
                </div>
                
                        <p> Updates and insights here!</p>
                <div className="flex item-center justify-between text-sm">
                    <div className="flex items-center gap-4  p-1 bg-orange-100 rounded-full ">
                        <span className="cursor-pointer text-2xl">💬</span>

                        
                        <span className="text-xs">0
                            <span className="hidden md:inline"> Comments</span>
                        </span>
                    
                    </div>


                </div>
               
    
    </div>
                





           

                

        

                

        
    
    );

};

export default FullSub