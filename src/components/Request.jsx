import React from 'react'
import {Link} from 'react-router-dom'
import useRequests from '../hooks/useRequests'

const Api = 'http://localhost:8080/api/requests';

export const Request = () => {
    const requests = useRequests(Api);
    return (
        <div className="table-responsive">
            <table className="table table-striped">
            <thead>
                <tr>
                    
                    <th scope="col">Id</th>
                    <th scope="col">Passenger</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>

                </tr>
            </thead>
            <tbody>
            {requests.map(request =>
                

                   
                        <tr>
                           <td>   {request.id} </td>
                            <td>   {request.passenger} </td>
                            <td> {request.destination} </td>
                            <td> {request.status}</td>
                            <Link to={`/requests/requests-detail/ ${request.id}`} >
                            <td className="text-right">
                                <button className="btn btn-info btn-sm" type="button">VIEW</button>
                                </td>
                            </Link>
                        </tr>
                   
                
                
            )}
            </tbody>
            </table>
        </div>
    )
}

export default Request;