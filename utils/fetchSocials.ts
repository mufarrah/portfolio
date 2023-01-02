import axios from "axios";
import { Social } from "../typings";

export const fetchSocial = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    const data = await res.data;
    const socials: Social[] = data.socials;

    console.log("fetching", socials);

    return socials;
}