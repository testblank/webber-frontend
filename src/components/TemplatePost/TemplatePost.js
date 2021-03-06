import React from 'react';
import './TemplatePost.scss';
import { Link } from 'react-router-dom';
import { MdImage, MdMoreVert } from 'react-icons/md';
import { TiHeartOutline, TiBookmark } from 'react-icons/ti';
import { IconContext } from 'react-icons';

const TemplatePost = ({ data }) => {
   console.log('TemplatePost : ' + JSON.stringify(data));
   const {
      template_id,
      nickname,
      file_name,
      file_path_html,
      file_path_css,
      tthumbnail,
      htmlContent,
      cssContent,
      views,
      likes,
      regdate,
      favor,
      replies,
      replyNum
      //댓글 갯수가 몇갠지 뽑아야됨
   } = data;
   return (
      <div className="TemplatePost">
         <Link className="TemplatePost_head" to="/template">
            <div className="TemplatePost_head_thumbnail">
               {/* <IconContext.Provider value={{ size: '80', color: 'white' }}>
                  <MdImage />
               </IconContext.Provider> */}
               <img
                  src={tthumbnail}
                  alt={file_name}
                  className="TemplatePost_head_thumbnail"
               />
            </div>
            <div className="TemplatePost_head_whiteSpace" />
         </Link>
         <div className="TemplatePost_body">
            <div className="TemplatePost_body_info">
               <div className="writer">
                  <Link to="/template">{nickname}</Link>
               </div>
               <div className="regdate_reply">
                  {regdate} · {replyNum} reply
               </div>
            </div>
            <div className="TemplatePost_body_toggle">
               <IconContext.Provider
                  value={{ size: '23', className: 'likeIcon' }}
               >
                  <div className="toggle_like flex-row-center">
                     <TiHeartOutline />
                     {likes}
                  </div>
               </IconContext.Provider>
               {/* <IconContext.Provider
                  value={{ size: '23', className: 'bookmarkIcon' }}
               >
                  <div className="toggle_bookmark flex-row-center">
                     <TiBookmark />
                  </div>
               </IconContext.Provider> */}
               <IconContext.Provider value={{ size: '23' }}>
                  <div className="button_more flex-row-center">
                     <MdMoreVert />
                  </div>
               </IconContext.Provider>
            </div>
         </div>
      </div>
   );
};

export default TemplatePost;
