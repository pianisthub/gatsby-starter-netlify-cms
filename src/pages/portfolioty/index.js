import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class portfolio extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
           
           <div style={{ 
  fontSize: "36px",
  fontWeight: "bold",
  fontFamily: "Arial, Helvetica, sans-serif"
}}>
  Instagram
</div>


          
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
             {/* <BlogRoll />  */}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
