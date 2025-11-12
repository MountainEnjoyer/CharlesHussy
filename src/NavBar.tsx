import './index.css'

function NavBar () {
    return (
    <>
      <div className=" min-w-screen max-h-[10%]  top-0 p-0 m-auto text-black z-1">
        <div className="w-min-fill text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl color-black pb-5 pt-5 bg-white z-1">
          Charles Henri Hüssy
        </div>
        <div className="flex gap-2 sm:gap-5 md:gap-15 lg:gap-25 xl:gap-30  flex-wrap place-content-center  border-b-[1px] border-t-[1px] h-max-[20%] min-w-[90%]  border-gray-500  text-[10px] sm:text-sm md:text-md lg:text-lg xl:text-2xl  bg-white z-1 ">
          <a href='/' className="hover:text-green-600 hover:font-bold">PRESENTATION</a>
          <a href='/apropos' className="hover:text-green-600 hover:font-bold">PROPOS</a>
          <a href='/Videos' className="hover:text-green-600 hover:font-bold">VIDEOS</a>
          <a href='/Bibliographie' className="hover:text-green-600 hover:font-bold">BIBLIOGRAPHIE</a>
          <a href='/Acheter' className="hover:text-green-600 hover:font-bold">ACHETER</a>
          <a href='/Contact' className="hover:text-green-600 hover:font-bold">CONTACT</a>
        </div>
      </div>
    </>
    )
}
 
export default NavBar