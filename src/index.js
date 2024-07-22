//imports config for express
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

//import routes
import { VehiclesRoutes } from "./controllers/vehicles/routes/VehiclesRoutes.js";
import { BrandRouter } from "./controllers/brands/routes/brandRoutes.js";
import { criticRoutes } from "./controllers/critics/routes/criticRoutes.js";
import { ModelRoutes } from "./controllers/models/routes/ModelRoutes.js";
import { usersRoutes } from "./controllers/users/routes/userRoutes.js";
import { PersonRoutes } from "./controllers/person/routes/PersonRoutes.js";
import { EmployeesRoutes } from "./controllers/employees/routes/EmployeesRoutes.js";
import { SucursalRouter } from "./controllers/branch_offices/routers/SucursalRouters.js";

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

app.use(VehiclesRoutes);
app.use(BrandRouter);
app.use(criticRoutes);
app.use(ModelRoutes);
app.use(usersRoutes);
app.use(PersonRoutes);
app.use(EmployeesRoutes);
app.use(SucursalRouter);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
