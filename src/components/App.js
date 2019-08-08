import React, {Component} from 'react';
import Header from './header/header'
import Footer from './footer/footer';
import Content from './content/content';
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes ={
    children:PropTypes.object.isRequired
  };
  
  render (){
    const {children}=this.props;
    return (
      <>
      <Header nameApp= {<h1> Libeus</h1>} />
      <Content body = {children}/>
      <Footer copyright=" &copy; Libeus | Conecting peopple"/>
      </>
     
    );
  }
}

export default App;
