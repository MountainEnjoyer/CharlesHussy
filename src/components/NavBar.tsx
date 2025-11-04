function NavBar () {
    return (
            <>
      <div class="relative w-screen h-[200px] p-0 m-0 text-black">
        <div class=" top-0 l-[50%] text-3xl color-black pb-5">
          Charles Henri Hüssy
        </div>
        <div class="absolute left l-[-50%] border-b-[1px] border-t-[1px] w-screen border-gray-500 space-x-15 p-3 caps">
          <a href='/Presentation' class="hover:text-green-600">PRESENTATION</a>
          <a href='/aPropos' class="hover:text-green-600">A PROPOS</a>
          <a href='/Videos' class="hover:text-green-600">VIDEOS</a>
          <a href='/Bibliographie' class="hover:text-green-600">BIBLIOGRAPHIE</a>
          <a href='/Acheter' class="hover:text-green-600">ACHETER</a>
          <a href='/Contact' class="hover:text-green-600">CONTACT</a>
        </div>
      </div>
    </>
    )
}
 
export default NavBar