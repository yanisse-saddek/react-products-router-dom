import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default class Produits extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items:[]
        }
    }
    componentDidMount=()=>{
        axios('https://fakestoreapi.com/products/').then(result=>{
            this.setState({
                items:result.data
            })
        })
    }   
    render(){
        return <div class="items-list">
                    {this.state.items?this.state.items.map(item=>{
                        return <div class="card">
                                    <Link to={`/produits/${item.id}`}   >
                                    <img height="150px" src={item.image}/>
                                    <h5>{item.title}</h5>
                                    <p className="desc">{item.description}</p>
                                    <h4>{item.price}</h4>
                                    </Link>
                                </div>
                    }):<p>vide</p>}
                </div>
    }
}