import React from 'react'
import {Table, Button} from "react-bootstrap";
import {useEffect, useState} from "react"
import PostDataService from "../services/Postservice";
const PostList = ({getBookId}) => {
    const [books, setBooks ] = useState([])

    useEffect(()=>{
        getPosts();
    },[])

    const getPosts = async ()=>{
        const data = await PostDataService.getAllPosts();
        console.log(data.docs);
        setBooks(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    };
    
    const deleteHandler= async (id)=>{
        await PostDataService.deletePost(id);
        getPosts();
    }
  return (
  <>
  {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}
  <div className="p-4 box">
    <div className='mb-2'>
        <Button variant="dark" onClick={getPosts}>Refresh</Button>
        
    </div>
    <Table striped bordered hover size="sm">
        <thead>
          <tr className='abc'>
            <th>No.</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {books.map((doc, index)=>{
                return (
                    <tr key={doc.id}>
                    <td>{index + 1}</td>
                    <td>{doc.title}</td>
                    <td>{doc.author}</td>
                    <td>{doc.status}</td>
                    <td>
                        <Button variant="secondary" className='d-flex align-items-center justify-content-center' onClick={(e)=> getBookId(doc.id)}>Edit</Button>
                        <Button variant="danger" className='d-flex align-items-center justify-content-center' onClick={(e)=> deleteHandler(doc.id)}>Delete</Button>
                    </td>
                </tr>
                )
            })}

        </tbody>
    </Table>
    </div>
  </>
  )
}

export default PostList