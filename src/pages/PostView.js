import React, { Component } from 'react';
import './PostView.scss';
import { PostViewHeader } from 'components/PostViewHeader';
import { PostViewBody } from 'components/PostViewBody';
import { PostViewFooter } from 'components/PostViewFooter';

class PostView extends Component {
   state = {
      data: {}
   };
   componentDidMount() {
      fetch(
         'http://localhost:9090/api/community/' +
            this.props.match.params.board_id
      )
         .then(res => {
            res.json().then(data => {
               this.setState({
                  data
               });
            });
         })
         .catch(err => {
            console.log(err);
         });
   }
   render() {
      return (
         <div className="PostViewTemplate">
            <div className="PostViewSection">
               <PostViewHeader data={this.state.data} />
               <PostViewBody data={this.state.data} />
               <PostViewFooter data={this.state.data} />
            </div>
         </div>
      );
   }
}

export default PostView;
