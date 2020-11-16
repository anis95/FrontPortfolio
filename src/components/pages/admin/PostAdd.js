import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Fields from '../../Common/Fields';
import '../../../assets/css/style.css';
import * as AdminActions from '../../../store/actions/adminActions';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';
import API from '../../../utils/api';

/* global $ */

const field = [

    {name:'title', elementName:'input', type:'text', placeholder:'Title of the post'},
    {name:'content', elementName:'textarea', type:'textarea', placeholder:'content'}
    
]



class PostAdd extends Component{
 
    componentDidMount(props,state) {
       if(this.props.match.params.view === 'edit' && this.props.match.params.id){
            this.props.getSinglePost(this.props.match.params.id, this.props.auth.token);
        }
        
    }
    uploadImage = (e) => {
        const data = new FormData();
        data.append('file', e.target.files[0], new Date().getTime().toString() + e.target.files[0].name);
        this.props.uploadImage(data, this.props.auth.token, this.props.admin.post.id, this.props.auth.user.userId)
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
                                            <h2><strong>ADD Posts</strong></h2>
                                        </div>
                                        :
                                        <div className="section-heading text-center">
                                            <h2><strong>Edit Posts</strong></h2>
                                        </div>
                                        }
                                    </div>

                                    <div className="col-md-7 mb-5 mb-md-0">
                                        <form onSubmit={e=>{
                                            this.props.handleSubmit();
                                        }} className="site-form" id="login-forms-post">
                                        
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
                                   <div id="buttonSave">
                                    {this.props.admin.post.PostImage ?
                                        this.props.admin.post.PostImage.length > 0 ?
                                        <img src={API.makeFileURL(this.props.admin.post.PostImage[0].url, this.props.auth.token)} id="PostImage"/>
                                        : null
                                        : null}
                                    
                                    <Button 
                                        variant="contained"
                                        color="primary"
                                        onClick={ e => {
                                                $('.MyFile').trigger('click');
                                        }}
                                    ><ImageIcon/>Upload Post Image</Button>
                                    </div>
                                    <input type="file" style={{display: 'none'}} className="MyFile" onChange={this.uploadImage} />
                                    <div id='buttonAddEdit'>
                                    {this.props.match.params.view === 'add' ?
                                    <div className="form-group">
                                    <input type="submit" className="btn btn-primary  px-4 py-3" value="ADD" id="postAdd"/>
                                    </div>	
                                    :
                                    <div className="form-group">
                                    <input type="submit" className="btn btn-primary  px-4 py-3" value="Edit" id="postEdit"/>
                                    </div>	
                                    }
                                    </div>
                                   		    
                                        
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
 
    ADDPost: (post,token) => {
         dispatch(AdminActions.ADDPost(post,token));
     },
    UpdatePost:(post, token) => {
        dispatch(AdminActions.UpdatePost(post,token));
     },
    getSinglePost:(id, token) => {
         dispatch(AdminActions.getSinglePost(id,token));
     },
     uploadImage: (data, token, postId, userId) => {
        dispatch(AdminActions.uploadImage(data, token, postId, userId));
    }
    
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
mapPropsToValues: (props) =>({
    title: props.admin.post.title || '',
    content: props.admin.post.content || '',
    createdAt: props.admin.post.createdAt || ''
}),
validationSchema: Yup.object().shape({
    title: Yup.string().required('societe is Required'),
    content: Yup.string().required('')
}),
handleSubmit: (values, {setSubmitting, props})=>{
   if (props.match.params.view === 'edit') {
        const post = {
            ...values,
            id : props.match.params.id 
        }
        props.UpdatePost(post, props.auth.token);
    } else {
        props.ADDPost(values, props.auth.token);
    }

}

})(PostAdd)));