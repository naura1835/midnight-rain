import { NextApiRequest, NextApiResponse } from "next";
import { object, string, number } from "yup";

let userSchema = object({
  name: string().required(),
  email: string().required(),
  password: number().required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      //use yup for input validation here
      const { name, email, password } = req.body;
      const newUser = { name, email, password };
      const user = await userSchema.validate(newUser);

      //   if()
    } catch (err) {
      console.log(err);
    }
  }
}
