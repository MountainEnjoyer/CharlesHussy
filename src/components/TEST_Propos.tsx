import '../index.css'
import profile from "../assets/profile.jpg"

function Propos() {
    return (
        <>
            <div className=' absolute  flex  grid grid-cols-3 grid-rows-1  lg:w-[60%] md:w-[80%] sm:w-[90%] w-[100%] sm:left-[5%] lg:left-[250px] lg:grid-flow-row sm:align-center md:left-[100px] md:grid-flow-col lg:top-[160px] md:top-[150px] s:top-[100px] bg-gray-100 grid-flow-col rounded-md'>
                <img src={profile} className='relative rounded-md object-fill lg:scale-75 md:scale-60 sm:scale-80  '></img>
                <p className='relative col-span-2 sm:text-xl md:text-xl lg:text-2xl text-sm h-[25%] text-black wrap md:t-0 sm:top-[11%] sm:left-[-10px] lg:left-[-20px] left-[-25px] lg:top-[60px]'>
                    Charles Henri Hüssy, 84 ans, est professeur honoraire de l'université de Genève. Il a obtenu une licence en théologie, en sociologie, en géographie, puis un doctorat de géographie. Il a été Directeur d’un Centre Universitaire d’Écologie Humaine.
                </p>
            </div>
        </>
    )
}

export default Propos