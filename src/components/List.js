import React from 'react'
import PostDataService from "../services/Postservice";
import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import "./Login.css";
const List = () => {

    const [books, setBooks ] = useState([])

    useEffect(()=>{
        getPosts();
    },[])

    const getPosts = async ()=>{
        const data = await PostDataService.getAllPosts();
        console.log(data.docs);
        setBooks(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    };
  return (
    <>
    <div className="p-4 box">
        <h1 className='d-flex align-items-center justify-content-center mb-4'>List of Books</h1>
    <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No.</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            {books.map((doc, index)=>{
                return (
                    <tr  key={doc.id}>
                    <td >{index + 1}</td>
                    <td>{doc.title}</td>
                    <td>{doc.author}</td>
                    <td>{doc.status}</td>
                </tr>
                )
            })}

        </tbody>
    </Table>
    </div>
    </>
  )
}

export default List