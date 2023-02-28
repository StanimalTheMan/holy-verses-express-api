import prisma from "../db";

// Get all
export const getVerses = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      verses: true,
    },
  });

  res.json({ data: user.verses });
};

// Get one
export const getOneVerse = async (req, res) => {
  const id = req.params.id;

  const verse = await prisma.verse.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: verse });
};
