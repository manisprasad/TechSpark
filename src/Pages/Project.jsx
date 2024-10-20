import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import img from "../../public/images/img.png"; // Import the ProjectCard component
import {Carousel} from "@/components/ui/carousel.jsx";

const projects = [
    {
        imageUrl: "https://example.com/project1-image.jpg",
        projectUrl: "https://example.com/project1",
        projectName: "Awesome Project 1",
    },
    {
        imageUrl: img,
        projectUrl: "https://example.com/project2",
        projectName: "Awesome Project 2",
    },
    {
        imageUrl: "https://example.com/project3-image.jpg",
        projectUrl: "https://example.com/project3",
        projectName: "Awesome Project 3",
    },
    {
        imageUrl: img,
        projectUrl: "https://example.com/project2",
        projectName: "Awesome Project 2",
    },{
        imageUrl: img,
        projectUrl: "https://example.com/project2",
        projectName: "Awesome Project 2",
    },{
        imageUrl: img,
        projectUrl: "https://example.com/project2",
        projectName: "Awesome Project 2",
    },{
        imageUrl: img,
        projectUrl: "https://example.com/project2",
        projectName: "Awesome Project 2",
    },{
        imageUrl: img,
        projectUrl: "https://example.com/project2",
        projectName: "Awesome Project 2",
    },{
        imageUrl: img,
        projectUrl: "https://example.com/project2",
        projectName: "Awesome Project 2",
    },{
        imageUrl: img,
        projectUrl: "https://example.com/project2",
        projectName: "Awesome Project 2",
    },{
        imageUrl: img,
        projectUrl: "https://example.com/project2",
        projectName: "Awesome Project 2",
    },
    // ...other projects
];

const ShowProjects = () => {
    return (
        <>
            <h1 className={`text-4xl gradient-shade text-center pb-2 font-semibold relative`}>
                Our Projects

            </h1>
            <div className="grid px-2 grid-cols-1 sm:grid-cols-2 mt-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imageUrl={project.imageUrl}
                        projectUrl={project.projectUrl}
                        projectName={project.projectName}
                    />
                ))}
            </div>
            <Carousel />
        </>
    );
};

export default ShowProjects;
