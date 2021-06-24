import React from 'react'
import N from "../assets/N.png"
import F from "../assets/F.png"
import Q from "../assets/Q.png"
import S from "../assets/S.png"
import V from "../assets/V.png"
export const Arrhythmia = () => {
    return (
        <div class="body1">
         

            <div class="container">
            <h2 class="type"> Types of Arrhythmia</h2>
              <div class="card">
                <div class="imgBx">
                  <img src={N} alt="Normal Beat"></img>
                </div>
               <div class="content">
                 <h5>Normal Beat</h5>
                 <ul>
                 
                 <li>Left bundle branch block beat</li>
                 <li>Right bundle branch block beat</li>
                 <li>Atrial escape beat</li>
                 <li>Nodal (junctional) escape beat</li>
               </ul>
               </div>
            </div>
            <div class="card">
                <div class="imgBx">
                  <img src={S} alt="Supraventricular ectopic beat"></img>
                </div>
               <div class="content">
                 <h5>Supraventricular ectopic beat</h5>
                 <ul>
                 <li>Atrial premature beat</li>
                 <li>Aberrated atrial premature beat </li>
                 <li>Nodal (junctional) premature beat</li>
                 <li>Supraventricular premature beat</li>
               </ul>
               </div>
            </div>
            <div class="card">
                <div class="imgBx">
                  <img src={V} alt="Ventricular ectopic beat"></img>
                </div>
               <div class="content">
                 <h5>Ventricular ectopic beat</h5>
                 <ul>
                   <li>Premature ventricular contraction</li>
                    <li>Ventricular escape beat</li>
                 </ul>
               </div>
            </div>
            <div class="card">
                <div class="imgBx">
                  <img src={F} alt="Fusion beat"></img>
                </div>
               <div class="content">
                 <h5>Fusion beat</h5>
                 <ul>
                 <li>Fusion of ventricular and normal beat</li>
               </ul>
               </div>
            </div>
            <div class="card">
                <div class="imgBx">
                  <img src={Q} alt="Unknown beat"></img>
                </div>
               <div class="content">
                 <h5>Unknown beat</h5>
                 <ul>
                    <li>Paced beat</li>
                    <li>Fusion of paced and normal beat</li>
                    <li>Unclassified beat</li>
                </ul>
               </div>
            </div>
            </div>
            </div>
        
    )
}
