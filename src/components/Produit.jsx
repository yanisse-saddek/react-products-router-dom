import React from 'react'
import axios from "axios"
import '../App.css'
import { useParams } from 'react-router-dom'
function withRouter(Component){
    return (props) =>{return <Component params={useParams()} {...props}/> }
}


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            item:[]
        }
    }
    componentDidMount=()=>{
        axios(`http://fakestoreapi.com/products/${this.props.params.productId}`).then(result=>{
            this.setState({
                item:result.data
            })
        })
    }

    render(){
        return(
            <div class="product">
                <div className="product-left">
                    <img src={this.state.item.image}/>
                </div>
                <div className="product-right">
                    <p className="title">{this.state.item.title}</p>
                    <p>{this.state.item.description}</p>
                    <p class="price-button">{this.state.item.price}</p>            
                </div>
            </div>

        )

    }
}
export default withRouter(Home)