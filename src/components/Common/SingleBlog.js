import React, {Component} from 'react';
import API from '../../utils/api';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as SiteActions from '../../store/actions/siteActions';
class SinglePortfolio extends Component{
    render(){
        return(
		
            
            
				<div className="col-sm-6 col-lg-4 mb-4">
					<div className="blog-entry">
					<Link 
						className="portfolio-link" 
						to={`/project/${this.props.post.title}`}
						onClick={e => this.props.setPostData(this.props.post)}
					>			
					{this.props.post.PostImage ?
										this.props.post.PostImage.length > 0 ?
										<img style={{width: '100%'}} className="iamge img-fluid" src={API.makeFileURL(this.props.post.PostImage[0].thumbnail, null)} alt="" />
								
										: null
										: null}
					</Link>	
						<div className="blog-entry-text">
							<h3><a href="#">{this.props.post.title}</a></h3>
							<p className="mb-4">{this.props.post.content}</p>

							<div className="meta">
							
							</div>
						</div>
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






                  