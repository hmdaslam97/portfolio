import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import EngineeringIcon from '@mui/icons-material/Engineering';

function Experience() {
  return (
    <div className="experience" style={{ paddingBottom: 10, backgroundImage: "linear-gradient(rgb(187, 187, 236),white)", }}>

      <VerticalTimeline lineColor="#3e497a">
        {/* College */}
        <VerticalTimelineElement
          // style={{ ,}}
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
          icon={< SchoolIcon />} >
          <h3 className="vertical-timeline-element-title">
            HKBK College of Engineering, Bangalore
          </h3>
          <p> Bachelor of Engineering</p>
        </VerticalTimelineElement>

        {/* Work 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 Jun - Dec"
          iconStyle={{ background: "#e9d35b", color: "black",}}
          icon={<SupportAgentIcon />}>
          <h3 className="vertical-timeline-element-title">Flipkart Internet Pvt Ltd</h3>
          <h4 className="vertical-timeline-element-subtitle">Technical Support Engineer</h4>
          <p>Technical troubleshooting of Laptops and managing Laptop returns and Payment concerns of customers.</p>
        </VerticalTimelineElement>

        {/* Course */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 Dec - Apr"
          iconStyle={{ background: "violet", color: "#fff" }}
          icon={<LocalLibraryIcon />}>
          <h3 className="vertical-timeline-element-title">J - Spiders Institute</h3>
          <p>Undergone Training in Core Java and Web technologies</p>
        </VerticalTimelineElement>

         {/* Work 2 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 Apr - Present"
          iconStyle={{ background: "lightgreen", color: "#fff" }}
          icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Bed Bath and Beyond</h3>
          <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
          <p>Identifying customer facing issues and Defects on our Ecom websites by Triaging Customer Feedbacks and Customer Complaints.
            Reporting the defects to concern Team and getting the defect fixed.</p>
        </VerticalTimelineElement>

          {/*Course 2  */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 May - Sep"
          iconStyle={{ background: "black", color: "white" }}
          icon={<WhatshotIcon />}>
          <h3 className="vertical-timeline-element-title">FreeCodeCamp.Org</h3>
          <p>Completed JavaScript Algorithms and Data Structures Developer Certification and received certificate. <a href='https://www.freecodecamp.org/certification/Mohammed_Aslam/javascript-algorithms-and-data-structures' id="links" target="_blank"><b>Click Here</b></a> to see certificate</p>
        </VerticalTimelineElement>

        {/* Intership 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 Nov"
          iconStyle={{ background: "wheat", color: "brown" }}
          icon={<EngineeringIcon />}>
          <h3 className="vertical-timeline-element-title">Bluehaute Travel Solutions</h3>
          <h4 className="vertical-timeline-element-subtitle">React Js Trainee</h4>
          <p>Underwent training in React Js library and build a project to show climate data of particular location in Front End</p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  );
}

export default Experience;