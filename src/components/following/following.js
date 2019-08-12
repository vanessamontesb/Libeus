
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from "../../constants";
import User from '../../components/home/user';
import { Link } from 'react-router-dom';


class Following extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            userInfo: {
                name: "",
                imgSrc: "",
                namesfollowing:[]

            },
            error: ''
        }
    }

    componentDidMount = () => {
        const { match: { params: { id } } } = this.props;
        axios.get(`${API_URL}/following/${id}`)
        .then(response => {
            this.setState({
                userInfo: response.data,
                error: ''
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })

        

    }


    render() { 
        const {
            userInfo: {
                name,
                imgSrc,
                namesfollowing
                
            },
        } = this.state;
     
      
        const namesfollowingt = namesfollowing.map(n => {return( <li>{n}</li>)  
         })
    
     

        return ( 
            <>
            <div className ="UserDetailsContainer">
                <div className ="UserInfoContainer">
                   <User imgSrc={imgSrc} name={name} title="Following" />
              
                </div>
                <ul>
                    {namesfollowingt}
                </ul>
               
              
            </div>
            </>
         );
    }
}
 
export default Following;