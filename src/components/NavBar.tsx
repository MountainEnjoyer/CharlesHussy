import '../index.css'

function NavBar () {
    return (
            <>
      <div className=" w-screen h-[125px] fixed top-0 p-0 m-0 text-black bg-white z-1">
        <div className=" top-0 l-[50%] text-3xl color-black pb-5 pt-5">
          Charles Henri Hüssy
        </div>
        <div className="absolute left l-[-50%] border-b-[1px] border-t-[1px] w-screen border-gray-500 space-x-15 p-3 caps">
          <a href='/' className="hover:text-green-600">PRESENTATION</a>
          <a href='/aPropos' className="hover:text-green-600">A PROPOS</a>
          <a href='/Videos' className="hover:text-green-600">VIDEOS</a>
          <a href='/Bibliographie' className="hover:text-green-600">BIBLIOGRAPHIE</a>
          <a href='/Acheter' className="hover:text-green-600">ACHETER</a>
          <a href='/Contact' className="hover:text-green-600">CONTACT</a>
        </div>
      </div>
    </>
    )
}
 
export default NavBar