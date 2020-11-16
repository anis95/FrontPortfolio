import React, {Component} from 'react';

class EducationAccueil extends Component{
    render(){
        return(
            
                 <div className="resume-item mb-4">
                        <span className="date">
                        <span className="icon-calendar"></span> {this.props.education.date_debut}-{this.props.education.date_fin}</span>
                        <h3>{this.props.education.diplome}</h3>
                        <p>{this.props.education.faculty}</p>
                        
                  </div>
       
        )
    }
}
export default EducationAccueil;