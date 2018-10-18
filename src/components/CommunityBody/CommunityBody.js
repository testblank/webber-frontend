import React from 'react';
import PostListContainer from 'containers/PostListContainer';
import { Post } from 'components/Post';
import './CommunityBody.scss';
import { Link } from 'react-router-dom';

const CommunityBody = () => {
   return (
      <div className="CommunityBody">
         <Link to="/postwriter" className="CommunityBody_link_postwriter">
            새 글 작성
         </Link>
         <PostListContainer />
         {/* <div className="CommunityBody_postList">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
         </div> */}
      </div>
   );
};

export default CommunityBody;
