// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { type } from 'os'
import { Province } from '../../../models/province.model'
import { deleteProvince, findByIdProvince, updateProvince } from '../../../services/province.service'

type ApiErrorResponse = { 
  message: string
}

// localhost:4000/api/province/1
export default async function handler(req: NextApiRequest ,res: NextApiResponse<Province | ApiErrorResponse>) 
{
    const {query: { id },method,} = req

      switch (method) {
        case 'GET':
          try {
            const province = await findByIdProvince(+id!)
          if (!province) {
            res.status(404).json({message: "Not Found"})
          }
          res.status(200).json(province!)
          } catch (error) {
            res.status(500).json({message: "Error"})
          }
          break
        case 'PUT':
          const {body: {name}} = req
          const UpdateResult = await updateProvince(+id!, name)
          if (UpdateResult.affected === 0) {
            res.status(400).json({ message: "Edit Error"})
          }
          res.status(200).json({ message: "Edit Success"})
          break
        case 'DELETE':
          const deleteResult = await deleteProvince(+id!)
          if(deleteResult.affected === 0) {
            res.status(400).json({ message: "Delete Error"})
          }
          res.status(200).json({ message : "Delete Success"})
          break
        default:
          res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
          res.status(405).end(`Method ${method} Not Allowed`)
      }

}
