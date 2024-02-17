import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentilas",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = { email: "" };
        if (user) return user;
        else return null;
      },
    }),
  ],
});

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     try {
//       const { email, password } = req.body;
//       // await signIn('credentials, {email, password})

//       res.status(200).json({ success: true });
//     } catch (error: any) {
//       if (error.type === "CredentialsSignin") {
//         res.status(401).json({ error: "Invalid credentials." });
//       } else {
//         res.status(500).json({ error: "Something went wrong." });
//       }
//     }
//   }
// }
