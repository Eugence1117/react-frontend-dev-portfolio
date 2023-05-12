import React, { Component } from "react";
import { OverlayTrigger,Tooltip} from "react-bootstrap";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <OverlayTrigger key={i}          
          placement={'top'}
          overlay={
            <Tooltip>
              {skills.level}
            </Tooltip>
          }
        >
          <li className="list-inline-item mx-3" >
            <span>
              <div className="text-center skills-tile p-2">
                <i className={skills.class} style={{ fontSize: "170%" }}>                 
                </i>
                <p
                    className="text-center"
                    style={{ fontSize: "80%", marginTop: "8px" }}
                  >
                    {skills.name}
                  </p>
              </div>
            </span>
          </li>
        </OverlayTrigger>
          
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
