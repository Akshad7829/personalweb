import React, { Component } from "react";
import ProjectCard from "./common/ProjectCard";
import book from "../assets/images/book.png";
import picture from "../assets/images/picture.png";
import text from "../assets/images/text.png";
import project3 from "../assets/images/projects/project7.png";
import project4 from "../assets/images/projects/project6.png";
import project6 from "../assets/images/projects/project12.png";
import project7 from "../assets/images/projects/project10.png";

export default class Portfolio extends Component {
  state = {
    shownTab: "all",
  };

  handleHowTab = (tab) => {
    this.setState({ shownTab: tab });
  };

  render() {
    const { shownTab } = this.state;
    const projects = [
      {
        id: 4,
        image: book,
        title: "ProjectBook ",
        description:
          " Sign in and Sign up system using Email. Students will be able to get to know the projects made by other students.  Users can get guidance of projects from project developers.  Users can get to know the contest details",
        
       // demoLink: "https://tranquil-chamber-60677.herokuapp.com/",
        sourceCodeLink: "https://github.com/Akshad7829/project",
        technologies: [
          { id: 1, name: "HTML5" },
          { id: 2, name: "CSS3" },
          { id: 3, name: "ReactJs" },
          { id: 4, name: "Firebase" },
        ],
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 2,
        image: text,
        title: "Text-Mate ",
        description:
          "In this Website, you can write your text and edit it Some of the features of MS-Word are present.",
        demoLink: "https://text-mate.netlify.app/",
        sourceCodeLink: "https://github.com/Akshad7829/Text-Editor",
        technologies: [
          { id: 1, name: "HTML5" },
          { id: 2, name: "CSS3" },
          { id: 3, name: "ReactJs" },
      
        ],
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 5,
        image: picture,
        title: "Picture-Perfect ",
        description:
          "Reactjs Web Application to download High-quality HD Images for free. Simple and user-friendly UI",
        demoLink: "https://picture-perfecct.netlify.app/",
        sourceCodeLink: "https://github.com/Akshad7829/picture-perfect",
        technologies: [{ id: 1, name: "HTML5 " },
        { id:2 , name: "CSS3 " },
        { id: 3, name: "ReactJs" },
        
      ],
        category_id: 2,
        animation: "fade-down-left",
      },
      
    ];

    const webProjects = projects.filter((project) => project.category_id === 1);
    const mobileProjects = projects.filter(
      (project) => project.category_id === 2
    );
    const backendProjects = projects.filter(
      (project) => project.category_id === 3
    );

    const renderProjects = () => {
      if (shownTab === "all") {
        return projects;
      } else if (shownTab === "mobile") {
        return mobileProjects;
      } else if (shownTab === "web") {
        return webProjects;
      } else {
        return backendProjects;
      }
    };
    return (
      <div className="portfolio-main-container" id="portfolio" name="portfolio">
        <div className="portfolio-wrapper">
          <div className="portfolio-header">
            <div className="home-hello-wrapper" data-aos="fade-up">
              <div className="hello-line"></div>
              <h3 className="hero-hello">Projects</h3>
            </div>
            <div className="portfolio-works-wrapper">
              <div className="links-wrapper">
                <h3 data-aos="fade-up">Some of my best works</h3>
                {/* <ul>
                  <li>
                    <div
                      onClick={() => this.handleHowTab("all")}
                      className={shownTab === "all" ? "active" : ""}
                    >
                      All
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("web")}>
                    <div className={shownTab === "web" ? "active" : ""}>
                      Web
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("mobile")}>
                    <div className={shownTab === "mobile" ? "active" : ""}>
                      Mobile{" "}
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("backend")}>
                    <div className={shownTab === "backend" ? "active" : ""}>
                      Backend
                    </div>
                  </li>
                </ul> */}
              </div>
              <div className="projects-grid-wrapper">
                {renderProjects().map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
