import grpc from "@grpc/grpc-js"
import protoLoader from "@grpc/proto-loader"
import path from "path"

import autoBind from "auto-bind";


const protoPath = path.join("../", "../", "Protos", "product.proto")
const productProto = protoLoader.loadSync(protoPath)
const { productPackage } = grpc.loadPackageDefinition(productProto)

const productServiceUrl = "localhost:4002";

const productClient = new productPackage.PrductService(productServiceUrl, grpc.credentials.createInsecure())

export const ProductController = (() => {
    class ProductController {
        constructor() {
            autoBind(this)
        }

        async listProduct(req, res, next) { }
        async getProduct(req, res, next) { }
        async newProduct(req, res, next) { }
        async updateProduct(req, res, next) { }
        async deleteProduct(req, res, next) { }
    }
    return new ProductController()
})()