// redirect.ts

const redirectUrl = "https://smson.online/6qyw5";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
