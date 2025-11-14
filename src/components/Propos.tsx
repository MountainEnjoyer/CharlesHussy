import '../index.css'
import profile from "../assets/profile.jpg"

function Propos() {
    return (
        <>
            <p className='w-[70%] text-[12px] sm:text-sm md:text-md lg:text-lg xl:text-2xl 2xl:text-4xl h-[25%] mx-auto mt-[1%] mb-[2%] text-black wrap'>
                Charles Henri Hüssy, né en 1940, est professeur honoraire de l'université de Genève. Il a obtenu une licence en théologie, en sociologie, en géographie, puis un doctorat de géographie. Il a été Directeur d’un Centre Universitaire d’Écologie Humaine. Son autobiographie Un destin tracé lève un coin de voile sur sa personnalité. Elle est également disponible en ligne.            </p>
            <img src={profile} className=' h-[30%] w-[20%] m-auto mt-[1%] mb-0 pt-0'></img>
       </>
    )
}

export default Propos