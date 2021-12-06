// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/common/bookmark/save': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
