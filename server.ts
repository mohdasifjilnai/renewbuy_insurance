import { APP_BASE_HREF } from "@angular/common";
import { CommonEngine } from "@angular/ssr";
import express from "express";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import bootstrap from "./src/main.server";
import { WebSocketServer } from "ws";
import * as cookie from "cookie"; // Import cookie as a namespace

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, "../browser");
  const indexHtml = join(serverDistFolder, "index.server.html");

  const commonEngine = new CommonEngine();

  server.set("view engine", "html");
  server.set("views", browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });

  // Serve static files from /browser
  server.get(
    "*.*",
    express.static(browserDistFolder, {
      maxAge: "6h",
    })
  );

  // All regular routes use the Angular engine
  server.get("*", (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    const logCookies = () => {
      const cookies = cookie.parse(req.headers.cookie || "");
      const token = cookies["access_token"] || "No token found";
      const name = cookies["username"] || "";
      console.log("Current Cookies:", { token, name });
    };

    logCookies();

    // Set an interval to log cookies every 5 seconds
    const cookieInterval = setInterval(logCookies, 5000);

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env["PORT"] || 4001;

  // Start up the Node server
  const server = app();
  const httpServer = server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });

  // Create WebSocket server on top of the HTTP server
  const wss = new WebSocketServer({ server: httpServer });

  // Handle WebSocket connections
  wss.on("connection", (ws, req) => {
    // Parse cookies from request headers
    console.log("Headers on connection:", req.headers);

    // const cookies = cookie.parse(req.headers.cookie || '');
    // const token = cookies['authToken']; // Replace 'authToken' with the actual token name
    // const cookies = cookie.parse(req.headers.cookie || "");
    // const token = `${cookies["access_token"]}`;
     const tokenfron = "renewbuy";
    // const name = `${cookies["username"]}`;

    let token = "";
    let name = "";
    const logCookies = () => {
      const cookies = cookie.parse(req.headers.cookie || "");
      token = cookies["access_token"] || "No token found";
      name = cookies["username"] || "";
      console.log("Current Cookies (WebSocket):", { token, name });
    };

    logCookies(); // Log cookies immediately on WebSocket connection

    // Set an interval to log cookies every 5 seconds after WebSocket connection
    const cookieInterval = setInterval(logCookies, 5000);

    // Handle messages received from WebSocket clients
    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());
      console.log(cookie.parse(req.headers.cookie || ""));

      if (data.type === "tokenRequest") {
        // Respond with the token from cookies
        ws.send(
          JSON.stringify({
            type: "tokenResponse",
            token: token || "No token found",
            name: name || "",
            token_fron: tokenfron,
          })
        );
      }
    });

    // Log when a WebSocket connection is closed
    ws.on("close", () => {
      console.log("WebSocket client disconnected");
    });
  });
}

run();
