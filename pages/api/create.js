// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  let parent = await prisma.parent.create({
    data: {
      id: req.body["parent-id"],
      name: req.body["parent-name"],
    },
  });
  let child = await prisma.child.create({
    data: {
      id: req.body["student-id"],
      name: req.body["student-name"],
      image: req.body["student-image"],
    },
  });
  let relationship = await prisma.childParentRelationship.create({
    data: {
      parentId: parent.id,
      childId: child.id,
    },
  });
  res.status(200).json({ parent, child, relationship });
}
