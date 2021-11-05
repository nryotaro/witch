import type { NextApiRequest, NextApiResponse } from 'next';
import { UserProfile } from '../../libs/profile';


export default function handler(req: NextApiRequest, res: NextApiResponse<UserProfile>) {
  if(req.method == 'POST') {
    res.status(201).json(req.body.json);
  } 
}
