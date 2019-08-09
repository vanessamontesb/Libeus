import React, { Component } from 'react';
import '../../components/navBar/navBar.css';
import { Link } from 'react-router-dom';

class AppNavBar extends Component {
    constructor() {
        super();
        this.state = {
            showForm: false
        };
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <li className="menu__link menu__link--active" href={link.link}>{link.label}</li>
            ) : (
                <li className="menu__link" href={link.link}>{link.label}</li>
            );

            return (
                <Link key={index} className="menu__list-item"  to={link.link}>{linkMarkup}</Link>
            );
        });

        return (
            <div className="nav-container">
            <nav className="menu">

            <div className="menu__right">
                <ul className="menu__list">
                    {linksMarkup}

                </ul>
            </div>
            </nav>
            </div>
        );
    }
}

export default AppNavBar;


        