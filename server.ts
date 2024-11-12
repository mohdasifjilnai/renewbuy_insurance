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

  server.get(
    "*.*",
    express.static(browserDistFolder, {
      maxAge: "6h",
    })
  );

  server.get("*", (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
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
  const server = app();
  const httpServer = server.listen(port, () => {
    console.log(
      `Node Express server listening on http://localhost:${port}`,
      server
    );
  });

  const wss = new WebSocketServer({ server: httpServer });

  // Handle WebSocket connections
  wss.on("connection", (ws, req) => {
    // Log headers and cookies for debugging
    console.log("Headers on WebSocket connection:", req.headers);

    // Parse cookies from the WebSocket handshake
    const cookies = cookie.parse(req.headers.cookie || "");
    const token = cookies["access_token"];
    const tokenFrom = "insurance";  // A static value you had in the previous code
    const username = cookies["username"];

    // Send token data on WebSocket connection
    ws.on("message", (message) => {
      const data = JSON.parse(message.toString());

      if (data.type === "tokenRequest") {
        ws.send(
          JSON.stringify({
            type: "tokenResponse",
            token: token || "No token found",  // Return token or default message
            name: username || "",               // Return username or empty string
            token_from: tokenFrom,
          })
        );
      }
    });

    // Log WebSocket disconnection
    ws.on("close", () => {
      console.log("WebSocket client disconnected");
    });
  });
}

run();
