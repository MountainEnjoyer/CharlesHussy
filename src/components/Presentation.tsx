import '../App.css'
import hero from '../assets/hero.jpg'

function Presentation() {

  return (
    <>
      <img src={hero} className='absolute h-[300px] w-screen top-[161px]'></img>
        <p className='absolute text-xl w-[80%] h-[50%] pt-[200px] ml-[10%]  '>
          Le monde est en état d’urgence, à la veille d’un possible cataclysme
          climatique,démographique, énergétique et financier. Biologique
          également: espèce animale vivant parmi les autres, l'homme n'a guère
          conscience de leur égalité de droit.
          Bientôt une sagesse mondiale va émerger, dépouillée de toute attache
          idéologique, de tout intégrisme religieux et fondée sur l'œuvre salvatrice
          du Christ. Elle pourra s'appuyer sur une connexion planétaire via les
          réseaux sociaux, qui pour l'heure servent souvent à des usages égoïstes,
          déviés voire délictueux.
        </p>
    </>
  )
}

export default Presentation
