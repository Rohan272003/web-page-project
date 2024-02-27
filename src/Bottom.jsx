import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Bottom(){
    return(
        <div className="column">
          
                <input type="text" placeholder='Search Keyword' className="bottom-search1" />
            
                <div className="bottom-search3">
                <Form.Select aria-label="Default select example" className="drop1">
                  

     
        <option className='drop2'>Property</option>
       
      <option value="1" className='drop2'>Property type 1</option> 
       <option value="1" className='drop2'>Property type 2</option>
       <option value="1" className='drop2'>Property type 3</option> 
                
      
    </Form.Select>
    </div>

                <div className="bottom-search3">
                <Form.Select aria-label="Default select example" className="drop1">
      <option>Location</option>
      <option value="1">Location 1</option>
      <option value="2">Location 2</option>
      <option value="3">Location 3</option>
    </Form.Select>
    </div>
          <Link to="Home"> <button className="search-btn">Search</button></Link>
           
        </div>
    );
}
export default Bottom;