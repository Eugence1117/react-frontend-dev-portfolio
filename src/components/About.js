import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import axios from "axios";
import Lottie from "lottie-react";
import ProfileIcon from "../lotties/111452-it-developer.json"

class About extends Component {

  constructor(props) {
    super()
    this.state = {
      additionalText: ""
    }
  }

  componentDidMount() {
    this.getProfileInfo();
  }
  getProfileInfo() {    
    const api = axios.create({
      baseURL: 'https://api.github.com/',
      headers: {
        'Accept': 'application/json'
      }
    });
    console.log("Attempt to get");
    api.get("/users/Eugence1117").then(res => {
      if (res.status === 200 && res?.data?.public_repos !== null) {
        this.setState({ additionalText: `There is ${res.data.public_repos} repo(s) available in my github, feel free to checkout!` });
      }
    });
  }

  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic =  this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  {/* <img
                    height="150px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  /> */}
                  <Lottie animationData={ProfileIcon} height={150}/>
                  {/* <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  /> */}
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {about}
                    {this.state.additionalText}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
