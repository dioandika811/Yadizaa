import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiSchoolBag } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";
import { IoSchoolSharp } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Education() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2012"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<GiSchoolBag />}
          >
            <h3 className="vertical-timeline-element-title">PG/TK</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Medan, Sumatera Utara
            </h4>
            <p>PG/TK Sunrise Kids</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">SD</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Medan, Sumatera Utara
            </h4>
            <p>SDN 064010 Medan.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSchoolFlag />}
          >
            <h3 className="vertical-timeline-element-title">SMP</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Medan, Sumatera Utara
            </h4>
            <p>SMPN 43 Medan.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<LuSchool />}
          >
            <h3 className="vertical-timeline-element-title">SMK</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Medan, Sumatera Utara
            </h4>
            <p>SMKN 5 Medan.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">KULIAH</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Medan, Sumatera Utara
            </h4>
            <p>Kuliah Universitas Satya Terra Bhinneka.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Education;
