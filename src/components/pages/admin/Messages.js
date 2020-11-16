import React, {Component} from 'react';
import TableView from '../../Common/TableView';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import * as SiteActions from '../../../store/actions/siteActions';


const columns = [
    {label: 'ID', name:'id'},
    {label: 'Name', name:'name'},
    {label: 'Email', name:'email'},
    {label: 'Message', name:'message'}
]
const styles = theme => ({
    fab : {
        position : 'fixed',
        bottom: '50px',
        right: '50px'

    }
})
class Messages extends Component{
    componentDidMount(){
        this.props.getMessage(this.props.auth.token);
    }
     render(){
         const message = this.props.site.contacts;

         return(
             <div>
                       <h1>Messages</h1>
            <TableView
                columns = {columns}
                rows = {message} 
                />
            
           
            </div>
         );
     }
}

const mapStateToProps = state => {
    return {
        auth : state.auth,
        admin : state.admin,
        site: state.site
    }
}
const mapDispatchToProps = dispatch => {
return {
    getMessage: (token) => {
        dispatch(SiteActions.getMessage(token));
    }
}
}
export default connect(
mapStateToProps,
mapDispatchToProps
)(withStyles(styles)(Messages));