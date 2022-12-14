import { DeleteResult, UpdateResult } from "typeorm";
import { connectDB } from "../lib/db";
import { Province } from "../models/province.model";



export async function findAllProvince(): Promise<Province[]> {
    const provinceRepository = (await connectDB()).getRepository(Province)
    return await provinceRepository.find({order: {id: 'DESC'}})
}

export async function findByIdProvince(id: number): Promise<Province | null> {
    const provinceRepository = (await connectDB()).getRepository(Province)
    return await provinceRepository.findOneBy({id: id})
}

export async function createProvince(name: string): Promise<Province | null> {
    const provinceRepository = (await connectDB()).getRepository(Province)
    const province = provinceRepository.create({name: name})
    const newProvince = await provinceRepository.save(province)
    return newProvince
}

export async function updateProvince(id: number, name: string): Promise<UpdateResult> {
    const provinceRepository = (await connectDB()).getRepository(Province)
    return await provinceRepository.update(id, {name : name})
}

export async function deleteProvince(id: number): Promise<DeleteResult> {
    const provinceRepository = (await connectDB()).getRepository(Province)
    return await provinceRepository.delete(id)
}