import mongoose, { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    id: { type: Number },
    title: { type: String },
    price: { type: String },
})

ProductSchema.pre("save", (next) => {
    const self = this
    self.constructor.count(async (err, data) => {
        if (err) return next(err);
        model.set({ id: (data + 1) })
        next()
    })
})

export const ProductModel = model("product", ProductSchema)
