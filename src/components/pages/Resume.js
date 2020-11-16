import React, {Component} from 'react';
import ExperienceAccueil from '../Common/ExperienceAccueil';
import EducationAccueil from '../Common/EducationAccueil';
import {connect} from 'react-redux';
import * as SiteActions from '../../store/actions/siteActions';
class Resume extends Component{
    componentDidMount(state, props){
        this.props.getEducation(this.props.auth.token);
        this.props.getExperience(this.props.auth.token);
    }
    render(){
        return(
            <div style={{paddingTop: '3vh', position:'relative'}}>
                <section className="site-section " id="section-resume" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <div className="section-heading text-center" >
                                    <h2>My <strong>Resume</strong></h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="mb-5">Education</h2>
                                {
                                this.props.site.educations?
                                this.props.site.educations.length > 0 ?
                                 this.props.site.educations.map((edu,i)=>{
                                    return (<EducationAccueil
                                            education={edu}
                                            key={i}
                                    />)
                                })
                                :null
                                :null  

                                }
                            </div>
                            <div className="col-md-6">


                                <h2 className="mb-5">Experience</h2>
                                  { 
                                    this.props.site.experiences ?
                                      this.props.site.experiences.length > 0 ?
                                        this.props.site.experiences.map((exp,k)=>{
                                            return (
                                                <ExperienceAccueil
                                                    experience={exp}
                                                    key={k}
                                                />
                                            )
                                        })
                                        :null
                                        :null
                                  }
                                    


                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        auth : state.auth,
        site: state.site
    }
}
const mapDispatchToProps = dispatch=>({
  getEducation:(token)=>{
    dispatch(SiteActions.getEducation(token));
  },
  getExperience:(token)=>{
      dispatch(SiteActions.getExperience(token));
  }
})
export default connect(
mapStateToProps,
mapDispatchToProps
)(Resume);