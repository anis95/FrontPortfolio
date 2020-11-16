import React, {Component} from 'react';
import TableView from '../../Common/TableView';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import * as AdminActions from '../../../store/actions/adminActions';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import {Link as RouterLink} from 'react-router-dom';

const columns = [
    {label: 'ID', name:'id'},
    {label: 'Title', name:'title'},
    {label: 'Content', name:'content'}
]
const styles = theme => ({
    fab : {
        position : 'fixed',
        bottom: '50px',
        right: '50px'

    }
})
class Posts extends Component{
    componentDidMount(){
       this.props.getPosts(this.props.auth.token);
    }
     render(){
         const post = this.props.admin.posts;
         const {classes} = this.props;
         return(
             <div>
            <h1>Posts</h1>
            <TableView
                columns = {columns}
                rows = {post} 
                />
            <Fab component={RouterLink} to="/admin/post/add" color="secondary" aria-label="Add" className={classes.fab}>
                <EditIcon/>
            </Fab>
           
            </div>
         );
     }
}

const mapStateToProps = state => {
    return {
        auth : state.auth,
        admin : state.admin
    }
}
const mapDispatchToProps = dispatch => {
return {
    getPosts: (token) => {
        dispatch(AdminActions.getPosts(token));
    }
}
}
export default connect(
mapStateToProps,
mapDispatchToProps
)(withStyles(styles)(Posts));