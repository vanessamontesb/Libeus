import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from "../../constants";
import { Link } from 'react-router-dom';
import '../../pages/home/user.css'
import '../following/following.css'


class NewFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            userInfo: {
                name: "",
                imgSrc: "",
                otherUsers:[]

            },
            error: '',
            filterText: "",
            currentPage: 1,
            todosPerPage: 8
        }
   
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount = () => {
        const { match: { params: { id } } } = this.props;
        axios.get(`${API_URL}/newfriends/${id}`)
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

    handleClick(event) {
        this.setState({
        currentPage: Number(event.target.id)
        });
    }

    handleTextChange = (e, keyText) => {
        const value = e.target.value;
        this.setState({ [keyText]: value })
    }


    render() { 
        const {
            userInfo: {
                name,
                otherUsers,
                id
                
            },
            filterText,
            currentPage, 
            todosPerPage
        } = this.state;
     
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const otherUserst = otherUsers.map(names => {return( {names})})
        const filteredUsers = otherUsers.filter(user => user.includes(filterText));
        const currentTodos = filteredUsers.slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(otherUserst.length / todosPerPage); i++) {
        pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
        return (
        <li className="paginationNumber"
        key={number}
        id={number}
        onClick={this.handleClick}
        >
             {number}
        </li>
        );
        });
    
     

        return ( 
            <>
            <div className ="UserDetailsContainer">
                <Link  className="userFigcaption" key={id} to={`/users/${id}`}>
                    <div className="back" key={id}> <h3>back</h3></div>
                </Link>
                <header className ="header">
                     <h2>{name}</h2>
                 </header>
                <div className="searchBar">
                    <div className ="search"><i className="fas fa-search"></i>
                    </div>
                    <div className="filterContainer">
            
                            <input 
                                onChange={(e) => this.handleTextChange(e, "filterText")}
                                placeholder="New friend"
                                className="filter-field"
                                type="text"
                                value={filterText}

                            />
                    </div>
                </div>
               
               
                <ul>
                    {currentTodos.map(names => {return( 
                       <div className="generalContainer">
                        <ul className="followingContainer">
                        <li className="following">{names}
                        <div className="buttonsContainer">
                        <div className="button" >Unfollow|</div>
                        <div className="button" >Follow</div>
                        </div>
                        
                        </li>
                        </ul>
                       </div> 
                      
                    )})}
                </ul>
                <ul className="paginationContainer">
                  {renderPageNumbers}
                </ul>
               
              
            </div>
            </>
         );
    }
}
 
export default  NewFriends;