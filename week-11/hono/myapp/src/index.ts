import { Hono } from 'hono'

const app = new Hono()

app.get('/', async(c) => {
  const body = await c.req.json();
  console.log(body);

  const header = c.req.header("Authorization")?.split(" ")[1];
  const params = c.req.query("param");
  return c.json({message: 'Hello Hono!', header: header, param: params, body: body })
})

export default app 
