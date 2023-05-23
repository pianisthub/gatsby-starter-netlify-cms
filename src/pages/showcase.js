import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './showcase.css';

const Showcase = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "showcase" } }) {
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

export default Showcase;
