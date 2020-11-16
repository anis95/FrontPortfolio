import React, {Component} from 'react';
import image1 from '../../assets/image/anis.jpg';
import {Link} from 'react-router-dom';
 class About extends Component {
    render(){
        return(
            <div>
                <section className="site-section" id="section-about">
		              <div className="container">
			            <div className="row mb-5 align-items-center">
				           <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
					          <img src={image1} alt="Image placeholder" className="img-fluid"/>
				            </div>
				      <div className="col-lg-5 pl-lg-5">
					    <div className="section-heading">
						    <h2>About <strong>Me</strong></h2>
					     </div>
					          <p className="lead">Hi I am anis abaki, I am a computer engineer specializing in software engineering</p>
					          <p className="mb-5">Rigorous at work and
													rapid integration into the
													group. Passionate about
													new technologies. I
													working with technologies
													which affect near or far
													the web domain, I am Full
													Stack JS developer and I am
													particularly comfortable with
													ReactJS, PHP7 / Mysql and the
													Frameworks,
													loopbackJS, Symfony4.
													Quick learning all
													new concepts.
													Character traits: sociable,
													motivated, serious, punctual and
													dynamic.</p>

					     <p>
						      <a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
						     
							  <Link to="/files/CV-anis-abaki .pdf" target="_blank" className="btn btn-secondary px-4 py-2 btn-sm" download>Download CV</Link>
					    </p>
				        </div>
			          </div>

		            </div>
	              </section>
            </div>
        )
    }
 }
 export default About;