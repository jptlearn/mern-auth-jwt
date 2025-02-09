import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/errorHandler";
import connectToDatabase from "./config/db";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import authRoutes from "./routes/auth.routes";
import catchErrors from "./utils/catchErrors";
import { OK } from "./constants/http";
import authenticate from "./middlewares/authenticate";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";

const app = express();

// add middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

// health check
app.get(
  "/",
  catchErrors(async (req: Request, res: Response) => {
    return res.status(OK).json({
      status: "healthy",
    });
  })
);

// auth routes
app.use("/auth", authRoutes);

// protected routes
app.use("/user", authenticate, userRoutes);
app.use("/sessions", authenticate, sessionRoutes);

// error handler
app.use(errorHandler);

// start and check database connection
app.listen(PORT, async () => {
  console.log(`Server is running in port ${PORT} in ${NODE_ENV} environment.`);
  await connectToDatabase();
});
