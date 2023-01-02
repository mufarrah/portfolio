import axios from "axios";
import { Experience } from "../typings";

export const fetchExperiences = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    const data = await res.data;
    const experiences: Experience[] = data.experiences;

    console.log("fetching", experiences);

    return experiences;
}