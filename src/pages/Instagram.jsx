import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./instagram.css";


const InstagramFeed = () => {
    const [feedData, setFeedData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchInstagramFeed = async () => {
        try {
          const accessToken = 'IGQVJWNm1Va0ZAmU2twWlNDZA0NyMjNHLVFEUm8ySEdMckZAoYUNjY1luVHRFNEY2dEFON0l0bTNZAU04zdmlYME9FZAUk1enJiWHZAPT0x2Qy1zemJPaERLWEVrd1pEYllsaUluaVZAXd1hmeTlzbTgwOUJpOAZDZD';
          const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`;
          const response = await axios.get(apiUrl);
          const data = response.data.data.slice(0, 9); // Get only the first 6 posts
          setFeedData(data);
  
          setFeedData(data);
        } catch (error) {
          console.error('Error fetching Instagram feed:', error);
          setError('Failed to fetch Instagram feed');
        }
      };
  
      fetchInstagramFeed();
    }, []);
  
    if (error) {
      return <p>Error: {error}</p>;
    }
    const handlePostClick = (permalink) => {
        window.open(permalink, '_blank');
      };
    
    const renderPostsInRows = () => {
      const rows = [];
      const postsPerRow = 3;
      const totalPosts = feedData.length;
  
      for (let i = 0; i < totalPosts; i += postsPerRow) {
        const rowPosts = feedData.slice(i, i + postsPerRow);
        const row = (
            <div className="insta_row" key={i}>
            {rowPosts.map(post => (
              <div className="insta_post" key={post.id} onClick={() => handlePostClick(post.permalink)}>
                <div className="insta_content">
                  <img src={post.media_url} alt="Instagram Post" />
                </div>
              </div>
            ))}
          </div>
        );
        rows.push(row);
      }
  
      return rows;
    };
  
    return (
      <div>
        {renderPostsInRows()}
      </div>
    );
  };
  



export default InstagramFeed;
