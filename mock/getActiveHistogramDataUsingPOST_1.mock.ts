// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/customer/quantity/getActiveHistogramData': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
