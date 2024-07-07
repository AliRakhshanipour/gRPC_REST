import { ProductModel } from "../models/product.model.js";

export async function listProduct(call, cb) {
    try {
        const products = await ProductModel.find({})
        cb(null, { products })
    } catch (error) {
        cb(error, null)
    }
}
export async function getProduct(call, cb) { }
export async function newProduct(call, cb) {
    try {
        const { title, price } = call.request
        await ProductModel.create({ title, price })
        cb(null, { status: "created" })
    } catch (error) {
        cb(error, null)
    }
}
export async function updateProduct(call, cb) { }
export async function deleteProduct(call, cb) { }

