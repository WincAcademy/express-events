import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";

const createCategory = async (name) => {
  const prisma = new PrismaClient();
  const newCategory = {
    id: uuidv4(),
    name,
  };

  const category = await prisma.category.create({
    data: newCategory,
  });

  return category;
};

export default createCategory;
