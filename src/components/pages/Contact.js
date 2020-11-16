import React, {Component} from 'react';
import '../../assets/css/style.css';
import {withFormik} from 'formik';
import {connect} from 'react-redux'
import * as Yup from 'yup';
import Fields from '../Common/Fields';
import * as SiteActions from '../../store/actions/siteActions';
const field = {
	sections :[
[
	{name:'name', elementName:'input', type:'text', placeholder:'Your name'},
	{name:'email', elementName:'input', type:'email', placeholder:'Your Email'}
],
[
	{name: 'message',elementName:'textarea',  type: 'textarea', placeholder: 'Write a message'}
	]
]
}
class Contact extends Component{
	
    render(){
        return(
            <div>
                <section className="site-section" id="section-contact">
					<div className="container">
						<div className="row">
				<div className="col-md-12 mb-5">
					<div className="section-heading text-center">
						<h2>Get <strong>In Touch</strong></h2>
					</div>
				</div>

				<div className="col-md-7 mb-5 mb-md-0">
					<form onSubmit={e=>{
                                            this.props.handleSubmit();
                                        }}  className="site-form">
						<h3 className="mb-5">Get In Touch</h3>
						{ field.sections.map((section , sectionIndex)=> {
                        return <div  key={sectionIndex}>
                            {
                                section.map((field,i)=>{
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
                                })
                            }
                        </div>
					
                    }
                    
                  )}
						<div className="form-group">
						<input type="submit" className="btn btn-primary  px-4 py-3" value="Send Message"/>
						</div>				    
							
					</form>
				</div>
				<div className="col-md-5 pl-md-5">
					<h3 className="mb-5">My Contact Details</h3>
					<ul className="site-contact-details" id='lien'>
						<li>
							<span className="text-uppercase">Email</span>
							abaki.anis@gmail.com
						</li>
						<li>
							<span className="text-uppercase">Phone</span>
							+216 52 987 486
						</li>
						<li>
							<span className="text-uppercase">Address</span>
							Béni khiar, Nabeul
						</li>
					</ul>
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
		site : state.site
	}
}
const mapDispatchToProps = dispatch => {
	return {
		postMessage:(msg) =>{
			console.log(msg);
			dispatch(SiteActions.postMessage(msg));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withFormik({
mapPropsToValues: () =>({
	name:'',
	email:'',
	message: ''
}),
validationSchema: Yup.object().shape({
	name: Yup.string().min(3,'your name is longer than that').required('You must give us your name'),
	email: Yup.string().email('your need to give us a valid email').required('You must give us your email'),
	message : Yup.string().required('message are Required')
}),
handleSubmit: (values, {setSubmitting, props})=>{
	console.log(values);
	props.postMessage(values);
}
})(Contact));