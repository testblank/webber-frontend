import React from 'react';
import './BoxModel.scss';

const componentDrag = e => {
   e.dataTransfer.setData(
      'text/plain',
      JSON.stringify({ type: 'BoxModel', tag: e.target.tagName })
   );
};

const BoxModel = () => {
   const toggleDropdown = e => {
      const menu = window.document.getElementsByClassName(
         'BoxModel_dropdown_menu'
      )[0];
      menu.classList.toggle('active');
   };
   return (
      <div className="BoxModel">
         <div className="BoxModel_btn_dropdown" onClick={toggleDropdown}>
            박스 모델
         </div>
         <div className="BoxModel_dropdown_menu">
            <div className="BoxModel_div">
               {'<div />'}
               <div
                  id="div"
                  draggable="true"
                  onDragStart={componentDrag}
                  className="BoxModel_div_clone"
               >
                  {'<div />'}
               </div>
            </div>
            {/* <div className="BoxModel_span">
               {'<span />'}
               <span
                  id="span"
                  draggable="true"
                  onDragStart={componentDrag}
                  className="BoxModel_span_clone"
               >
                  {'<span />'}
               </span>
            </div> */}
         </div>
      </div>
   );
};

export default BoxModel;
