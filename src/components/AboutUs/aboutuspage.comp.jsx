import Footer from "../Footer/footer.comp";
import HeaderComp from "../Header/header.comp";
import React, { useEffect, useState } from 'react';



const AboutUsPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://cdn.contentful.com/spaces/gqzgjhtdpuk2/environments/master/entries/6ZeCVCRIkWpsJu5YzevJQ1?access_token=xMPuiA4hCCzRxXiMBU9TMMBasn2K2YMHxN6YrV9C1l4');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData);
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
            
            <h1>{data.fields.title}</h1>
            <p>{data.fields.shortDescription}</p>
            <img src={data.fields.jsonImage[0].secure_url}></img>
           
          </div>
        )}
        <Footer/>
      </>
      
    );
  };
export default AboutUsPage;