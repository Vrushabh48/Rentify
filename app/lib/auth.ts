
import CredentialsProvider from 'next-auth/providers/credentials'
import { AuthOptions } from "next-auth";
import bcrypt from 'bcrypt'
import prisma from '../../db'

const db = prisma;

export const authOptions: AuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "abc@example.com", type: "text", placeholder: "1231231231", required: true },
          password: { label: "Password", type: "password", required: true },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Phone number and password are required");
          }
  
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
  
          const existingUser = await db.user.findFirst({
            where: {
              email: credentials.email,
            },
          });
  
          if (existingUser) {
            const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
            if (passwordValidation) {
              return {
                id: existingUser.id.toString(),
                name: existingUser.name,
                email: existingUser.email,
              };
            }
            throw new Error("Invalid credentials");
          }
  
          try {
            const user = await db.user.create({
              data: {
                email: credentials.email,
                password: hashedPassword,
              },
            });
  
            return {
              id: user.id.toString(),
              name: user.name,
              email: user.email,
            };
          } catch (e) {
            console.error(e);
            throw new Error("Error creating user");
          }
        },
      }),
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
      async session({ token, session }) {
        if (token?.sub) {
          session.user.id = token.sub;
        }
        return session;
      },
    },
  };
  
  declare module "next-auth" {
    interface Session {
      user: {
        id: string;
        name: string | null;
        email: string | null;
      };
    }
  
    interface User {
      id: string;
      name: string | null;
      email: string | null;
    }
  }
  
  declare module "next-auth/jwt" {
    interface JWT {
      sub: string;
    }
  }
  