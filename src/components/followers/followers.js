import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from "../../constants";
import User from '../../components/home/user';
import { Link } from 'react-router-dom';
import '../following/following.css'


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
                
            }
        } = this.state;
     
        const namesfollowerst = namesfollowers.map(names=> {return( <div>
        <li className="following">{names}</li>
        </div>
        )
         })
        
     

        return ( 
            <>
            <div className ="UserDetailsContainer">
                <Link  className="userFigcaption" key={id} to={`/users/${id}`}>
                            <div className="back" key={id}> <h3>back</h3></div>
                </Link>
                <div className ="UserInfoContainer">
                   <User imgSrc={imgSrc} name={name} title ="Followers" />
                </div>
                <div className="generalContainerFollowers">
                <ul className="followingContainer">
                    {namesfollowerst}
                </ul>
                </div>
               
              
            </div>
            </>
         );
    }
}
 
export default Followers;