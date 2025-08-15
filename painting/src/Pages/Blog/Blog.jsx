 import React from 'react';
 import {Link} from "react-router-dom";
 import blog1 from "../../assets/Blog/blog1.webp";
 import blog2 from "../../assets/Blog/blog2.webp";
  import blog3 from "../../assets/Blog/blog3.webp";
   import blog4 from "../../assets/Blog/blog4.webp";
 import "./Blog.css";
import ContactDetails from '../../Components/Contactdetails/ContactDetails';

const Blog = () => {

    const blogs = [
    {
      img: blog1,
      title: "Creative Painted Kitchen Cabinet Ideas You’ll Love",
      author: "Rimsha Arif",
      slug:"/kitchen"
    },
    {
      img: blog2,
      title: "How to Style Bohemian Interior Design with Colors and Decor",
      author: "Rimsha Arif"
    },
    {
      img: blog3,
      title: "Interior Wall Design & Painting Ideas for a Beautiful Home",
      author: "Rimsha Arif"
    },
    {
      img: blog4,
      title: "Modern Minimalist Office Setup Inspiration",
      author: "Rimsha Arif"
    },
    {
      img: blog3,
      title: "Timeless Aesthetic With Art Deco Interior Design",
      author: "Rimsha Arif"
    },
    {
      img: blog4,
      title: "Best Paint Brushes For Every Project",
      author: "Rimsha Arif"
    },
   

  ];
  

   return (
    <>
    <section className="blog-header-section">
  <div className="container">
    <h2 className="blog-header">Insights &amp; Ideas</h2>
    <p className="blog-description">
      DPS Blogs, your go-to space for tips, ideas, and expert advice on all
      things painting. From color inspiration to care tips and project planning,
      we share practical content to help you make confident choices. Whether
      you’re upgrading your home, refreshing your office, or just exploring
      what’s possible, our blog is here to guide you. Stay informed, inspired,
      and ready for your next painting project.
    </p>
  </div>
</section>
<section className="blog-cards-section">
      <div className="cards-container">
        {blogs.map((blog, index) => (
          <Link to ={blog.slug}className="blog-card" key={index}>
            <img src={blog.img} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-author">{blog.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <ContactDetails/>
</>
   )
 }
 
 export default Blog