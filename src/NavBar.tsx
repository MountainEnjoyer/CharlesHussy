import './index.css'

function NavBar () {
    return (
            <>
      <div className=" w-screen fixed top-0 p-0 m-0 text-black z-1">
        <div className=" top-0 l-[50%] text-5xl color-black pb-5 pt-5 bg-white z-1">
          Charles Henri Hüssy
        </div>
        <div className="absolute left l-[-50%] border-b-[1px] border-t-[1px] w-screen border-gray-500 space-x-15 p-3 caps grid grid-cols-6 grid-rows-1 @xs:space-x-2 bg-white z-1">
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