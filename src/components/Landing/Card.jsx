import React from 'react';

export default function Card({ title, text, imgUrl }) {
  return (
    <div className="card">
      <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src={imgUrl} className="img-fluid" alt="..."  style={{height:'100px', width: '100px'}} />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {/* <a href="#!" className="btn btn-primary" data-mdb-ripple-init>Quick View</a> */}
      </div>
    </div>
  );
}
