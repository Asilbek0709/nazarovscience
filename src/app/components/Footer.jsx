"use client"


import '../globals.css'
import { useEffect } from 'react'
import Link from 'next/link';

export default function Footer() {
    return(
        <>
          <div className="footer-section" data-aos='fade-up'>
              <div className="logo-part2" data-aos='fade-left'>
                <img src={"/logo.png"} alt="" />
              </div>
              <div className="line1"></div>
              <div className="variations" data-aos='fade-up'>
                <div className="footer-variation" >
                  <ul className="footer-navigation">
                    <li><Link href={'/'} className='Link'>Bosh sahifa</Link></li>
                    <li><Link href={'/'} className='Link'>Anjuman</Link></li>
                    <li><Link href={'/'} className='Link'>Anjuman yo'nalishlari</Link></li>
                    <li><Link href={'/'} className='Link'>Manzil</Link></li>
                    <li><Link href={'/'} className='Link'>Ilmiy meroslar</Link></li>
                  </ul>
                </div>
              </div>
              <div className="line2"></div>
              <div className="footer-news" data-aos='fade-right'>
                <h1>Yangiliklar</h1>
                <div className="news">
                  <img src={"/tglogo.png"} alt="" />
                  <a href="http://t.me/filologiya_fani">https://t.me/filologiya_fani</a>
                </div> <br />
                <div className="location">
                  <h1>Manzil: 100060, Toshkent, Shahrisabz 5-tor ko'chasi</h1>
                  <h1>Barcha maqolalar doi + sertifikatlari shu havola orqali olshingiz mumkin https://t.me/nazarovconference</h1>
                </div>

              </div>
          </div>
        </>
    )
}