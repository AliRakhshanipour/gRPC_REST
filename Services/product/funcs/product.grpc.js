import { ProductModel } from "../models/product.model.js";

export async function listProduct(call, cb) {
    try {
        const products = await ProductModel.find({})
        cb(null, { products })
    } catch (error) {
        cb(error, null)
    }
}
export async function getProduct(call, cb) {
    try {
        const { id } = call.request
        const product = await ProductModel.findOne({ id })
        if (!product) {
            const err = new Error("no product found with this id")
            cb(err, null)
        }
        cb(null, product)
    } catch (error) {
        cb(error, null)
    }
}

export async function newProduct(call, cb) {
    try {
        const { title, price } = call.request

        await ProductModel.create({ title, price })
        cb(null, { status: "created" })
    } catch (error) {
        cb(error, null)
    }
}
export async function deleteProduct(call, cb) {
    try {
        const {
            id
        } = call.request
        const product = await ProductModel.findOne({ id })
        if (!product) {
            const error = new Error("no product found with this id to delete it")
            cb(error, null);
        }

        await product.deleteOne()
        cb(null, {
            status: "product deleted"
        })
    } catch (error) {
        cb(error, null)
    }
}
export async function updateProduct(call, cb) {
    try {
        const { id, price, title } = call.request
        const product = await ProductModel.findOne({ id })
        if (!product) {
            const error = new Error("no product found with this id to update it")
            cb(error, null);
        }
        await product.updateOne({ price, title })
        await product.save()

        cb(null, { status: "product updated successfully" })
    } catch (error) {
        cb(error, null)
    }
}

