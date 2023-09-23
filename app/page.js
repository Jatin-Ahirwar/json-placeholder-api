"use client"
import axios from '@/utilities/axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component'

const page = () => {
  const [posts, setposts] = useState([])
  const [hashmore, sethashmore] = useState(true)
  const GetPosts = async ()=> {
    try {
      const { data } = await axios.get(`/posts?_limit=10&_start=${posts.length}`)
      console.log(data)
      data.length === 0 && sethashmore(false)
      setposts([...posts,...data])
    } 
    catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    GetPosts()
  },[])
  return (
    <div className="container mt-3 p-5">
      <h1 className='json'>Json Placeholder Posts</h1>
      <InfiniteScroll
      dataLength={posts.length}
      next={GetPosts}
      hasMore={hashmore}
      loader={<p style={{ textAlign: "center" }}>Loading...</p>}
      endMessage={
        <p style={{ textAlign: "center" }}>
            <b>you have seen all posts !</b>
        </p>
    }
      >
      {posts.length !== 0  &&
        posts.map((p)=>(
          <div 
            key={p.id} className="fs-5 d-flex justify-content-between alert alert-light "
          >
            {p.title} <Link href={`/${p.id}`}>Explore Now</Link>
            </div>
        )
        )
      }
      </InfiniteScroll>
    </div>
  )
}

export default page


