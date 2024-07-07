import { Router } from "express"
import { ProductRoutes } from "./product.routes.js"
const router = Router()
router.use(ProductRoutes)
export { router as MainRoutes }