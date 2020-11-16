import React, {Component} from 'react';
import Header from '../Common/header';
import PageWrapper from '../PageWrapper';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';
import Footer from '../Common/Footer';
import image1 from '../../assets/image/anis.jpg';
import Blog from './Blog';
class Home extends Component {

    render(){
        return (
           <PageWrapper>
                <Header
                  image={image1}  
                  hello="Hello, i'm"
                  name="Abaki Anis"
                  resume="Welcome To my personnel web site"
                />
                <Blog/>            
                <Resume/>
                <About/>               
                <Contact/>
                <Footer/>
            </PageWrapper>
        )
    }
}
export default Home;