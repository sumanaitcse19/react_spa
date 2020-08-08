import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer()
{

return(

<div>

<MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title"></h5>
            <p>
            Believe that creating a beautiful portfolio should not be time consuming.<br></br>
It only takes a few minutes to get started.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">FOLLOW ME</h5>
            
            <ul>
              <li className="list-unstyled">
              <img src="./Image/fb.png"alt="Add a Image" height= "20px" width="20px"/>
                <a href="www.facebook.com">facebook</a>
              </li>
              <li className="list-unstyled">
              <img src="./Image/insta.png"alt="Add a Image" height= "20px" width="20px"/>
                <a href="www.instagram.com">instagram</a>
              </li>
              <li className="list-unstyled">
              <img src="./Image/linkin.png"alt="Add a Image" height= "20px" width="20px"/>
                <a href="https://www.linkedin.com/in/suman-ghosh-637128171/">LinkedIn</a>
              </li>
              <li className="list-unstyled">
              <img src="./Image/twitter.png"alt="Add a Image" height= "20px" width="20px"/>
                <a href="www.twitter.com">Twitter</a>
               
              </li>
            </ul>
           
          </MDBCol>
          
          
        </MDBRow>
        
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Suman's website</a>
        </MDBContainer>
      </div>
    </MDBFooter>



</div>




)



}

export default Footer