import React, { Component } from 'react';
import  AppNavBar from '../../pages/navBar/appNavbar';

class Navbar extends Component {
    render() {
        let links = [
            { label: 'Following', link: '/users/:id/following' },
            { label: 'Followers', link: '/users/:id/followers' },
            { label: 'Find new friends', link: '/users/:id/newfriends' },
        ];

        return (
            <div className="container center">
            <AppNavBar links={links}/>
            </div>
        );
        }
    }


export default Navbar;
