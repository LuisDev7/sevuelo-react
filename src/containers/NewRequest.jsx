import React, {useRef} from 'react'
import {Link, useHistory} from 'react-router-dom'


 const NewRequest = () => {
     const form = useRef(null);
     const history = useHistory();

     const handleSubmit =async e => {
         const formData = new FormData(form.current);
         const request = {
             'passenger': formData.get('passenger'),
             'destination': formData.get('destination'),
             'comment': 'User',
             'estado': 'NEW',
             } 

        try {
            let config ={
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            }
            let res = await fetch('http://localhost:8080/api/requests', config);
            let json= await res.json();
            console.log(json);
            history.push('/requests');
        } catch (error) {
            console.log("ERROR :"+error)
        }
         console.log("Subtmit");
     }
    return (
       
           <div className="row justify-content-center">
               <div className="col-8">
               <h1>Create a new Request</h1>
               </div>

            <div className="row justify-content-center">
               <div className="col-8">
                
             <form ref={form} >
             <div class="form-group">
                  <label className="form-control-label">Passenger:</label>
                  <input className="form-control" type="text" placeholder="Passenger" name="passenger" />
                </div>
                <div class="form-group">
                  <label className="form-control-label">Destination: </label>
                  <input className="form-control" type="text" placeholder="Destination" name="destination" />
                  </div>
                 
            

                  
             </form>
             <Link to="/requests">
                <button className="btn btn-info" type="button" > Back</button>
            </Link>
           
            <button className="btn btn-success" type="submit" onClick={handleSubmit}> Save</button>
           
             </div>
            </div>

           
            
           
            
               
           </div>
      
    );
}
 export default NewRequest;