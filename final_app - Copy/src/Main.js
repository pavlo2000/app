import React, { Component } from 'react';
import fire from './Home/config/Fire';
import Context from './context'
import Loader from './Loader';
import MainList from './Home/Home'
import Home from './Home/Home';
class Main extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }
  
    logout() {
        fire.auth().signOut();
    }
        render() {
        return (
            <Context.Provider>
            <div className='wrapper'>
      
              {true && <Loader />}
              <h1>Welcome to Home</h1>
                  <button onClick={this.logout}>Logout</button>
                <Home />
            </div>
          </Context.Provider>
        );

    }

}

export default Main;