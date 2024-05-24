import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import All from "./Components/All";
import FullStack from "./Components/FullStack";
import DataScience from "./Components/DataScience";
import CyberSecurity from "./Components/CyberSecurity";
import Career from "./Components/Career";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  let data = [
    {
      id: 1,
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      head: "Data science",
      description:
        "Are you someone who's not interested in coding, but wants to get placed in tech",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      date: "8 March 2024",
      comment: "No Comments",
    },
    {
      id: 2,
      title: "10 Best Data Science Frameworks in 2024",
      head: "Data science",
      description:
        "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp",
      date: "8 March 2024",
      comment: "No Comments",
    },
    {
      id: 3,
      title: "Top Product-Based Companies for Data Science Freshers",
      head: "Data science",
      description:
        "In today's data-driven world, data science has emerged as a crucial field, with companies harnessing",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      date: "8 March 2024",
      comment: "No Comments",
    },
    {
      id: 4,
      title:
        "What is the Difference between Data Science and Data Engineering?",
      head: "Data science",
      description:
        "India has been making some serious waves in the world of data. Just like the",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      date: "18 March 2024",
      comment: "No Comments",
    },
    {
      id: 5,
      title:
        "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
      head: "Data science",
      description:
        "Data science has become one of the most sought-after skills in the current job market.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/must-watch-data-science-focused-youtube-channels-1536x804.webp",
      date: "20 March 2024",
      comment: "No Comments",
    },
    {
      id: 1,
      title:
        "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      head: "Full Stack",
      description:
        "As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
      date: "5 April 2024",
      comment: "No Comments",
    },
    {
      id: 2,
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      head: "Full Stack",
      description:
        "When you're hiring a full-stack developer, what are the most important things you look for?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      date: "15 April 2024",
      comment: "No Comments",
    },
    {
      id: 3,
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      head: "Full Stack",
      description:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      date: "17 April 2024",
      comment: "No Comments",
    },
    {
      id: 4,
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      head: "Full Stack",
      description:
        "In the world of system design, envision a digital skyscraper - a multifaceted structure built",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      date: "20 April 2024",
      comment: "No Comments",
    },
    {
      id: 5,
      title: "Best Books to Learn Full-Stack Development",
      head: "Full Stack",
      description:
        "Are you interested in becoming a full-stack developer but not sure where to start? In",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      date: "25 April 2024",
      comment: "No Comments",
    },
    {
      id: 6,
      title: "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      head: "Full Stack",
      description:
        "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      date: "27 April 2024",
      comment: "No Comments",
    },
    {
      id: 1,
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      head: "Cyber security",
      description:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      date: "4 May 2024",
      comment: "No Comments",
    },
    {
      id: 2,
      title: "What Is Hacking? Types of Hacking & More",
      head: "Cyber security",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      date: "4 May 2024",
      comment: "No Comments",
    },
    {
      id: 3,
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      head: "Cyber security",
      description:
        "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      date: "4 May 2024",
      comment: "No Comments",
    },
    {
      id: 1,
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      head: "Career",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      date: "4 May 2024",
      comment: "No Comments",
    },
    {
      id: 2,
      title: "Best 11 Product-Based Companies for Product Managers in India ",
      head: "Career",
      description:
        "Who is a product manager? What are the best product-based companies for product managers in",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
      date: "14 May 2024",
      comment: "No Comments",
    },
    {
      id: 3,
      title: "Top 5 IT Jobs for Economics Students",
      head: "Career",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      date: "19 May 2024",
      comment: "No Comments",
    },
    {
      id: 4,
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      head: "Career",
      description:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      date: "24 May 2024",
      comment: "No Comments",
    },
    {
      id: 5,
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      head: "Career",
      description:
        "The world is moving towards automating the testing of products in order to increase work",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      date: "27 May 2024",
      comment: "No Comments",
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/fullstack" element={<FullStack data={data} />} />
          <Route path="/datascience" element={<DataScience data={data} />} />
          <Route
            path="/cybersecurity"
            element={<CyberSecurity data={data} />}
          />
          <Route path="/career" element={<Career data={data} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    
  );
};

export default App;
