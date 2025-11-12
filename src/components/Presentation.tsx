import '../App.css'
import hero from '../assets/hero.jpg'

function Presentation() {

  return (
    <>
      <div className='relative'>
        <img src={hero} className='block min-h-[px] w-screen '></img>
          <p className='text-xl w-[80%] mt-[2%] m-auto  '>
            Le monde est en état d’urgence, à la veille d’un possible cataclysme climatique, démographique, énergétique et financier. Biologique
        également: espèce animale vivant parmi les autres, l'homme n'a guère conscience de leur égalité de droit. <br/><br/>Mais bientôt une sagesse mondiale va émerger, dépouillée de toute attache idéologique, de tout intégrisme religieux et fondée sur l'œuvre salvatrice du Christ. Elle pourra s'appuyer sur une connexion planétaire via les réseaux sociaux, qui pour l'heure servent souvent à des usages égoïstes, déviants voire délictueux.
          </p>
      </div>
    </>
  )
}

export default Presentation
