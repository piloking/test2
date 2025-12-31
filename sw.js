
const res = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    HELLO LINEJS
</body>
</html>`;

self.addEventListener("fetch", (event) => {
	event.respondWith(
		event.request.url === "https://legy-jp.line-apps.com/api/app"
			? new Response(res, { headers: { "content-type": "text/html" } })
			: fetch(event.request),
	);
});
