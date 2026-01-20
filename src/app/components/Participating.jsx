"use client"

import "../globals.css"
import { useEffect } from 'react';


export default function Participating() {

    return(
        <>
            <div className="participating-section" data-aos='fade'>
                <div className="participating-heading">
                    <h1 className='yellow-text' >Xalqaro anjumanda ishtirok etish</h1>
                </div>
                <div className="participating-info">
                    <img src={"/participate.png"} alt="" data-aos='fade-right' />
                    <p data-aos='fade-left' >Xalqaro anjumanda ishtirok etish masalalari boʻyicha OʻzR FA Oʻzbek tili, adabiyoti va folklori instituti Adabiy aloqalar va adabiyot naziriyasi boʻlimiga murojaat qilish mumkin.
Zaruriy yangiliklar <span className='blue-text' >t.me/filologiya_fani</span> telegramm kanali hamda <span className='blue-text'>@adab2020</span> telegramm guruhi orqali berib boriladi.</p>
                </div>
            </div>
        </>
    )
}
