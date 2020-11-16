import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import  TableHead from '@material-ui/core/TableHead';
import  TableRow from '@material-ui/core/TableRow';
import  TableCell from '@material-ui/core/TableCell';
import  Paper from '@material-ui/core/Paper';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class TableView extends Component {
    
    render(){
        const {rows, columns} = this.props;
        return(
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns ? columns.map((col, i) =>{
                                return (
                                <TableCell key={i}> {col.label}</TableCell>
                                )
                            }): null}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { rows ? 
                            rows.map((row, i) => {
                                return(
                                    <TableRow key={i}>
                                       
                                    {
                                        columns.map((col, colIndex)=> {
                                            return (
                                                <TableCell key={colIndex}>
                                                    
                                                    {
                                                    col.name === 'id' ?
                                                    this.props.match.path === '/admin/education' ?
                                                    <Link                                                   
                                                    to={`/admin/education/edit/${row[col.name]}`}  
                                                    component={RouterLink}>{row[col.name]}
                                                    </Link>
                                                    :
                                                    this.props.match.path === '/admin/experience' ?
                                                    <Link                                                   
                                                    to={`/admin/experience/edit/${row[col.name]}`}  
                                                    component={RouterLink}>{row[col.name]}
                                                    </Link>
                                                    :
                                                    this.props.match.path === '/admin/post'?
                                                    <Link                                                   
                                                    to={`/admin/post/edit/${row[col.name]}`}  
                                                    component={RouterLink}>{row[col.name]}
                                                    </Link>
                                                    :
                                                    <Link                                                                                                        
                                                     component={RouterLink}>{row[col.name]}
                                                    </Link>
                                                     :row[col.name]
                                                      
                                                    }
                                                   
                                                </TableCell>
                                            )
                                    })
                                    }
                                </TableRow>
                                )                            
                                
                            })
                            : null
                        }
                    </TableBody>
                </Table>
            </Paper>
        ) 
    }
}

const mapStateToProps = state =>{
    return{
        auth: state.auth,
        admin: state.admin
    }
}

export default withRouter(connect(
mapStateToProps
)(TableView));