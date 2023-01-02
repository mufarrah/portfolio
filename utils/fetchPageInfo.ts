import axios from "axios";
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const data = await res.data;
    const pageInfo: PageInfo = data.pageInfo;

    console.log("fetching", pageInfo);

    return pageInfo;
}