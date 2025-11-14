import '../index.css'
import React, {useRef} from 'react';
import emailjs from "@emailjs/browser"

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_yogarwd", "template_mcqn33x", form.current, "DwT7fucKEcpiVKRYi").then(
            () => {
                alert("Message envoyé avec succès, vous trouverez dans votre boite mail une confirmation.");
                form.current.reset();
            },
            (error) => {
                alert("Echec de l'envoie, merci de réessayer.", error);
            }

        )
    }

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className='w-[90%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] shadow-xs shadow-gray-400 rounded-sm p-3 m-auto mt-[2%]'>
                <h2 className='text-[20px] sm:text-md md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl m-auto underline'>Formulaire de Contact</h2>
                <div className="input-box p-1">
                    <label className='text-gray-700 text-[12px] sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl m-auto'>Nom Complet</label><br/>
                    <input type='text' name="name" className='w-[99%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] border-1 border-gray-400 rounded-md p-1' placeholder='Entrez votre nom complet' required></input>
                </div>
                <div className="input-box p-1">
                    <label className='text-gray-700 pt-3 text-[12px] sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl m-auto'>Adresse eMail</label><br/>
                    <input type='text' name="mail" className='w-[99%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] border-1 border-gray-400 rounded-md p-1' placeholder='Entrez votre adresse email' required></input>
                </div>
                <div className="input-box p-1">
                    <label className='text-gray-700 text-[12px] sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl m-auto '>Message</label><br/>
                    <textarea type='text' name="message" className='w-[99%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] border-1 border-gray-400 rounded-md p-1' height="200px" placeholder='Entrez votre message' required></textarea>
                </div>
                <button type='submit' className='px-1 m-1 rounded-md shadow-none hover:shadow-2xs transition-shadow shadow-emerald-400'>Envoyer le message</button>
            </form>
        </>
    )
}

export default Contact