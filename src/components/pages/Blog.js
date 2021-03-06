import React, {Component} from 'react';
import SingleBlog from '../Common/SingleBlog';
import {connect} from 'react-redux';
import * as SiteActions from '../../store/actions/siteActions';
 class Portfolio extends Component {
	componentDidMount(){
        this.props.getPosts(0);
        this.props.getPostCount();
    }
    render(){
        return(
            <div>
                        <section className="site-section" id="section-blog">
                        <div className="container">
                            <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="section-heading text-center">
                                <h2>Featured <strong>Portfolio</strong></h2>
                            </div>
                       
                        <div className="filters">
                            <ul>
                                <li className="active" data-filter="*">Projects</li>
                            </ul>
                        </div>
                        </div>
                        </div>

                    <div className="row">
                    
                        {this.props.site.posts ?
                                        this.props.site.posts.length > 0 ?
                                            this.props.site.posts.map((post, i) => {
                                                return (
                                                    <SingleBlog
                                                        post={post}
                                                        key={i}
                                                    />
                                                )
                                            })
                                        : null
                                        : null}
                        
                    </div>

                    </div>
                   
                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="text-center">
                                                {this.props.site.postCount > this.props.site.posts.length ?
                                                    <button className="btn btn-default" onClick={e => {
                                                        this.props.getPosts(this.props.site.posts.length);
                                                }}>Load More</button>
                                            : 
                                            null
                                        }
                                    </div>
                                </div>
                        </div>
                
            </section>
            </div>
        )
    }
 }
const mapStateToProps = state => ({
    site: state.site
})

const mapDispatchToProps = dispatch => ({
    getPosts: (skip) => {
        dispatch(SiteActions.getPosts(skip));
    },
    getPostCount: () => {
        dispatch(SiteActions.getPostCount());
    }
})
 export default connect(
	 mapStateToProps,
	 mapDispatchToProps
 )(Portfolio);

