import React, { useState } from "react";

function BlogForm(){

    const [blogName,setBlogName] = useState("");
    const [blogContent,setBlogContent] = useState("");
    const [blogImageUrl,uptateImageUrl] =  useState('')


    const blogHandler = (event) =>{
        setBlogName(event.target.value)
    }

    const blogContentHandeler = (event) => {
        setBlogContent(event.target.value)
    }
    const imageInputHandler = (event) => {
        uptateImageUrl(event.target.value)
    }

    const blogFormHandler = (event) => {
        event.preventDefault()
        console.log(blogName,blogContent,blogImageUrl);
    }
    return(<>
    <h4>Blog Creation</h4>
      <form className='row' onSubmit={blogFormHandler}>
                <div className='col-md-6 mt-3'> 
                   <label for="blogName" className='form-control-label'>Blog Name</label>
                   <input type="text" id="blogName" className="form-control form-control-md" name="blogName" placeholder="Enter the Blog Name" onChange={blogHandler}/> 
                </div>

                <div className='col-md-12 mt-3'>
                  <label for="blogContent">Blog content</label>
                  <textarea placeholder='Enter the Blog Content here' id="blogContent" className="form-control" onChange={blogContentHandeler}></textarea>
                </div>
                <div className="form-group col-md-12 mt-3">
                    <label for="select-image">Select Product Image</label>
                    <input type="file" className="form-control form-control-sm" id="select-image" onChange={imageInputHandler} />

                </div>

                <button type="submit" className="btn btn-primary">Add Blog</button>

              </form>
    
    </>)
}

export default BlogForm;