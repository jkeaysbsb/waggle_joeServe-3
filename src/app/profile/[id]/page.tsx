import MyRecentAct from "@/components/MyRecentAct"
import RightSide from "@/components/Controls"
import LeftSide from "@/components/LeftBar"
import Image from "next/image"

const ProfilePage = () => {

    return (
        <div className='flex gap-6 pt-4'>
            <div className='hidden xl:block w-[20%]'>
                <LeftSide />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center">
                        

                    <h1 className="mt-20 mb-4 text-2xl font-bold">Demo Admin</h1>
                    


                    <div className="flex items-center justify-center gap-12 mb-4">
                        <div className='flex flex-col items-center'>
                            <span className='font-medium'>5</span>
                            <span className='font-small'>Submissions</span>
                        </div>
                    </div>
                    </div>
                  


            
            
            </div>
            </div>
    )
}

export default ProfilePage