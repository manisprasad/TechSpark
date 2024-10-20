
import React from "react";
import "./CoreMembers.css"; // Import the CSS for styling

const teamMembers = [
  {
    name: "Mihir Kashkhedikar",
    role: "Overall Coordinator",
    linkedin: "https://www.linkedin.com/in/mukesh-yadav-b53a58242/",
    github: "BladeRunner",
  },
  {
    name: "Asmit Singh",
    role: "Coordinator",
    linkedin: "#",
    github: "Azm1t",
  },
  {
    name: "Payas Khurana",
    role: "Coordinator",
    linkedin: "#",
    github: "etherinmatic",
  },
  {
    name: "Malik Hammad Faisal",
    role: "Coordinator",
    linkedin: "#",
    github: "ghoul932",
  },
  {
    name: "Mridul Ahi",
    role: "Coordinator",
    linkedin: "#",
    github: "MridulAhi",
  },
  {
    name: "Girvar Patidar",
    role: "Executive",
    linkedin: "#",
    github: "lucky__389",
  },
  {
    name: "Pritesh Mehta",
    role: "Executive",
    linkedin: "#",
    github: "PROELECTRO444",
  },
  {
    name: "Abhinav Rajesh Shripad",
    role: "Executive",
    linkedin: "#",
    github: "33_arsenic_75",
  },
  {
    name: "Sai Kamal Paidemarry",
    role: "Executive",
    linkedin: "#",
    github: "sai_kamal",
  },
  {
    name: "Arpit Anil Agrawal",
    role: "Executive",
    linkedin: "#",
    github: "a-a-a",
  },
  {
    name: "Jahnabi Roy",
    role: "Executive",
    linkedin: "#",
    github: "jrjay",
  },
  {
    name: "Ishika Goyal",
    role: "Executive",
    linkedin: "#",
    github: "ishika18",
  },
];

const OurTeam = () => {
  return (
    <div className="our-team-section">
      <h2 className="section-title">Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <div className="social-links">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
              {member.github && (
                <div className="github-link">
                  <i className="fab fa-github"></i> {member.github}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;