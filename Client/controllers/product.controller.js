import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";
import autoBind from "auto-bind";

// Get the directory name of the current module using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

console.log(__dirname);
// Construct the path to product.proto using __dirname
const protoPath = path.resolve(__dirname,
    "..", "..",
    "Protos/product.proto");

const productProto = protoLoader.loadSync(protoPath);
const { productPackage } = grpc.loadPackageDefinition(productProto);
const productServiceUrl = "localhost:4001";

export const ProductController = (() => {
    class ProductController {
        constructor() {
            autoBind(this);
            this.client = new productPackage
                .ProductService(
                    productServiceUrl,
                    grpc.credentials.createInsecure()
                );
        }

        async listProduct(req, res, next) {
            try {
                this.client.listProduct(null, (error, data) => {
                    if (error) {
                        return res.json({ error })
                    }
                    return res.json(data)
                })
            } catch (error) {
                next(error)
            }
        }

        async getProduct(req, res, next) { }
        async newProduct(req, res, next) {
            try {
                const { title, price } = req.body
                this.client.newProduct({ title, price }, (error, data) => {
                    if (error) return res.json({ error });

                    return res.json({ data })
                })

            } catch (error) {
                next(error)
            }
        }
        async updateProduct(req, res, next) { }
        async deleteProduct(req, res, next) { }
    }
    return new ProductController()
})()