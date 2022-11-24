import React from 'react'
import {useState} from 'react'
import Homepageheader from './HomeHeader'
import AddPost from './AddPost'
import PostList from './PostList'
const Home = () => {
   const [bookId, setBookId] = useState("");

   const getBookIdHandler = (id)=>{
    console.log("The ID of document to be edited:", id);
    setBookId(id);
   }
  return (
    <>
    <Homepageheader/>
    <AddPost id={bookId} setBookId={setBookId}/>
    <PostList getBookId={getBookIdHandler}/>
    </>
  )
}

export default Home