import React from 'react';

const PicListItem = ({pic}) =>{
  //const video=props.video;
  //const onVideoSelect=props.onVideoSelect;

  const imageUrl=pic.src;
  const title=pic.title;
  const likes=pic.likes;
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className="photo-box">
                <div className="image-wrap">
                    <img src={imageUrl}/>
                    <div className="likes">{likes} Likes</div>
                </div>
                <div className="description">
                  {title}
                <div className="date">September 16, 2014</div>
            </div>
        </div>
    </div>

  );
}

export default PicListItem;
