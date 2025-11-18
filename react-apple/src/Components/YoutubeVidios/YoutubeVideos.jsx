import { useEffect, useState } from "react";
import "./YoutubeVideos.css"

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  //   useEffect(() => {
  //     fetch(
  //       "https://www.googleapis.com/youtube/v3/search?key=zaSyBWn3xstxX1ygq0DRmnAHqAcCHT_3ZK0aQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
  //     )
  //       .then((responseAI) => response.json())
  //       .then((data) => {
  //         setVideos(data.items);
  //       });
  //   }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper mb-2">
              Latest Videos
            </div>
          </div>

          {videos.map((singleVideo, i) => {
            const vidId = singleVideo.id.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={i} className="col-sm-12 col-md-6">
                <div className="singleVideoWrapper m-2">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;



