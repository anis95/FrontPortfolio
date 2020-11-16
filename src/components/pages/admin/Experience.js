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
    {label: 'Societe', name:'societe'},
    {label: 'Date', name:'date'},
    {label: 'Mission', name:'mission'},
    {label: 'Technologie', name:'technologie'}
]
const styles = theme => ({
    fab : {
        position : 'fixed',
        bottom: '50px',
        right: '50px'

    }
})
class Experience extends Component{
    componentDidMount(){
       this.props.getExperience(this.props.auth.token);
    }
     render(){
         const experience = this.props.admin.experiences;
         const {classes} = this.props;
         return(
             <div>
            <h1>Experience</h1>
            <TableView
                columns = {columns}
                rows = {experience} 
                />
            <Fab component={RouterLink} to="/admin/experience/add" color="secondary" aria-label="Add" className={classes.fab}>
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
    getExperience: (token) => {
        dispatch(AdminActions.getExperience(token));
    }
}
}
export default connect(
mapStateToProps,
mapDispatchToProps
)(withStyles(styles)(Experience));