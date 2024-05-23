import React from 'react';
import "./myblogs.css"

function MyBlogs() {
    return ( 
        <div className='myBlogs'>
<h2 className='myblogHeading'>MyBlogs</h2>

<p>you can read my blogs about tech here</p>

<div className="row">
  <div className="col-md-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>

        </div>
     );
}

export default MyBlogs;