"use client"


import "../globals.css"

import { useEffect } from 'react';



export default function Home() {

    

    return(
        <>
            <div className="home-section" data-aos='fade'>
                <div className="home-container">
                    <div className="home-text" data-aos='fade-right'>
                        <p>Oʻzbekiston Respublikasi Fanlar Akademiyasi Oʻzbek tili, adabiyoti va folklori instituti, Oʻzbekiston Yozuvchilar uyushmasi, Oʻzbekiston Milliy pedagogika universiteti, Oʻzbekiston jurnalistika va ommaviy kommunikatsiyalar universiteti, Osiyo Xalqaro universiteti, ISFT instituti tomonidan 2025-yil 17 sentyabrda o'tkazilgan <span className='yellow-text' >«ADABIYOTSHUNOSLIKNING DOLZARB MUAMMOLARI»</span> mavzusida xalqaro ilmiy-nazariy anjuman materiallari ushbu platformaga joylanadi. <br />
Ilmiy-nazariy anjuman Oʻzbekiston Respublikasi Fanlar Akademiyasi Oʻzbek tili, adabiyoti va folklori institutida uzoq yillar samarali faoliyat olib borgan filologiya fanlari doktori, akademik <span className='yellow-text'>Baxtiyor Nazarov</span> tavalludining 80-yilligiga bagʻishlanadi.
Xalqaro anjuman oʻz ishini oʻzbek va xorijiy tillarda olib boradi</p>
                    </div>
                    <div className="home-img" data-aos='fade-left'>
                        <img src={"/home.png"} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}