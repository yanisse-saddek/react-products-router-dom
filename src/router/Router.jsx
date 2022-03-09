import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Produits from '../components/Produits'
import Produit from '../components/Produit'

export default class Router extends React.Component{
    render(){
        return(
            <Routes>
                <Route  path="/" element={<Home/>}></Route>
                <Route  path="/produits" element={<Produits/>}></Route>
                <Route  path="/produits/:productId" element={<Produit/>}></Route>
                <Route  path="*" element={<p>404</p>}></Route>
            </Routes>
        )
    }
}