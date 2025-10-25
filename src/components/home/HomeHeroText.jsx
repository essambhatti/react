import Video from "./Video"


const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-3.5 text-center'>
            <div className='text-[9.5vw] uppercase leading-[8.5vw] flex items-center justify-center'>L'étincelle</div>
            <div className='text-[9.5vw] uppercase leading-[8.5vw] flex items-center justify-center'>qui <div className="h-[7vw] border-none rounded-full overflow-hidden mb-2 w-[15vw]"><Video /></div> génère</div>
            <div className='text-[9.5vw] uppercase leading-[8.5vw] flex items-center justify-center'>la créativité</div>
        </div>
    )
}

export default HomeHeroText
