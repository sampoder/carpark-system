// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  let pickups = await prisma.pickup.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    include: {
      parent: {
        include: {
          children: {
            include: {
              child: true,
            },
          },
        },
      },
    },
  });
  let children = [];
  pickups.map((pickup) => {
    pickup.parent.children.map((child) => {
      child.child.time = pickup.createdAt
      children.push(child.child);
    });
  });
  children.sort((a, b) => b.time.toString().localeCompare(a.time.toString()));
  res.status(200).json(children);
}
