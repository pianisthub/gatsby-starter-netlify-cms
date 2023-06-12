import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import './showcase.css';

const Wildlife = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "wildlife" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);


  

  useEffect(() => {
    const showcaseContainer = document.querySelector('.showcase-container');

    

    const handleWheelScroll = (event) => {
      event.preventDefault();
      const scrollStep = Math.max(-1, Math.min(1, event.deltaY)); // Normalize the scroll step
      const scrollDistance = scrollStep * 370; // Adjust the scroll distance by multiplying scrollStep with a factor
      
      showcaseContainer.scrollTo({
        left: showcaseContainer.scrollLeft + scrollDistance,
        behavior: 'smooth', // Add smooth scrolling behavior
      });
    };
    

    const handleKeyScroll = (event) => {
      if (event.key === 'ArrowLeft') {
        showcaseContainer.scrollBy({
          left: -100,
          behavior: 'smooth', // Add smooth scrolling behavior
        });
      } else if (event.key === 'ArrowRight') {
        showcaseContainer.scrollBy({
          left: 100,
          behavior: 'smooth', // Add smooth scrolling behavior
        });
      }
    };

    showcaseContainer.addEventListener('wheel', handleWheelScroll);
    window.addEventListener('keydown', handleKeyScroll);

    return () => {
      showcaseContainer.removeEventListener('wheel', handleWheelScroll);
      window.removeEventListener('keydown', handleKeyScroll);


      
    };
  }, []);


  useEffect(() => {
    const showcaseContainer = document.querySelector('.showcase-container');

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (event) => {
      isDragging = true;
      startX = event.pageX - showcaseContainer.offsetLeft;
      scrollLeft = showcaseContainer.scrollLeft;
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;
      event.preventDefault();
      const x = event.pageX - showcaseContainer.offsetLeft;
      const walk = (x - startX) * 3; // Adjust the scroll speed by changing the factor

      showcaseContainer.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    showcaseContainer.addEventListener('mousedown', handleMouseDown);
    showcaseContainer.addEventListener('mousemove', handleMouseMove);
    showcaseContainer.addEventListener('mouseup', handleMouseUp);

    return () => {
      showcaseContainer.removeEventListener('mousedown', handleMouseDown);
      showcaseContainer.removeEventListener('mousemove', handleMouseMove);
      showcaseContainer.removeEventListener('mouseup', handleMouseUp);
    };
  }, []); 


  

  return (
   
    <div className="showcase-container">
      <div className="showcase-scroll">
        {data.allFile.edges.map(({ node }) => (
           <div key={node.id} className="showcase-image">
           <Img fluid={node.childImageSharp.fluid} alt={node.name} />
         </div>
        ))}
      </div>
    </div>
  );
};

export default Wildlife;
