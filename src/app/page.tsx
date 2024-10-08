
import FullSub from "@/components/FullSubmission"
import LeftSide from "@/components/LeftBar"
import RightSide from "@/components/Controls"
import Compose from "@/components/Compose"
import CxDRecentAct from "@/components/CxDRecentAct"
import MyRecentAct from "@/components/MyRecentAct"
import River from "@/components/River"

const Homepage = () => {
  return (
    <div className='flex gap-6'>
    <div className=" xl:block l:block flex flex-col  pt-6" > <LeftSide/>  </div>
    <div className="w-full lg:w-[70%]" > 
      <div className="flex flex-col gap-5 pb-6 pt-6">
        
        <MyRecentAct/>
        
        
        <River/>  
        
        
        
        </div>  
      
      </div>
    <div className="hidden lg:block w-[30%] pt-6" ><RightSide/>   </div>

    </div>
  )
}

export default Homepage