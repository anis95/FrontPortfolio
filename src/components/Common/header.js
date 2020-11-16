import React, {Component} from 'react';
class header extends Component {
    render(){
        return(
            <div>
                <section className="site-hero" style={{ backgroundImage: `url(${this.props.image})` }} id="section-home" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row intro-text align-items-center justify-content-center">
                            <div className="col-md-10 text-center pt-5">

                                <h1 className="site-heading site-animate">{this.props.hello}<strong className="d-block">{this.props.name}</strong></h1>
                                <strong className="d-block text-white text-uppercase letter-spacing">{this.props.resume}</strong>

                            </div>
                        </div>
                    </div>
	            </section> 
            </div>
        )
    }
}
export default header;