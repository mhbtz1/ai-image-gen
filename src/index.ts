import { Hono } from 'hono'
import { serve } from '@hono/node-server'


const app = new Hono()

app.get('/', async (c) => {
    // Picture of a dog
    const inputs = {
      prompt: "cyberpunk cat",
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

})

export default app
