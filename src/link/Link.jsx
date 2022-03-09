import React from 'react'
import {Route, Routes, Link } from 'react-router-dom'

export default class Links extends React.Component{
    render(){
        return(
            <div>
            <Link to="/">Accueil</Link>
            <Link to="/produits">Liste</Link>
            </div>
        )
    }
}