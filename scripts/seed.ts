const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Web Development" },
        { name: "Machine Learning/AI" },
        { name: "Data Science" },
        { name: "Data Engineering" },
        { name: "Cloud" },
        { name: "CyberSecurity" },
        { name: "Others" },
        { name: "CS Fundamentals" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();