import React, {Component} from 'react';
import UserList from "../../pages/home/userList"

class Home extends Component {
    render (){
        return (
            <div className= "Home">
                <UserList/>
            </div>
        )
    }
}

export default Home;