/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
import home1 from './img/carousel-1.jpg';
// import home2 from './img/carousel-2.jpg';

function Session(){
    return(
        <div className="container">
            <div className="content">
                
                <div className="content1"><h1>Find A</h1></div>
                    <div className="content2"><h1>Perfect Home</h1> </div>
                    <div className="content3"><h1>To Live With Your</h1></div>
                    <div className="content4"><h1>Family</h1></div>
                    <div className='content5'><p>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr</p></div>

                    
                    <button  className='get-btn'><Link to="/" className="btn-2">Get Started</Link></button>
                    
                
            </div>
            <div className="image">
           
  
                <img src={home1} width="100%" alt='first slide'  />
                {/* <img src={home2} width="100%" alt='second slide'  /> */}

            </div>
        </div>
    );
}
 export default Session;