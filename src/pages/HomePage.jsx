import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import './Homepage.css'
import Footer from "../components/Header/Footer/Footer";

const Home = () => {
    return(
        
     <div  className="all">
             <Header/>
            
         <div className="home" id="scroller">
           
           
            <div className="aa" >
                
             <h1 > Welcome to vivekanand college!</h1>
            <h2 >Your journey to excellence starts here.</h2>
            <Link to="/admission" className="button"> Apply Now!</Link>
          </div>
            
            <p>
                **Vivekanand College is a premier educational institution dedicated to fostering academic excellence, 
                innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], 
                we have proudly served generations of students, empowering them to achieve their full potential.
            </p>
         <p>
            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. 
            Our state-of-the-art, experienced faculty, and diverse student community create a unique 
            ecosystem where curiosity thrives and future leaders are shaped.
        </p>
        
        <h2> Why we choose vivekanand college</h2>
        
        <ul>
            <li> **Legacy of Excellence:** Decades of commitment to quality education.</li>
             <li> **Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
            <li> **Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
            <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service. </li>
           <li> **Strong Placements:** Excellent career opportunities with leading companies. </li>
        </ul>
             <h2 >Campus Life & Facilitie</h2>

                 <img src="Images/campus-life-Crkero7B.jpg"></img>
                 <img src="Images/students-studying-DbLGuwF_.jpeg"></img>
       
        
             <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your 
            learning experience and personal growth.</p>
             <h3>Ready to explore our courses?</h3>
              
                 <div>
                    <Link to="/courses" className="button">Explore courses</Link>
                 </div>
                 
        </div>
            <Footer/>
     </div>
        
    )
    
}

export default Home;