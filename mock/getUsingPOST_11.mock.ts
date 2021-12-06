// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/item/price/get': (req: Request, res: Response) => {
    res.status(200).send({
      code: 1,
      data: {
        total: 100,
        item: [
          { id: '111', title: '1', value: '11' },
          { id: '22', title: '22', value: '22' },
        ],
      },
    });
  },
};
