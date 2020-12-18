import React, { useEffect, useState } from 'react';
//Get Data from Sanity
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    //Fetch data from sanity
    sanityClient.fetch(
      //Grock Query
      //search all elements which type equal post
      //then we get: title, slug, image
      `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
    )
    .then((data) => setAllPosts(data))
    .catch(console.error)
  }, [])

  return (
    <div>
      <h2>Blog Posts!</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link
            to={`/${post.slug.current}`}
            key={post.slug.current}
            >
              <span
              key={index}
              >
                <img src={post.mainImage.asset.url} alt='Main Hero Image for blog post'/>
              </span>
              <span>
                <h2>{post.title}</h2>
              </span>
            </Link>
          ))
        }
      </div>
    </div>
  )
}