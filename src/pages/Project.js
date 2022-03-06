import { useParams } from "react-router-dom";
import { getProject } from "../data/projectData";

export default function Project() {
  let params = useParams();
  let project = getProject(parseInt(params.projectId, 10));
  return (
    <h2>Project: {project.title}</h2>);
}