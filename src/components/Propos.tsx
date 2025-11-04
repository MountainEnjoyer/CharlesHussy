import '../index.css'
import profile from "../assets/profile.jpg"

function Propos() {
    return (
        <>
            <div className=' absolute grid grid-cols-2 grid-rows-1 w-screen h-[100px] top-[137px]'>
                <img src={profile} className='relative top-[-100px] scale-50 '></img>
                <p className='relative text-xl text-black'>
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