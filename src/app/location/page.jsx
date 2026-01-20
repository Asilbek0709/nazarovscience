"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Locationpage() {
    return(
        <>
            <Header></Header>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.4713196143966!2d69.26881857587385!3d41.298609271311264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad5b0f97c2f%3A0xd7c0d13509e5307!2z0YPQu9C40YbQsCDQqNCw0YXRgNC40YHQsNCx0LcgNSwg0KLQsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1768922514011!5m2!1sru!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            <Footer></Footer>
        </>
    )
}