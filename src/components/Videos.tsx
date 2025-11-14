import '../index.css'
import src from "../assets/nouvellevidéo.disc.mp4"
import IframeResizer from '@iframe-resizer/react'


function Videos() {
    return (
        <>
        <div className='h-[50%]'>
            <IframeResizer
                license='GPLv3'
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                src={src}
                style={{ width: '70%',  height: '70vh', margin: "auto", marginTop: "2%",}}
                className='items-center '
            />
        </div>
        </>
    )
}

export default Videos