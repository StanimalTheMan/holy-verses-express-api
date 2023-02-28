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

export const createVerse = async (req, res) => {
  const verse = await prisma.verse.create({
    data: {
      content: req.body.content,
      book: req.body.book,
      chapter: req.body.chapter,
      translation: req.body.translation,
      verses: req.body.verses,
      belongsToId: req.user.id,
      updatedAt: new Date().toISOString(),
    },
  });

  res.json({ data: verse });
};

export const updateVerse = async (req, res) => {
  const updatedData = {};
  // probs a better way to optionally add to data
  if (req.body.content) {
    updatedData["content"] = req.body.content;
  }
  if (req.body.book) {
    updatedData["book"] = req.body.book;
  }
  if (req.body.chapter) {
    updatedData["chapter"] = req.body.chapter;
  }
  if (req.body.translation) {
    updatedData["translation"] = req.body.translation;
  }
  if (req.body.verses) {
    updatedData["verses"] = req.body.verses;
  }
  const updated = await prisma.verse.update({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
    data: updatedData,
  });

  res.json({ data: updated });
};

export const deleteVerse = async (req, res) => {
  const deleted = await prisma.verse.delete({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
  });

  res.json({ data: deleted });
};
