import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import useRequests from '../hooks/useRequests'

const RequestDetail = () => {
    let { id } = useParams();

      
    const Api = `http://localhost:8080/api/requests/ ${id}`;
    const request = useRequests(Api);
    const history = useHistory();
    

    const handleSubmit =async e => {
          const body={
            'id': request.id,
            'passenger': request.passenger,
            'destination': request.destination,
            'comment':request.comment,
            'estado': 'RESERVED',
         }

         try {
            let config ={
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }

            let res = await fetch('http://localhost:8080/api/reserve', config);
            history.push('/requests');

         } catch (error) {
             console.log(`Error ${error}`);
         }
    }

    return (
        <div class="row justify-content-center">  
          <div class="col-8">      
          <h2>Request Details</h2>
          <div>
          <span>Id: </span>
            {request.id}
            </div>
            <div>
            <label>Passenger: </label>
            <span>{request.passenger}</span>
            </div>
            <div>
            <label>Destination: </label>
            <span>{request.destination}</span>
            </div>
            <div>
            <label>Status: </label>
            <label>{request.status}</label>
            </div>

            <Link to="/requests">
                <button className="btn btn-info" type="button" > Back</button>
            </Link>

            <button className="btn btn-success" type="button" onClick={handleSubmit} > Reserve</button>
            </div>  
        </div>


    )
}

export default RequestDetail;