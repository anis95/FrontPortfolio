import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component{
    openInNewTab(url) {
        let win = window.open(url, '_blank');
        win.focus();
      }
    render(){
        return(
            <div>
                	<footer className="site-footer">
                            <div className="container">

                                <div className="row mb-5">
                                    <p className="col-12 text-center">
                                    
                                        Copyright Anis Abaki All rights reserved 
                                  
                                    </p>
                                </div>
                                
                                <div className="row mb-5">
                                    <div className="col-md-12 text-center">
                                        <p>
                                            <Link onClick={e=>this.openInNewTab('https://www.facebook.com/anis.abaki')}  className="social-item"><span className="icon-facebook2"></span></Link>                                
                                            <Link onClick={e=>this.openInNewTab('https://www.instagram.com/abaki.anis/')}  className="social-item"><span className="icon-instagram2"></span></Link>  
                                            <Link onClick={e=>this.openInNewTab('https://www.linkedin.com/in/anis-abaki-0ba184138/')}  className="social-item"><span className="icon-linkedin2"></span></Link>
                                   
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                	</footer>
            </div>
        );
    }
}
export default Footer;