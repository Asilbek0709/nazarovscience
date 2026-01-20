"use client"

import "./globals.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Variations from './components/Variations'
import Demandings from './components/Demandings'
import Participating from './components/Participating'
import { useEffect, useState } from "react"


export default function Homepage() {

    return(
        <>
            <Header/>
            <Home/>
            <Variations/>
            <Demandings/>
            <Participating/>
            <Footer/>
        </>
    )
}
