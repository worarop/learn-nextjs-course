import { connectDB } from "../lib/db";
import { Blog } from "../models/blog.model";




export async function findAllBlog(page = 1, pageSize = 3): Promise<any> {
    const blogRepository = (await connectDB()).getRepository(Blog)
    return await blogRepository.find(
        {
            // select: {
            //     id: true,
            //     topic: true,
            //     user: {
            //         id: true,
            //         fullname: true
            //     }
            // },
            relations: {
                user: true
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
            order: {id: 'DESC'}
        }
        )
}

export async function countBlog(): Promise<number> {
    const blogRepository = (await connectDB()).getRepository(Blog)
    return await blogRepository.count()
}

// export async function findAllBlog(): Promise<any> {
//     const blogRepository = (await connectDB()).getRepository(Blog)
//     return await blogRepository.createQueryBuilder("blog")
//     .innerJoinAndSelect('blog.user', 'user')
//     .select(["blog", "user.id", "user.fullname"])
//     .getMany()
// }