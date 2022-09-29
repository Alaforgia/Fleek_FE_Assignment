// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { query } = req.body as { query: string };
  res.status(200).json({ name: "Working?" });
  res.send({name: "Hello world!"});
}
