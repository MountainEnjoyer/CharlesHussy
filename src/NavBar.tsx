import './index.css'

function NavBar () {
    return (
    <>
      <div className=" min-w-screen max-h-[10%]  top-0 p-0 m-auto text-black z-1">
        <div className="w-min-fill text-5xl color-black pb-5 pt-5 bg-white z-1">
          Charles Henri Hüssy
        </div>
        <div className="block m-auto space-x-4 border-b-[1px] border-t-[1px] h-max-[20%] min-w-screen text-wrap border-gray-500 gap-2 text-sm  bg-white z-1 ">
          <a href='/' className="hover:text-green-600 hover:font-bold">PRESENTATION</a>
          <a href='/apropos' className="hover:text-green-600 hover:font-bold">A PROPOS</a>
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