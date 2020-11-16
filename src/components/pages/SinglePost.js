import React, {Component} from 'react';
import Header from '../Common/header';
import {connect} from 'react-redux';
import API from '../../utils/api';
import * as SiteActions from '../../store/actions/siteActions';
import ReactPlayer from 'react-player';
class SinglePost extends Component {
        render(){
            return(
                <div>
                    <Header 
                    image={
                        this.props.site.post.PostImage ?
                        this.props.site.post.PostImage.length > 0 ?
                            API.makeFileURL(this.props.site.post.PostImage[0].url, this.props.auth.token)
                        : ''
                        : ''
                    }
                    name={this.props.site.post.title}
                    resume={this.props.site.post.content}
                    />
                 
                  <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                       <div className='player-wrapper'>
                                <ReactPlayer
                                className='react-player'
                                url= {`/video/${this.props.site.post.title}.mp4`}
                                width='100%'
                                height='100%'
                                controls = {true}
                                marginwidth="0" 
                                marginheight="0"
                                allowfullscreen="true"

                                />
                       </div>
                       </div>
                   </div>
                   </div>
                </div>
            )
        }
}

const mapStateToProps = state =>{
    return {
        auth: state.auth,
        site: state.site
    }
}
const mapDispatchToProps = dispatch =>({
    getSinglePost: (title, token) => {
        dispatch(SiteActions.getPostByTitle(title, token));
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SinglePost);