import React, { Component } from 'react'

import { Link } from 'react-router-dom';
export default class Newscomponent extends Component {



  render() {
    let { description, title, imageUrl,url } = this.props;
    return (
      <div className='my-3'>
        <div className="card" />
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={url} target='blank' className="btn btn-dark">Read more</Link>
        </div>
      </div>

    )
  }
}

