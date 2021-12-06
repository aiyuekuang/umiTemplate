// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/test/getEmployeeDTO': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
