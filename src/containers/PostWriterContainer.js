import React, { Component, Fragment } from 'react';
import { PostWriterHeader } from 'components/PostWriterHeader';
import { PostWriterContent } from 'components/PostWriterContent';
import { PostWriterPreview } from 'components/PostWriterPreview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postWriterActions from 'store/modules/postWriter';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

class PostWriterContainer extends Component {
   handleTitleChange = e => {
      // title 인풋 값 변경
      const { PostWriterActions } = this.props;
      PostWriterActions.changeTitle(e.target.value);
   };
   handleContentChange = e => {
      const newVal = e.target.value
         .split('\n')
         .map(line => line)
         .join('<br/>');

      // content 인풋 값 변경
      const { PostWriterActions } = this.props;
      PostWriterActions.changeContent(newVal);
   };

   // 리덕스 state 초기화
   handleInitState = e => {
      const { PostWriterActions } = this.props;
      PostWriterActions.init();
   };

   handleSubmit = e => {
      const form = document.querySelector('#postWriterForm');
      console.log(form);
      const data = new FormData(form);
      fetch('http://localhost:9090/api/community', {
         method: 'POST',
         body: data
      }).then(res => {
         if (res.status === 200) {
            window.location.href = '/community';
         }
      });
   };

   render() {
      const {
         handleTitleChange,
         handleContentChange,
         handleInitState,
         handleSubmit
      } = this;
      const { preview } = this.props;
      return (
         <Fragment>
            <input
               type="hidden"
               name="nickname"
               value={JSON.parse(localStorage.getItem('webber_user')).nickname}
            />
            <input
               type="hidden"
               name="access_token"
               value={read_cookie('access_token')}
            />
            <PostWriterHeader
               onTitleChange={handleTitleChange}
               onOutPage={handleInitState}
               onSubmit={handleSubmit}
            />
            <div className="PostWriterBody">
               <PostWriterContent onContentChange={handleContentChange} />
               <PostWriterPreview preview={preview} />
            </div>
         </Fragment>
      );
   }
}

export default connect(
   ({ postWriter }) => ({
      // immutable 을 사용하니, 값을 조회 할 때는 .get 을 사용
      preview: postWriter.get('preview')
   }),
   dispatch => ({
      PostWriterActions: bindActionCreators(postWriterActions, dispatch)
   })
)(PostWriterContainer);
