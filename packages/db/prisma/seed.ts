import { PrismaClient, Gender } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      name: "Alice Doe",
      email: "alice@example.com",
      phone: "1234567890",
      age: 28,
      gender: Gender.Female,
      password: "securepassword1",
      items: {
        create: [
          {
            name: "Electric Drill",
            description: "High power electric drill for DIY tasks.",
            imgLink: "https://example.com/drill.jpg",
            rent_amount: 30,
            rentedFor: 7,
            location: "New York",
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "John Smith",
      email: "john@example.com",
      phone: "9876543210",
      age: 35,
      gender: Gender.Male,
      password: "securepassword2",
      items: {
        create: [
          {
            name: "Mountain Bike",
            description: "Sturdy mountain bike for outdoor adventures.",
            imgLink: "https://example.com/bike.jpg",
            rent_amount: 50,
            rentedFor: 14,
            location: "Los Angeles",
          },
          {
            name: "Lawn Mower",
            description: "Efficient lawn mower for small yards.",
            imgLink: "https://example.com/mower.jpg",
            rent_amount: 20,
            rentedFor: 3,
            location: "Los Angeles",
          },
        ],
      },
    },
  });

  // Seed Reviews
  await prisma.reviews.createMany({
    data: [
      {
        userId: user1.id,
        itemId: 1, // Assuming item id 1 exists
      },
      {
        userId: user2.id,
        itemId: 2, // Assuming item id 2 exists
      },
      {
        userId: user1.id,
        itemId: 2, // Multiple users reviewing the same item
      },
    ],
  });

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
