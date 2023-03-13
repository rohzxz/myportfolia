import "../styles/experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Maharshi Dayanand University, Ajmer, India
          </h3>

          <p style={{ fontSize: "1.5rem" }}>
            {" "}
            Bachelor's degree in Computer science
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SDH Institute, Singapore
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Management and business tourism
          </h4>

          <p> Advance diploma </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SDH Institute, Singapore
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Management and business tourism
          </h4>

          <p> Advance diploma </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SDH Institute, Singapore
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Management and business tourism
          </h4>

          <p> Advance diploma </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022- 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Apple Technician Assist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            stog.sp zoo,poland
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - Twitch
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - Twitch
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e473556knb9ubjzuslhsj8pkxq8r0ugc1llwnm5s4i4&rid=giphy.gif&ct=g" />
      </div>
    </div>
  );
};

export default Experience;
