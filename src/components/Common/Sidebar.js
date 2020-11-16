import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListIemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import MessageIcon from '@material-ui/icons/Message';
function ListItemLink(props) {
    return <ListItem button component={RouterLink} {...props}/>
}
class Sidebar extends Component{
    render(){
        return(
            <List>
                <ListItemLink to='/admin'>
                    
                <ListIemIcon>
                    <DashboardIcon/>
                </ListIemIcon>
                <ListItemText primary="Dashboard"/>
      
                </ListItemLink>

                <ListItemLink to="/admin/education">
  
                <ListIemIcon>
                    <AccountBalanceIcon/>
                </ListIemIcon>
                <ListItemText primary="Education"/>
         
                </ListItemLink>
                <ListItemLink to="/admin/experience">
  
                <ListIemIcon>
                    <FormatAlignJustifyIcon/>
                </ListIemIcon>
                <ListItemText primary="Experiences"/>

                </ListItemLink>

                <ListItemLink to="/admin/post">
                
                <ListIemIcon>
                    <FileCopyIcon/>
                </ListIemIcon>
                <ListItemText primary="Posts"/>
         
                </ListItemLink>

                <ListItemLink to="/admin/message">
  
                <ListIemIcon>
                    <MessageIcon/>
                </ListIemIcon>
                <ListItemText primary="Messages"/>

                </ListItemLink>
            </List>
        )
    }
}
export default Sidebar;