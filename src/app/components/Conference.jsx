"use client"

import "../globals.css"
import Link from 'next/link';




const collections = [
  { id: 1,  description: "Akademik Baxtiyor Nazarovning ilmiy-ijodiy, ijtimoiy va pedagogik faoliyati haqida" },
  { id: 2,  description: "Mumtoz adabiyot, o'zbek adabiyoti, adabiyot nazariyasi masalalari" },
  { id: 3,  description: "Folklorshunoslik masalalari" },
  { id: 4,  description: "Ilmiy-adabiy meros va adabiy tanqidchilik tarixi masalalari" },
  { id: 5,  description: "Tarjima va tarjimashunoslik masalalari" },
  { id: 6,  description: "Adabiyot ilmida raqamli texnologiyalarning o‘rni va ahamiyati" },
  { id: 7,  description: "Poetik nutq muammolari" },
  { id: 8,  description: "Adabiy ta'lim rivoji va istiqboli masalalari" },
];

export default function Conference() {
  return (
    <div className="conference-section">
        <div className="conference-mail">
            <img src={"/conference-mail.png"} alt=""  />
        </div>
      <ul className='collections-variations'>
        {collections.map(col => (
          <li key={col.id} className='conference-variation' >
            <Link href={`/collections/${col.id}`} className='reference' >{col.description}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}