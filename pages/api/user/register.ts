// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { findByEmailUser, registerUser } from '../../../services/user.service'




// localhost:4000/api/user/register
export default async function handler(req: NextApiRequest ,res: NextApiResponse<any>) 
{
    const { body: { fullname, email, password },method,} = req

      switch (method) {
        case 'POST':
            //check email
            const userExist = await findByEmailUser(email)
            if (userExist !== null) {
                res.status(400).json({ message: "Email has already been registered"})
            }
            const user = await registerUser({fullname, email, password})
            res.status(201).json({
                message: "Register Success",
                data: user
            })
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
      }

}
