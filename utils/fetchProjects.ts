import axios from "axios";
import { Project } from "../typings";

export const fetchProjects = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    const data = await res.data;
    const projects: Project[] = data.projects;

    console.log("fetching", projects);

    return projects;
}