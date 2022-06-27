// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  let pickup = await prisma.pickup.create({
    data: {
      parentId: parseInt(req.body["parent-id"] || req.query["parent-id"])
    },
  });
  res.status(200).json({ pickup });
}
