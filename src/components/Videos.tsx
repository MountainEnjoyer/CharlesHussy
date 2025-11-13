import '../index.css'
import IframeResizer from '@iframe-resizer/react'


function Videos() {
    return (
        <>
            <IframeResizer
                license='GPLv3'
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                src="https://www.youtube.com/embed/GHok9Y42mcA?si=R0i3x0gdMxGzmHpj"
                style={{ width: '70%',  height: '70vh', margin: "auto", marginTop: "2%" }}
            />
        </>
    )
}

export default Videos