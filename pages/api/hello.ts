// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '../../lib/db'
import { Province } from '../../models/province.model'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const provinceRepository = (await connectDB()).getRepository(Province)
  const provinces = await provinceRepository.find

  res.status(200).json(provinces)
}
