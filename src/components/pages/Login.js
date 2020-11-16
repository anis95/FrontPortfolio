import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Fields from '../Common/Fields';
import '../../assets/css/style.css';
import * as AuthActions from '../../store/actions/authActions';

const field = [

    {name:'email', elementName:'input', type:'email', placeholder:'Your Email'},
	{name:'password', elementName:'input', type:'password', placeholder:'Your Password'}
]
class Login extends Component{
    render(){
        return(
        
                   
                            <section className="site-section" id="section-contact">
                                <div className="container">
                                    <div className="row">
                                    <div className="col-md-12 mb-5">
                                        <div className="section-heading text-center">
                                            <h2><strong>Admin</strong></h2>
                                        </div>
                                    </div>

                                    <div className="col-md-7 mb-5 mb-md-0">
                                        <form onSubmit={e=>{
                                            e.preventDefault();
                                            this.props.Login(this.props.values.email,this.props.values.password);
                                        }} className="site-form" id="login-forms">
                                            <h3 className="mb-5">Login</h3>
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
                                    <div className="form-group">
                                    <input type="submit" className="btn btn-primary  px-4 py-3" value="Login"/>
                                    </div>				    
                                        
                                </form>
                            </div>
                        
                        </div>
                    </div>
                </section>
            
    
        );
    }
}

const mapStateToProps = state =>{
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
 return {
     Login :(email, pass) => {
         dispatch(AuthActions.login(email,pass));
     }} 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
mapPropsToValues: () =>({
    email:'',
    password: ''
}),
validationSchema: Yup.object().shape({
    email: Yup.string().email('you must give us your email').required('Email is Required'),
    password: Yup.string().required('You need to enter your password')
}),
handleSubmit: (values, {setSubmitting})=>{
    console.log(values);
}

})(Login));