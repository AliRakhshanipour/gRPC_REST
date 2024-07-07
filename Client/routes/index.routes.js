import { Router } from "express"
import { ProductRoutes } from "./product.routes.js"
const router = Router()
router.use("/product", ProductRoutes)

export { router as MainRoutes }