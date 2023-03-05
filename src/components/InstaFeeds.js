import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Feed from './Feed'

import './staFeeds.css'

const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&limit=12&access_token=
                'https://graph.instagram.com/727397119042015?fields=id,username&access_token=IGQVJWQkRlbVF3VXB1OHFUeWxLYk03TWlMeDhELXJrQ1ZAUZA0s5ZAEIwcHVaeVRRN0F6T0NqUE5OR09PNEh1SW5RLUxXTlVWa1ZA3RXlycU9LcktFREN1cUJKNHlYalpYbWdSaFV4NDJoblhfdlZA6ZA3NOWgZDZD`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className="container">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default InstaFeeds;