import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/card.jsx';
import { Button } from "@/components/ui/button.jsx";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ imageUrl, projectUrl, projectName }) => {
    return (
        <Card className=" max-w-xs  border-y-2  glass hover:border-y-green-300 rounded-tr-2xl rounded-tl-2xl  shadow-md shadow-lg transition-shadow duration-300 mx-auto">
            <CardHeader>
                <img
                    src={imageUrl}
                    alt={projectName}
                    className="w-full h-36 object-cover rounded-t-lg"
                />
            </CardHeader>
            <CardContent className="p-2">
                <h3 className="text-lg font-bold">{projectName}</h3>
                <p className="mt-1 text-sm">
                    This project showcases the incredible work done by our society. Click the button below to learn more!
                </p>
            </CardContent>
            <CardFooter className="flex flex-row justify-center gap-2 p-2">
                <Button
                    as="a"
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 text-white hover:bg-blue-700 transition-colors duration-300 text-sm"
                >
                    View Project <SiGithub />
                </Button>

                <Button
                    as="a"
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 text-sm"
                >
                    Website <FaExternalLinkAlt />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;