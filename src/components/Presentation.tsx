import '../App.css'
import hero from '../assets/hero.jpg'

function Presentation() {

  return (
    <>
      <img src={hero} className='absolute h-[300px] w-screen top-[137px]'></img>
        <p className='absolute text-xl lg:w-[65%] md:w-[80%]  h-[50%] pb-[300px] lg:pt-[200px] md:pt-[100px] lg:ml-[16%] md:ml-[8%]  '>
          Le monde est en état d’urgence, à la veille d’un possible cataclysme climatique, démographique, énergétique et financier. Biologique
également: espèce animale vivant parmi les autres, l'homme n'a guère conscience de leur égalité de droit. <br/><br/>Mais bientôt une sagesse mondiale va émerger, dépouillée de toute attache idéologique, de tout intégrisme religieux et fondée sur l'œuvre salvatrice du Christ. Elle pourra s'appuyer sur une connexion planétaire via les réseaux sociaux, qui pour l'heure servent souvent à des usages égoïstes, déviants voire délictueux.
        </p>
        <div className='absolute h-[100px] w-[99%] pt-[425px]'></div>
    </>
  )
}

export default Presentation
