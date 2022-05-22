import React from 'react';

export default function Card(props) {
  return (
    <div className="col-auto mb-1 d-flex">
        <div className="card" style={{width: 12 + 'em'}}>
            <img src={props.img} className="card-img-top"/>
            <div className="card-body">
                <h5>{props.name}</h5>
                <p>base_experience:{props.base_experience}</p>
                <p>height:{props.height}</p>
                <p>weight:{props.weight}</p>
            </div>
        </div>	
    </div>
  )
}
