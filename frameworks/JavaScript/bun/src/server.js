export default {
    port: 8080,
    fetch(request) {
        const url = new URL(request.url);

        switch(url.pathname) {
            case '/plaintext':
                return new Response("Hello, World!", {
                    headers: {
                        Server: 'bun',
                        Date: new Date().toUTCString(),
                        'Content-Type': 'text/plain'
                    }
                });
            case '/json':
                return new Response(JSON.stringify({ message: 'Hello, World!' }), {
                    headers: {
                        Server: 'bun',
                        Date: new Date().toUTCString(),
                        'Content-Type': 'application/json'
                    }
                });
            default:
                return new Response("Not found", {
                    status: 404,
                    headers: {
                        Server: 'bun',
                        Date: new Date().toUTCString(),
                        'Content-Type': 'text/plain'
                    }
                });
        }
    },
  };