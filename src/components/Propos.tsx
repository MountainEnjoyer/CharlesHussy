import '../index.css'
import profile from "../assets/profile.jpg"

function Propos() {
    return (
        <>
            <div className='absolute top-[20%] h-[60%] mt-[]'>
                <p className='relative col-span-2 w-[80%] sm:text-xl md:text-xl lg:text-2xl text-md h-[25%]  text-black wrap md:t-0 left-[10%] left-[10%] top-[14%]'>
                    Charles Henri Hüssy, 84 ans, est professeur honoraire de l'université de Genève. Il a obtenu une licence en théologie, en sociologie, en géographie, puis un doctorat de géographie. Il a été Directeur d’un Centre Universitaire d’Écologie Humaine.
                </p>
                <img src={profile} className='relative rounded-md lg:scale-50 md:scale-50 sm:scale-30 scale-30 lg:left-[30%] md:left-[40%] sm:left-[17%] left-[9%] mt-[-5%] mb-0 p-0 '></img>
            </div>
       </>
    )
}

export default Propos