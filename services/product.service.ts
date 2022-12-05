import { ProductResponse } from "../types/product.types";
import {AxiosResponse, http} from "./http.service";


export async function getProduct(): Promise<AxiosResponse<ProductResponse>> {
    return await http.get<ProductResponse>("https://api.codingthailand.com/api/course")
}