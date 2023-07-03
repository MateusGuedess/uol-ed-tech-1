import { cache } from "react";
import { QueryClient } from "react-query";

const getQueryclient = cache(() => new QueryClient());

export default getQueryclient;
