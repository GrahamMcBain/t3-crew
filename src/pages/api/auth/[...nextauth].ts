import NextAuth from "next-auth";

import { authOptions } from "t3c/server/auth";

export default NextAuth(authOptions);
