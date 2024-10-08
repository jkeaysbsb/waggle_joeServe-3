import Image from "next/image"

const MyRecentAct = () => {
    return (
        <div className='p-4 bg-white pt-4 rounded-lg shadow-md overflow-scroll text-xs '>
            
            <div className="flex gap-8  w-max h-max scrollbar-hide">
                <div className="flex flex-col h-max scrollbar-hide">
                <div className="flex flex-row items-left gap-2 cursor-pointer pt-2 pb-2">

                <Image src="https://www.sciencefriday.com/wp-content/uploads/2023/09/Anthophora-bomboides-bee-min.jpg" alt="Pic" width={20} height={20} className="w-10 h-10 rounded"/>
                    Bzz?
                </div>
                <div className="flex flex-row items-left gap-2 cursor-pointer">

                <Image src="https://www.sciencefriday.com/wp-content/uploads/2023/09/Anthophora-bomboides-bee-min.jpg" alt="Pic" width={20} height={20} className="w-10 h-10 rounded"/>
                Bzzz!
                </div>
                
                <div className="flex flex-row items-left gap-2 cursor-pointer pt-2 pb-2">

                <Image src="https://www.sciencefriday.com/wp-content/uploads/2023/09/Anthophora-bomboides-bee-min.jpg" alt="Pic" width={20} height={20} className="w-10 h-10 rounded"/>
                Bzzzz
                </div>

                <div className="flex flex-row items-left gap-2 cursor-pointer pt-2 pb-2">

                <Image src="https://www.sciencefriday.com/wp-content/uploads/2023/09/Anthophora-bomboides-bee-min.jpg" alt="Pic" width={20} height={20} className="w-10 h-10 rounded"/>
                Bzzzz
                </div>

                <div className="flex flex-row items-left gap-2 cursor-pointer pt-2 pb-2">

                <Image src="https://www.sciencefriday.com/wp-content/uploads/2023/09/Anthophora-bomboides-bee-min.jpg" alt="Pic" width={20} height={20} className="w-10 h-10 rounded"/>
                Bzzzz
                </div>
                <div className="flex flex-row items-left gap-2 cursor-pointer pt-2 pb-2">

<Image src="https://www.sciencefriday.com/wp-content/uploads/2023/09/Anthophora-bomboides-bee-min.jpg" alt="Pic" width={20} height={20} className="w-10 h-10 rounded"/>
Bzzzz
</div>
<div className="flex flex-row items-left gap-2 cursor-pointer pt-2 pb-2">

<Image src="https://www.sciencefriday.com/wp-content/uploads/2023/09/Anthophora-bomboides-bee-min.jpg" alt="Pic" width={20} height={20} className="w-10 h-10 rounded"/>
Bzzzz
</div>

                
                </div>

            </div>
        </div>
    )
}

export default MyRecentAct