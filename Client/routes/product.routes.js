import { Router } from "express"
import { ProductController } from "../controllers/product.controller.js"
const router = Router()

router.get("/list", ProductController.listProduct)
router.post("/create", ProductController.newProduct)
router.get("/update", ProductController.updateProduct)
router.get("/delete/:id", ProductController.deleteProduct)
router.get("/:id", ProductController.getProduct)

export { router as ProductRoutes }