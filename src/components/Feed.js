import React from 'react'

const Feed = (props) => {
    const { id, caption, media_type, media_url, permalink} = props.feed
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    width='70%'
                    height='auto' 
                    src={media_url} 
                    type="video/mp4" 
                    controls playsinline>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <img 
                    width='70%'
                    height='auto'
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                    pl = {permalink}
                />
            );
            break;
        default:
            post = (
                <a href={`${permalink}`}>
          <img 
            width='70%'
            height='auto'
            id={id} 
            src={media_url} 
            alt={caption} 
            pl = {permalink}
          />
        </a>
            );
    }       

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;