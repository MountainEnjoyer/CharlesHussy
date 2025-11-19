import './index.css'
import { Link } from "react-router-dom";    

function NavBar () {
    return (
    <>
      <div className=" min-w-[100%] top-0 p-0 m-auto text-black z-1">
        <div className="w-min-fill text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl color-black pb-5 pt-5 bg-white z-1">
          Charles Henri Hüssy
        </div>
        <div className="flex gap-4 sm:gap-4 md:gap-13 lg:gap-20 xl:gap-28 2xl:gap-40 py-1 flex-wrap place-content-center  border-b-[1px] border-t-[1px] h-max-[20%] min-w-[90%]  border-gray-500  text-[8px] sm:text-base md:text-sm lg:text-md xl:text-lg 2xl:text-3xl  bg-white z-1 ">
          <Link to="/" className="hover:text-green-600">PRESENTATION</Link>
          <Link to="/a_propos" className="hover:text-green-600">A PROPOS</Link>
          <Link to="/video" className="hover:text-green-600">VIDEO</Link>
          <Link to="/bibliographie" className="hover:text-green-600">BIBLIOGRAPHIE</Link>
          <Link to="/acheter" className="hover:text-green-600">ACHETER</Link>
          <Link to="/contact" className="hover:text-green-600">CONTACT</Link>
        </div>
      </div>
    </>
    )
}
 
export default NavBar