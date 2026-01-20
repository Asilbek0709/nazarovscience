"use client"

import "../globals.css"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Conference from '../components/Conference'

function Conferencepage() {

  


    return(
        <>
            <Header/>
            <Conference/>
            <Footer/>        
        </>
    )
}
export default Conferencepage