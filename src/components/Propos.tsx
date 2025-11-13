import '../index.css'
import profile from "../assets/profile.jpg"

function Propos() {
    return (
        <>
            <p className='w-[80%] text-[12px] sm:text-sm md:text-md lg:text-lg xl:text-2xl  h-[25%] mx-auto mt-[1%] text-black wrap'>
                Charles Henri Hüssy, 84 ans, est professeur honoraire de l'université de Genève. Il a obtenu une licence en théologie, en sociologie, en géographie, puis un doctorat de géographie. Il a été Directeur d’un Centre Universitaire d’Écologie Humaine.
            </p>
            <img src={profile} className=' h-[30%] w-[20%] m-auto mt-[1%] mb-0 pt-0'></img>
       </>
    )
}

export default Propos