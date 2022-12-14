// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { countBlog, findAllBlog } from '../../../services/blog.service'




// localhost:4000/api/blog/
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>)
{
    const { query: { page, pageSize } } = req
    const blogs = await findAllBlog(Number(page), Number(pageSize))
    const totalRecord = await countBlog()
    res.status(200).json({
        total: totalRecord,
        blogs: blogs
    })
}
