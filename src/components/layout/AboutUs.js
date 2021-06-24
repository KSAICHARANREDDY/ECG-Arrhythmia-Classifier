import React from 'react'
import charan from '../assets/charan.jpg'
import bhargavi from '../assets/bhargavi.jpeg'
import srijan from '../assets/srijan.jpeg'
import ravikumar from '../assets/RaviKumar.jpeg'

export const AboutUs = () => {
    return (
    <div>
     <h3 class="team"> Team </h3>
     <div class="carde mid">
     <div class="front">
     <img src={ravikumar} alt="charan"></img>
     </div>
     <div class="back">
         <div class="back-content middle">
             <h6>G RAVI KUMAR</h6>
             <span>CMRCET</span><br></br>
             <div class="sm">
                 <a href="https://cmrcet.ac.in/files/CSE/csefacultyprofiles/28.pdf"target="_blank"><i class="fa fa-black-tie"></i></a>
                 
             </div>
         </div>
     </div>
     </div>
        <div class="carde mid1">
        <div class="front">
        <img src={charan} alt="charan"></img>
        </div>
        <div class="back">
            <div class="back-content middle">
               <h6>K SAI CHARAN REDDY</h6>
               <span>(18H51A0599)</span><br></br>
               <span>CMRCET</span><br></br>
                <div class="sm">
                    <a href="https://www.linkedin.com/in/k-sai-charan-reddy-08389a187/"target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/KSAICHARANREDDY"target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
        </div>
    <div class="carde mid2">
     <div class="front">
     <img src={bhargavi} alt="bhargavi"></img>
     </div>
     <div class="back">
        <div class="back-content middle">
           <h6 >K BHARGAVI</h6>
           <span>(18H51A05A2)</span><br></br>
            <span>CMRCET</span><br></br>
            <div class="sm">
                <a href="https://www.linkedin.com/in/bhargavi-kandukuri-5757b1174/"target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/Bhargavi-2000"target="_blank"><i class="fab fa-github"></i></a>
               
            </div>
          </div>
        </div>
       </div>
    <div class="carde mid3">
        <div class="front">
        <img src={srijan} alt="srijan"></img>
        </div>
        <div class="back">
            <div class="back-content middle">
                <h6>M SRIJAN RAJ</h6>
                <span>(18H51A05A4)</span><br></br>
                 <span>CMRCET</span><br></br>
                <div class="sm">
                <a href="https://www.linkedin.com/mwlite/in/mekala-srijanraj-067a451a4"target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/predator-007"target="_blank"><i class="fab fa-github"></i></a>
               
                </div>
            </div>
        </div>
    </div>
    
</div> 
    
    )
}
