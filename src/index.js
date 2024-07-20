//imports config for express
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

//import routes
import { VehiclesRoutes } from "./controllers/vehicles/routes/VehiclesRoutes.js";
import { ImageRoutes } from "./controllers/images/routes/ImagesRoutes.js";
import { PersonRoutes } from "./controllers/person/routes/PersonRoutes.js";

//express config
const app = express();
const port = 3000;

//use middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

//use routes
app.use(ImageRoutes);
app.use(VehiclesRoutes);
app.use(PersonRoutes);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
