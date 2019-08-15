
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from "../../constants";
import User from '../../components/home/user';
import { Link } from 'react-router-dom';
import './following.css'


class Following extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            userInfo: {
                name: "",
                imgSrc: "",
                namesfollowing:[]

            },
            error: '',
           
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
                namesfollowing,
                id
                
            }
        } = this.state;
     
        const namesfollowingt = namesfollowing.map(names=> {return( 
        <li className="following">{names}<div className="button" >Unfollow</div></li>
        
        )
         })
        
     

        return ( 
            <>
            <div className ="UserDetailsContainer">
                <Link  className="userFigcaption" key={id} to={`/users/${id}`}>
                            <div className="back" key={id}> <h3>back</h3></div>
                </Link>
                <div className ="UserInfoContainer">
                   <User imgSrc={imgSrc} name={name} title ="Following" />
                </div>
                <ul className="followingContainer">
                    {namesfollowingt}
                </ul>
               
              
            </div>
            </>
         );
    }
}
 
export default Following;