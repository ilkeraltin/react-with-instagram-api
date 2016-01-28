import React from 'react';
import PicListItem from './pic_list_item'
;
const PicList = (props) => {

const PicItems=props.pictures.map((pic,index)=>{
     return (
     <PicListItem
     pic={pic}
     key={index}/>
     );
   });

  return(
    <div className="row instagram-content">
    <div className="col-md-12">
{PicItems}
    </div>
    </div>
  );
}

export default PicList;
