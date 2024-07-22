import locationsController from "/LocationsController";
import { Router } from "express";

const router = Router();

router.get("/locations", locationsController.getRegisters);
router.get("/location", locations.getRegister);
router.post("/locations", locationsController.createRegister);
router.patch("/location", locationsController.updateRegister);

export { router as locationsController};