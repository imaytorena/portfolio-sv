export default {
    async fetch(request, env) {
        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
            "Access-Control-Max-Age": "86400",
        };

        async function handleRequest(request) {
            const token = request.headers.get('CF-TURNSTILE-TOKEN');
            const ip = request.headers.get('CF-Connecting-IP');

            // Validate the token by calling the "/siteverify" API.
            let formData = new FormData();
            formData.append('secret', env.SECRET_KEY);
            formData.append('response', token);
            formData.append('remoteip', ip);

            const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
                body: formData,
                method: 'POST',
            });

            const outcome = await result.json();

            if (!outcome.success) {
                console.error({outcome});
                return new Response(JSON.stringify({message: 'The provided Turnstile token was not valid!'}), {status: 400});
            }

            const {name, email, message} = await request.json()
            const webhook_url = `${env.WEBHOOOK_URL}${env.WEBHOOOK_CHANNEL_ID}/${env.WEBHOOOK_TOKEN}?wait=true`
            let discordMessage = await fetch(webhook_url, {
                method: "POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({
                    content: "@here\n" +
                        `**${name}**\n` +
                        `*${email}*\n` +
                        `\n${message}`
                })
            });
            // console.log(discordMessage);

            if (!discordMessage.ok) {
                console.error({discordMessage});
                return new Response(JSON.stringify({message: 'The message service is not available now'}), {status: 400});
            }
            // The Turnstile token was successfuly validated. Proceed with your application logic.
            // Validate login, redirect user, etc.
            // For this demo, we just echo the "/siteverify" response:
            console.log(outcome);
            return new Response(JSON.stringify({
                message: 'Message was successfuly sent!!'
            }), {status: 200});
        }

        async function handleOptions(request) {
            if (
                request.headers.get("Origin") !== null &&
                request.headers.get("Access-Control-Request-Method") !== null &&
                request.headers.get("Access-Control-Request-Headers") !== null
            ) {
                // Handle CORS preflight requests.
                return new Response(null, {
                    headers: {
                        ...corsHeaders,
                        "Access-Control-Allow-Headers": request.headers.get(
                            "Access-Control-Request-Headers",
                        ),
                    },
                });
            } else {
                // Handle standard OPTIONS request.
                return new Response(null, {
                    headers: {
                        Allow: "GET, HEAD, POST, OPTIONS",
                    },
                });
            }
        }

        if (request.method === "OPTIONS") {
            // Handle CORS preflight requests
            return handleOptions(request);
        } else if (
            request.method === "GET" ||
            request.method === "HEAD" ||
            request.method === "POST"
        ) {
            // Handle requests to the API server
            return handleRequest(request);
        } else {
            return new Response(null, {
                status: 405,
                statusText: "Method Not Allowed",
            });
        }
    },
};