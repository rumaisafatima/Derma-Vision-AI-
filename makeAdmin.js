import prisma from "./prisma/prismaClient.js";

const makeAdmin = async (email) => {
  try {
    const user = await prisma.user.update({
      where: { email },
      data: { role: "ADMIN" },
    });

    console.log(`User ${user.email} is now an admin!`);
  } catch (error) {
    console.error("Error updating user role:", error);
  } finally {
    await prisma.$disconnect();
  }
};

// Call the function with the email of the user to promote
makeAdmin("rumaisa111@gmail.com");