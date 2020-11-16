import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Sidebar from './Common/Sidebar';
//drawer import
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import * as AuthActions from '../store/actions/authActions';



const drawerWidth = 240;
const styles = theme => ({
    root : {
        display: 'flex'
    },
    toolbar : {
        paddingRight : 24,
        backgroundColor: '#222'
    },
    appBar : {
        zIndex : theme.zIndex.drawer + 1,
        transition : theme.transitions.create(['width', 'margin'],{
            easing : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen 

        }),
    },
    appBarShift : {
        marginLeft : drawerWidth,
        width : `calc(100% - ${drawerWidth}px)`,
        transition : theme.transitions.create(['width', 'margin'],{
            easing : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen 

        }),
    },
    appBarSpace : theme.mixins.toolbar,
    drawerPaper : {
        position : 'relative',
        whiteSpace: 'noWrap',
        width: drawerWidth,
        transition : theme.transitions.create('width', {
            easing : theme.transitions.sharp,
            duration : theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose : {
        overFlowX : 'hidden',
        width: theme.spacing(7),
        transition : theme.transitions.create('width', {
            easing : theme.transitions.sharp,
            duration : theme.transitions.duration.leavingScreen
        })
    },
    toolbarIcon : {
        display : 'flex',
        alignItems : 'center',
        justifyContent: 'Flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar

    },
    content : {
        flexGrow : 1,
        padding : theme.spacing.units * 3,
        height : '100vh',
        overflow : 'auto'


    }
})
class AdminWrapper extends Component{
    constructor(props){
        super();
         this.state = {
             open : true
         }
    }
handleDrawerOpen = (e)=> {
this.setState({open : true});
}
handleDrawerClose = (e) => {
    this.setState({open : false});
    }
    render(){
        const {classes} = this.props;
        return(
        <div id="admin-page" className= {classes.root}>
           <AppBar className= {classNames(classes.appBar, this.state.open && classes.appBarShift)}>
               <Toolbar className={classes.toolbar}>
                   <IconButton onClick={this.handleDrawerOpen}>
                       <MenuIcon style={{color:"white"}}/>
                   </IconButton>              
                    <Typography 
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap>Admin</Typography>
                      
                        <Button 
                        variant="contained" 
                        color="primary" 
                        component="span" 
                        style={{left: '1000px', backgroundColor:'#222'}}
                        onClick={e =>{
                            this.props.logout();
                        }}
                        >
                            LogOut
                        </Button>
               </Toolbar>
           </AppBar>
           <Drawer
           classes= {{ 
               paper : classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)}
            } 
           variant="permanent"
           open={true}>
               <div className={classes.toolbarIcon}>
                   <IconButton onClick={this.handleDrawerClose}>
                       <ChevronLeftIcon/>
                   </IconButton>

               </div>
               <Divider/>
              <Sidebar />
           </Drawer>
           
           <main className={classes.content} >
           <div className={classes.appBarSpace}/>
                {this.props.children}
           </main>
            
        </div>
        )
    };
}

const mapStateToProps = state =>({
    ...state.auth
 })
 const mapDispatchToProps = dispatch => ({
   logout: () => {
     dispatch(AuthActions.logout());
   }
 })
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(AdminWrapper));