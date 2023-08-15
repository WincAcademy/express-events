import { PrismaClient } from "@prisma/client";

const updateUserById = async (id, updatedUser) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.updateMany({
    where: { id },
    data: updatedUser,
  });

  console.log(user);
  return user.count > 0 ? id : null;
};

export default updateUserById;
