import { hashPassword, createJWT, comparePasswords } from "./../modules/auth";
import prisma from "../db";

export const createNewUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password),
        theme: "Dark",
      },
    });
    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    e.type = "input";
    next(e);
  }
};

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  console.log(user);

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "Invalid username or password" });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
