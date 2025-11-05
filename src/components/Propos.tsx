import '../index.css'
import profile from "../assets/profile.jpg"

function Propos() {
    return (
        <>
            <div className=' absolute grid grid-cols-3 grid-rows-1 w-[80%]  left-[100px] top-[160px] bg-gray-100 rounded-md'>
                <img src={profile} className='relative rounded-md scale-75 '></img>
                <p className='relative col-span-2 text-xl h-[25%] text-black wrap left-[-25px] top-[150px]'>
                    Charles Henri Hüssy, 84 ans, est professeur honoraire de l'université de
    Genève. Il a obtenu une licence en théologie, en sociologie, en
    géographie, puis un doctorat de géographie. Il a été Directeur d’un
    Centre Universitaire d’Écologie Humaine.
                </p>
            </div>
        </>
    )
}

export default Propos