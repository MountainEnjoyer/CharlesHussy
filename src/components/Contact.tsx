import '../index.css'

function Contact() {
    return (
        <>
            <form action="" className='w-[50%] shadow-xs shadow-gray-400 rounded-sm p-3 m-auto mt-[2%]'>
                <h2 className='text-2xl underline'>Formulaire de Contact</h2>
                <div className="input-box p-1">
                    <label className='text-gray-700'>Nom Complet</label><br/>
                    <input type='text' className=' w-[80%] border-1 border-gray-400 rounded-md p-1' placeholder='Entrez votre nom complet' required></input>
                </div>
                <div className="input-box p-1">
                    <label className='text-gray-700 pt-3'>Adresse eMail</label><br/>
                    <input type='text' className='w-[80%] border-1 border-gray-400 rounded-md p-1' placeholder='Entrez votre adresse email' required></input>
                </div>
                <div className="input-box p-1">
                    <label className='text-gray-700 '>Message</label><br/>
                    <textarea type='text' className='w-[80%] border-1 border-gray-400 rounded-md p-1' height="200px" placeholder='Entrez votre message' required></textarea>
                </div>
                <button type='submit' className='px-1 m-1 rounded-md shadow-none hover:shadow-2xs transition-shadow shadow-emerald-400'>Envoyer le message</button>
            </form>
        </>
    )
}

export default Contact