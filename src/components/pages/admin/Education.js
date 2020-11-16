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
    {label: 'Diplome', name:'diplome'},
    {label: 'Faculté', name:'faculty'},
    {label: 'Date Debut', name:'date_debut'},
    {label: 'Date Fin', name:'date_fin'}
]
const styles = theme => ({
    fab : {
        position : 'fixed',
        bottom: '50px',
        right: '50px'

    }
})
class Education extends Component{
    componentDidMount(){
        this.props.getEducation(this.props.auth.token);
    }
     render(){
         const education = this.props.admin.educations;
         const {classes} = this.props;
         return(
             <div>
                       <h1>Educations</h1>
            <TableView
                columns = {columns}
                rows = {education} 
                />
            <Fab component={RouterLink} to="/admin/education/add" color="secondary" aria-label="Add" className={classes.fab}>
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
    getEducation: (token) => {
        dispatch(AdminActions.getEducation(token));
    }
}
}
export default connect(
mapStateToProps,
mapDispatchToProps
)(withStyles(styles)(Education));