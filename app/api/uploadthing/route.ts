import { createRouteHandler } from "uploadthing/server";
import { ourFileRouter } from "./core";

export const handler = createRouteHandler({ router: ourFileRouter });

export { handler as GET, handler as POST };
