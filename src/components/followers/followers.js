
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from "../../constants";
import User from '../../components/home/user';
import { Link } from 'react-router-dom';


class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            userInfo: {
                name: "",
                imgSrc: "",
                namesfollowers:[]

            },
            error: '',
          
        }
    }

    componentDidMount = () => {
        const { match: { params: { id } } } = this.props;
        axios.get(`${API_URL}/followers/${id}`)
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
                namesfollowers,
                id
                
            },
           
        } = this.state;
     
      
        const namesfollowerst = namesfollowers.map(names => {return( <li>{names}</li>)  
         })

    
     

        return ( 
            <>
            <div className ="UserDetailsContainer">
                <Link  className="userFigcaption"  to={`/users/${id}`}>
                        <div> back|</div>
                </Link>
                <div className ="UserInfoContainer">
                   <User imgSrc={imgSrc} name={name} title="Followers" />
                </div>
                <ul>
                    {namesfollowerst}
                </ul>
               
               
              
            </div>
            </>
         );
    }
}
 
export default Followers;