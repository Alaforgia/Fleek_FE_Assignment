// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getCharacter } from "../../src/utils/characters";

type Data = {
  id: number;
  // name: string;
};

const rick = getCharacter(1);

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { query } = req.body as { query: number };
  try {
    // const rick = getCharacter(query);
    // res.status(200).json({
    //   post: req.query.id,
    //   rick,
    // });
  } catch (e) {
    res.status(400);
  }
}
