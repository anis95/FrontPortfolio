import React, {Component} from 'react';

class ExperienceAccueil extends Component{
    render(){
        return(
 
                <div className="resume-item mb-4">
                        <span className="date"><span className="icon-calendar"></span> {this.props.experience.date}</span>
                        <h3>{this.props.experience.societe}</h3>
                        <p>{this.props.experience.mission}</p>
                        <p>{this.props.experience.technologie}</p>
                       
                </div>
        
        )
    }
}
export default ExperienceAccueil;