import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Fields from '../../Common/Fields';
import '../../../assets/css/style.css';
import * as AdminActions from '../../../store/actions/adminActions';
import {withRouter} from 'react-router-dom';


const field = [

    {name:'societe', elementName:'input', type:'text', placeholder:'societe name'},
    {name:'date', elementName:'input', type:'text', placeholder:'the date'},
    {name:'mission', elementName:'input', type:'text', placeholder:'mission'},
    {name:'technologie', elementName:'input', type:'text', placeholder:'technologie'}
]


class AddExperience extends Component{
   
    componentDidMount(props,state) {
        if(this.props.match.params.view === 'edit' && this.props.match.params.id){
            this.props.getSingleExperience(this.props.match.params.id, this.props.auth.token);
        }
    }
    render(){
        
        return(
        <div>
                    <div>
                            <section className="site-section" id="section-contact">
                                <div className="container">
                                    <div className="row">
                                    <div className="col-md-12 mb-5">
                                        {
                                            this.props.match.params.view === 'add' ?
                                        <div className="section-heading text-center">
                                            <h2><strong>ADD Experience</strong></h2>
                                        </div>
                                        :
                                        <div className="section-heading text-center">
                                            <h2><strong>Edit Experience</strong></h2>
                                        </div>
                                        }
                                    </div>

                                    <div className="col-md-7 mb-5 mb-md-0">
                                        <form onSubmit={e=>{
                                            this.props.handleSubmit();
                                        }} className="site-form" id="login-forms-education">
                                        
                                            { field.map((field , i)=> {
                                            
                                            
                                                        return <Fields
                                                                {...field} 
                                                                key={i}                                          
                                                                name={field.name}
                                                                value={this.props.values[field.name]}
                                                                onChange={this.props.handleChange}
                                                                onBlur={this.props.handleBlur}
                                                                touched={(this.props.touched[field.name])}
                                                                errors={this.props.errors[field.name]}
                                                            
                                                        />
                                                    
                                        
                                        }
                                        
                                    )}
                                    {this.props.match.params.view === 'add' ?
                                    <div className="form-group">
                                    <input type="submit" className="btn btn-primary  px-4 py-3" value="ADD"/>
                                    </div>	
                                    :
                                    <div className="form-group">
                                    <input type="submit" className="btn btn-primary  px-4 py-3" value="Edit"/>
                                    </div>	
                                    }
                                    			    
                                        
                                </form>
                            
                            </div>
                        
                        </div>
                    </div>
                </section>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        auth: state.auth,
        admin: state.admin
    }
}
const mapDispatchToProps = dispatch => ({
 
     ADDExperience: (exp,token) => {
         dispatch(AdminActions.ADDExperience(exp,token));
     },
     UpdateExperience:(exp, token) => {
        dispatch(AdminActions.UpdateExperience(exp,token));
     },
     getSingleExperience:(id, token) => {
         dispatch(AdminActions.getSingleExperience(id,token));
     }
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
mapPropsToValues: (props) =>({
    societe: props.admin.experience.societe || '',
    date: props.admin.experience.date || '',
    mission: props.admin.experience.mission || '',
    technologie: props.admin.experience.technologie || ''
}),
validationSchema: Yup.object().shape({
    societe: Yup.string().required('societe is Required'),
    date: Yup.string().required('date is Required'),
    mission: Yup.string().required('mission is Required'),
    technologie: Yup.string().required('technologie is Required')
}),
handleSubmit: (values, {setSubmitting, props})=>{
    if (props.match.params.view === 'edit') {
        const exp = {
            ...values,
            id : props.match.params.id 
        }
        props.UpdateExperience(exp, props.auth.token);
    } else {
        props.ADDExperience(values, props.auth.token);
    }
    
 

}

})(AddExperience)));