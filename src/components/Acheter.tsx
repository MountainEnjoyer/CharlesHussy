import '../index.css'
import src1 from "../assets/ancienne_alliance.jpg"
import src2 from "../assets/nouvelle_alliance.jpg"
import src3 from "../assets/christ_vert.jpg"
import src4 from "../assets/attente.jpg"
import src5 from "../assets/Destin tracé page de couverture.jpg"
import src6 from "../assets/Kairós page de couverture.jpg"


function Acheter() {
    return (
        <> 
            <ul>
                <li className='my-5'><img src={src1} className='shadow-sm w-[25%] m-auto mb-4' /> <a className='rounded-md shadow-md bg-blue-300 p-3 pointer-events-auto' href="https://www.editions-harmattan.fr/catalogue/livre/lancienne-alliance/9221">Commander</a></li>
                <li className='my-5'><img src={src2} className='shadow-sm w-[25%] m-auto mb-4' /> <a className='rounded-md shadow-md bg-blue-300 p-3 pointer-events-auto' href="https://www.editions-harmattan.fr/catalogue/livre/une-nouvelle-alliance/9318">Commander</a></li>
                <li className='my-5'><img src={src3} className='shadow-sm w-[25%] m-auto mb-4' /> <a className='rounded-md shadow-md bg-blue-300 p-3 pointer-events-auto' href="https://www.editions-harmattan.fr/catalogue/livre/un-christ-vert/8131">Commander</a></li>
                <li className='my-5'><img src={src4} className='shadow-sm w-[25%] m-auto mb-4' /> <a className='rounded-md shadow-md bg-blue-300 p-3 pointer-events-auto' href="https://www.editions-harmattan.fr/catalogue/livre/lattente-3/74363">Commander</a></li>
                <li className='my-5'><img src={src5} className='shadow-sm w-[25%] m-auto mb-4' /> <a className='rounded-md shadow-md bg-blue-300 p-3 pointer-events-auto' href="https://editions-pillet.ch/products/un-destin-trace-sous-la-main-de-dieu">Commander</a></li>
                <li className='my-5'><img src={src6} className='shadow-sm w-[25%] m-auto mb-4' /> <a className='rounded-md shadow-md bg-blue-300 p-3' href="">Sortie prévue en Décembre 2025</a></li>
            </ul>
        </>
    )
}

export default Acheter