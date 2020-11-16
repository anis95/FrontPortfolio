import React, {Component} from 'react';
import API from '../../utils/api';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as SiteActions from '../../store/actions/siteActions';
class SinglePortfolio extends Component{
    render(){
        return(
          
                  <div className="single-portfolio col-sm-4 all mockup">
				       <Link 
							className="portfolio-link" 
							to={`/post/${this.props.post.title}`}
							onClick={e => this.props.setPostData(this.props.post)}
							>
							<div className="relative">
								<div className="thumb">
									<div className="overlay overlay-bg"></div>
									{this.props.post.PostImage ?
										this.props.post.PostImage.length > 0 ?
										<img style={{position: 'relative',width: '100%'}} className="image img-fluid" src={API.makeFileURL(this.props.post.PostImage[0].thumbnail, null)} alt="" />
								
										: null
										: null}
						
								</div>
															
							</div>
						</Link>
						<div className="p-inner">
							<h4>{this.props.post.title}</h4>
							<div className="cat">{this.props.post.content}</div>
						</div>                                         
					</div> 
          
        )
    }
}
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    setPostData: (post) => {
        dispatch(SiteActions.setPostData(post));
    }
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SinglePortfolio);






                  