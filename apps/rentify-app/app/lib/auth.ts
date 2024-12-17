import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import db from '../../../../packages/db/index';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
              credentials: {
                email: {label: "Email", type: "text", placeholder:"abc@example.com", required: true},
                password: {label: "Password", type: "text", required: true}
              },

              async authorize(credentials: any){

                const hashedpassword = await bcrypt.hash(credentials.password, 10);
                const existinguser = await db.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if(existinguser){
                    const passwordvalidation = await bcrypt.compare(credentials.password, hashedpassword);
                    if(passwordvalidation) {
                       return {
                        id: existinguser.id.toString(),
                        email: existinguser.email,
                        name: existinguser.name
                       }
                    }
                    return null
                }

                try {
                    const user = await db.user.create({
                        data: {
                            email: credentials.email,
                            password: credentials.password
                        }
                    })
                } catch (e) {
                    console.log(e);
                }
              }
        })
    ]
}