import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from "../../constants"
import User from '../../components/home/user';
import './user.css'



class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {
                content: [],
                error: false
            },
            filterText: "",
         }
    }

    

    componentDidMount = () => {
        this.getUsers();

    }

    handleTextChange = (e, keyText) => {
        const value = e.target.value;
        this.setState({ [keyText]: value })
      }

     
    


    getUsers = () => {
        axios.get(`${API_URL}/users`)
        .then(response => {
            this.setState({
                users: {
                    content: response.data,
                    error: ''

                },
            })
        })

        .catch(error => {
            this.setState({
                prizes: {
                    error: error.message
                }
            })
        })
        

    }

    render() {
        const {
            users: {content, error},
            filterText,
        } = this.state;

        const filteredUsers = content.filter(user => user.name.includes(filterText));

        if (error) {
            return <div>Fetch Error: {error}</div>
        }

        return (
            <>
        <div className="searchBar">
            <div className ="search"><i class="fas fa-search"></i></div>
            <div className="filterContainer">
            
            <input 
                onChange={(e) => this.handleTextChange(e, "filterText")}
                placeholder="Search user"
                className="filter-field"
                type="text"
                value={filterText}
    
            />

            
            </div>
       
        </div>

        <div className ="userGrid">

            {filteredUsers.map(({ id, imgSrc, name,})  => (
                <Link  className="userFigcaption" key={id} to={`/users/${id}`}>
                     <User imgSrc={imgSrc} name={name}  />
                </Link>
            ))}
        </div>
        </>
        );
    }
}

export default UserList;

