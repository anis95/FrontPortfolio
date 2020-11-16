import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Fields from '../../Common/Fields';
import '../../../assets/css/style.css';
import * as AdminActions from '../../../store/actions/adminActions';
import {withRouter} from 'react-router-dom';

const field = [

    {name:'diplome', elementName:'input', type:'text', placeholder:'Your diplome name'},
    {name:'faculty', elementName:'input', type:'text', placeholder:'Your faculty name'},
    {name:'date_debut', elementName:'input', type:'text', placeholder:'date de debut'},
    {name:'date_fin', elementName:'input', type:'text', placeholder:'date fin'}
]

class AddEducation extends Component{
 
    componentDidMount(props, state){
        if(this.props.match.params.view === 'edit' && this.props.match.params.id){
            this.props.getSingleEducation(this.props.match.params.id, this.props.auth.token);
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
                                    { this.props.match.params.view === 'add' ?
                                        <div className="section-heading text-center">
                                             <h2><strong>ADD Education</strong></h2>                                      
                                        </div>
                                        :
                                        <div className="section-heading text-center">
                                        <h2><strong>Edit Education</strong></h2>                                      
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
        
    ADDEducation :(post,token) => {
         dispatch(AdminActions.ADDEducation(post,token));
     },
    UpdateEducation: (post,token) => {
        dispatch(AdminActions.UpdateEducation(post,token));
    },
    getSingleEducation: (id, token) => {
        dispatch(AdminActions.getSingleEducation(id, token));
    }, 
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
mapPropsToValues: (props) =>({
    diplome: props.admin.education.diplome || '' ,
    faculty: props.admin.education.faculty || '',
    date_debut: props.admin.education.date_debut || '',
    date_fin: props.admin.education.date_fin || ''
}),
validationSchema: Yup.object().shape({
    diplome: Yup.string().required('Diplome is Required'),
    faculty: Yup.string().min(5,'minimum 10 letters').required('Faculty name is Required'),
    date_debut: Yup.string().required('Date de Debut is Required'),
    date_fin: Yup.string().required('Date Fin is Required')
}),
handleSubmit: (values, {setSubmitting, props})=>{
    if (props.match.params.view === 'edit') {
        const post = {
            ...values,
            id : props.match.params.id 
        }
        props.UpdateEducation(post, props.auth.token);
    } else {
    props.ADDEducation(values, props.auth.token)
    }
}

})(AddEducation)));