/*
 * @Author: your name
 * @Date: 2021-09-29 18:11:24
 * @LastEditTime: 2021-10-11 18:11:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \csc-admin\mock\getAccountByPagedUsingPOST.mock.ts
 */
// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/test/getAccountByPaged': (req: Request, res: Response) => {
    res.status(500).send({
      errorMessage: 'fdklsjfaklsd',
      showType: 2,
    });
  },
};
