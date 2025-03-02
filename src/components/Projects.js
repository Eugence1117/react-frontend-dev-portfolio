import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div className="p-4 w-100" style={{borderRadius:24}}>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"                    
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative',backgroundColor:projects.themeColor || "#FFFAF4" ,borderRadius:12}}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">
              {projects}
              <div
                className="col-sm-12 col-md-6 col-lg-4"
                key={"game"}
                style={{ cursor: "pointer" }}
              >
                <span className="portfolio-item d-block">
                  <div className="foto">
                    <div className="p-4 w-100" style={{borderRadius:24}}>
                      <iframe className="d-block w-100" src="frogger/index.html" title="game" style={{ border: 'none' }} height={425}></iframe>

                      <span className="project-date">2022</span>
                      <br />
                      <p className="project-title-settings mt-3" style={{ zIndex: 10 }}>
                        Frogger Arcade
                      </p>
                    </div>
                  </div>

                </span>
              </div>
            </div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>     
      </section>
    );
  }
}

export default Projects;
