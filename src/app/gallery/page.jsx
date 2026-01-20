"use client"


import "../globals.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import { useState, useEffect } from "react"

export default function Gallerypage() {



    return(
        <>
            <Header></Header>
            <Gallery></Gallery>
            <Footer></Footer>
        </>
    )
}