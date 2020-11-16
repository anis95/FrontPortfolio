import React , {Component} from 'react';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import {connect} from 'react-redux';
//Pages
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import SinglePost from './components/pages/SinglePost';
//admin Page
import AdminWrapper from './components/AdminWrapper';
import Dashboard from './components/pages/admin/Dashboard';
import AddEducation from './components/pages/admin/AddEducation';
import Education from './components/pages/admin/Education';
import Experience from './components/pages/admin/Experience';
import AddExperience from './components/pages/admin/AddExperience';
import Posts from './components/pages/admin/Posts';
import PostAdd from './components/pages/admin/PostAdd';
import Message from './components/pages/admin/Messages';
import Blog from './components/pages/Blog';


class App extends Component {

 render(){
  return (
    <BrowserRouter>

        <Route
          exact={true}
          path="/admin/experience"
          render= {props => {
            return (
            <div>
                {
                this.props.auth.token ? 
                  <AdminWrapper>
                    <Experience/>
                  </AdminWrapper>       
                :     
                    <Login />              
                }
            </div>
                
                
          
            )         
        }
        }
    />

        <Route
          exact={true}
          path="/admin/experience/:view"
          render= {props => {
            return (
            <div>
                {
                this.props.auth.token ? 
                  <AdminWrapper>
                    <AddExperience/>
                  </AdminWrapper>       
                :     
                    <Login />              
                }
            </div>
      
                  )         
              }
              }
          />

        <Route
          exact={true}
          path="/admin/experience/:view/:id"
          render= {props => {
            return (
            <div>
                {
                this.props.auth.token ? 
                  <AdminWrapper>
                    <AddExperience/>
                  </AdminWrapper>       
                :     
                    <Login />              
                }
            </div>
      
                  )         
              }
              }
          />

      <Route 
            exact={true}
            path="/admin/education"
            render= {props => {
              return (
              <div>
                  {
                  this.props.auth.token ? 
                    <AdminWrapper>
                      <Education/>
                    </AdminWrapper>       
                  :     
                      <Login />              
                  }
              </div>
                  
                  
            
              )         
          }
          }
       />

          <Route 
            exact={true}
            path="/admin/education/:view/:id"
            render= {props => {
              return (
              <div>
                  {
                  this.props.auth.token ? 
                    <AdminWrapper>
                      <AddEducation/>
                    </AdminWrapper>       
                  :     
                      <Login />              
                  }
              </div>
                  
                  
            
              )         
          }
          }
          />

          <Route 
              exact={true}
              path="/admin/education/:view"
              render= {props => {
                return (
                <div>
                    {
                    this.props.auth.token ? 
                      <AdminWrapper>
                        <AddEducation/>
                      </AdminWrapper>       
                    :     
                        <Login />              
                    }
                </div>
                    
                    
              
                )         
            }
            }
          />

        <Route 
            exact={true}
            path="/admin/post"
            render= {props => {
              return (
              <div>
                  {
                  this.props.auth.token ? 
                    <AdminWrapper>
                      <Posts/>
                    </AdminWrapper>       
                  :     
                      <Login />              
                  }
              </div>
                  
                  
            
              )         
          }
          }
       />

        <Route 
              exact={true}
              path="/admin/post/:view"
              render= {props => {
                return (
                <div>
                    {
                    this.props.auth.token ? 
                      <AdminWrapper>
                        <PostAdd/>
                      </AdminWrapper>       
                    :     
                        <Login />              
                    }
                </div>
                    
                    
              
                )         
            }
            }
          />

          <Route 
              exact={true}
              path="/admin/post/:view/:id"
              render= {props => {
                return (
                <div>
                    {
                    this.props.auth.token ? 
                      <AdminWrapper>
                        <PostAdd/>
                      </AdminWrapper>       
                    :     
                        <Login />              
                    }
                </div>
                    
                    
              
                )         
            }
            }
          />

        <Route
            exact={true}
            path="/admin/message"
            render= {props => {
              return (
              <div>
                  {
                  this.props.auth.token ? 
                    <AdminWrapper>
                      <Message/>
                    </AdminWrapper>       
                  :     
                      <Login />              
                  }
              </div>
                  
                  
            
              )         
          }
          }
      />

      <Route
    exact={true}
    path="/admin"
    render= {props => {
      return (
       <div>
          {
          this.props.auth.token ? 
            <AdminWrapper>
              <Dashboard/>
            </AdminWrapper>       
          :     
              <Login />              
          }
       </div>
          
          
     
      )         
  }
  }
    />


      <Route
      exact={true}
      path="/"
      render={props =>(
        <PageWrapper>
            <Home/>
        </PageWrapper>

  )}
      />

    <Route
      path="/projects"
      exact={true}
      render={props =>(
        <PageWrapper>
          <Blog {...props}/>
        </PageWrapper>
      )}
      />

      <Route
        path="/project/:slug"
        exact={true}
        render ={props =>(
            <PageWrapper>
                <SinglePost {...props}/>
            </PageWrapper>
        )}
        />

      <Route
      path="/resume"
      exact={true}
      render={props =>(
        <PageWrapper>
          <Resume {...props}/>
        </PageWrapper>
      )}
      />

    <Route
      path="/about"
      exact={true}
      render={props =>(
        <PageWrapper>
          <About {...props}/>
        </PageWrapper>
      )}
      />

     <Route
      path="/contact"
      exact={true}
      render={props =>(
        <PageWrapper>
          <Contact {...props}/>
        </PageWrapper>
      )}
      />

    </BrowserRouter>
  );
}
}

const mapStateToProps = state =>({
  auth: state.auth
})
const mapDispatchToProps= dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
