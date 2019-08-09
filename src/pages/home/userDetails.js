import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from "../../constants";
import User from '../../components/home/user';
import NavBar from '../../components/navBar/navBar'


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
        axios.get(`${API_URL}/users/${id}`)
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
            }
        } = this.state;

        return ( 
            <>
            <div className ="UserDetailsContainer">
                <div className ="UserInfoContainer">
                   <User imgSrc={imgSrc} name={name} />
                </div>
                <NavBar/>
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