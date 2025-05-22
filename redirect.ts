// redirect.ts

const redirectUrl = "https://smson.online/748fo";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
