import Footer from "../Footer/footer.comp";
import HeaderComp from "../Header/header.comp";
import React, { useEffect, useState } from 'react';
import "./aboutUs.css"
import { Contentful } from "../../api/api";



const AboutUsPage = () => {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await Contentful.get('6ZeCVCRIkWpsJu5YzevJQ1');
          if (response.status==200) {
            setAboutData(response.data);
          }else{
            throw new Error('Network response was not ok');
          }
          
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once after initial render
  
    return (
        
      <>
      <HeaderComp/>
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='about-container'>
            
            <h1>{aboutData.fields.title}</h1>
            <p>{aboutData.fields.shortDescription}</p>
            <img src={aboutData.fields.jsonImage[0].secure_url}></img>
           
          </div>
        )}
        <Footer/>
      </>
      
    );
  };
export default AboutUsPage;