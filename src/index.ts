import { Hono } from "hono";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const app = new Hono();

//set CORS for get requests to allow frontend to make requests to the backend


const allow_frontend = cors({
  origin: "*",
  allowMethods: ["GET"],
});
app.use(allow_frontend);


app.get(
  "/",
  zValidator("query", z.object({ prompt: z.string() })),
  async (c) => {
    // Picture of a dog
    const { prompt } = c.req.valid("query");
    const inputs = {
      prompt,
    };

    const response = await c.env.AI.run(
      "@cf/bytedance/stable-diffusion-xl-lightning",
      inputs
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  }
);

export default app;
