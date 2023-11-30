import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "t3c/env";
import { appRouter } from "t3c/server/api/root";
import { createTRPCContext } from "t3c/server/api/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
