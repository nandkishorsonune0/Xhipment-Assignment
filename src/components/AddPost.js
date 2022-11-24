import React from 'react'
import './Login.css'
import { Form, InputGroup, Button, Alert, ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react"

import PostDataService from "../services/Postservice"
const AddPost = ({id, setBookId}) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (title === "" || author === "") {
          setMessage({ error: true, msg: "All fields are mandatory!" });
          return;
        }
        const newPost = {
          title,
          author,
          status,
        };
        console.log(newPost);

        try{
            if(id !== undefined && id !== ""){
                await PostDataService.updatePost(id, newPost);
                setBookId("");
            setMessage({error: false, msg:"Updated successfuly"});
            }else{
                await PostDataService.addPosts(newPost);
            setMessage({error: false, msg:"New Book added successfuly"});
            }
            
        }catch(err){
            setMessage({error: true, msg: err.message});
        }

        setTitle("");
        setAuthor("");
    };

    const editHandler = async ()=>{
        setMessage("");
        try{
            const docSnap = await PostDataService.getPost(id);
            console.log("The record is:",docSnap.data())
            setTitle(docSnap.data().title);
            setAuthor(docSnap.data().author);
            setStatus(docSnap.data().status);
        }catch(err){
            setMessage({error: true, msg: err.message});
        }
    }
    useEffect(()=>{
        console.log("The id here is :", id)
        if(id !== undefined && id !== ""){
            editHandler()
        }
    },)
    return (
        <>
       
       <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">Book</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">Author</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
        <p className='mt-4' style={{color:"red"}}>After performing each operation click on Refresh button to view changes in table</p>
      </div>
      
        </>
    )
}


export default AddPost;