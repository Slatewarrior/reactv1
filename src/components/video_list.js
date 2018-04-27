import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videos = props.videos;
   const videoItems = props.videos.map( (video) => {
     return (<VideoListItem 
     key={video.etag} 
     video={ video}
     onVideoSelected= {props.onVideoSelected} 
     />
     );
   } )
  return (
    <ul className="col-md-4 list-group">
      {videoItems} 
    </ul>
  );
}

export default VideoList;