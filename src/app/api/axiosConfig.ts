

import axios from "axios";

import env from "@/lib/env";


export default axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL, 
});