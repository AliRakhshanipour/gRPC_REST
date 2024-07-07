import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    id: { type: Number },
    title: { type: String },
    price: { type: String },
});

ProductSchema.pre("save", async function (next) {
    try {
        const count = await this.constructor.countDocuments();
        this.id = count + 1;
        next();
    } catch (err) {
        next(err);
    }
});

export const ProductModel = model("product", ProductSchema);
