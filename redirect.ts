// redirect.ts

const redirectUrl = "http://srv233619.hoster-test.ru/red";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
