// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/fin/get': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
