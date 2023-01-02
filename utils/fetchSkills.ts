import axios from "axios";
import { Skill } from "../typings";

export const fetchSkills = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
    const data = await res.data;
    const skills: Skill[] = data.skills;

    console.log("fetching", skills);

    return skills;
}