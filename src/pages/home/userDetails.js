import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from "../../constants";
import User from '../../components/home/user';
import { Link } from 'react-router-dom';
import '../home/navBar.css'


class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            userInfo: {
                name: "",
                imgSrc: ""
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
                id,
            },
        } = this.state;

        return ( 
            <>
            <div className ="UserDetailsContainer">
                <div className ="UserInfoContainer">
                   <User imgSrc={imgSrc} name={name}/>
                </div>
                <div className="nav-container">
                    <div className="menu">
                        <Link  className="userFigcaption" key={id} to={`/`}>
                            <div key={id}> back|</div>
                        </Link>
                        <Link  className="userFigcaption"  to={`/following/${id}`}>
                            <div key={id}> Following</div>
                        </Link>
                        <Link  className="userFigcaption"  to={`/followers/${id}`}>
                            <div key={id}>Followers</div>
                        </Link>
                        <Link  className="userFigcaption" to={`/newfriends/${id}`}>
                            <div key={id}>newfriends</div>
                        </Link>
                    </div>
                </div>
                
               
                <div className= "message">
                    <h3>
                        Meet new peopple, new ideas and differents minds
                    </h3>
                </div>
            </div>
            </>
         );
    }
}
 
export default UserDetails;