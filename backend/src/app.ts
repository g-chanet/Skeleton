import { Server } from "socket.io";
import express from "express";
import * as configs from "./configs";
import * as router from "./routes";

//==================================
//  OPTS SERVER
//==================================
const port = configs.env.get("SERVER_PORT") || 3000;

//==================================
//  INIT SERVER
//==================================
const app = express();
const { isHttps, server } = configs.createServer(app);

//==================================
//  INIT SOCKET
//==================================
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

//==================================
//  API SERVICES
//==================================
app.use("/auth", router.authRoute);

//==================================
//  API REST
//==================================
app.use("/user", router.userRoute);
// app.use("/mail", router.mailRoute);
// app.use("/msg", router.msgRoute);
// ...

//==================================
//  START SERVER
//==================================
app.listen(port, async () => {
  const proto = isHttps ? "https" : "http";
  const host = `${proto}://localhost:${port}`;
  configs.log.info(`Server is running at ${host}`);
  configs.checkSSL();
});
