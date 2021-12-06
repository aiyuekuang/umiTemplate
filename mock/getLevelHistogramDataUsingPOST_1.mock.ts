// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/customer/quantity/getLevelHistogramData': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
