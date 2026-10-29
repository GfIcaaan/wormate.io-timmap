// Worker: file statis (client/) dilayani Cloudflare, sisanya diteruskan ke server di PC lewat Tunnel.
export default {
  async fetch(request, env) {
    const incoming = new URL(request.url);
    const target = new URL(env.TUNNEL_ORIGIN);
    const url = new URL(incoming.pathname + incoming.search, target);

    const headers = new Headers(request.headers);
    headers.set("X-Forwarded-Host", incoming.host);
    headers.set("X-Forwarded-Proto", "https");

    try {
      return await fetch(new Request(url, new Request(request, { headers })));
    } catch (e) {
      return new Response("Server game di PC tidak bisa dihubungi (cek npm start & cloudflared).", { status: 502 });
    }
  },
};
