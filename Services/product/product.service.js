import "./configs/db.connection.js"
import grpc from "@grpc/grpc-js"
import protoLoader from "@grpc/proto-loader"
import path from "path"
import { deleteProduct, getProduct, listProduct, newProduct, updateProduct } from "./funcs/product.grpc.js"

const protoPath = path.join("../", "../", "Protos", "product.proto")

const productProto = protoLoader.loadSync(protoPath)

const { productPackage } = grpc.loadPackageDefinition(productProto)

const productServiceUrl = "localhost:4001";


const main = () => {
    const server = new grpc.Server();
    server.addService(productPackage.ProductService.service, {
        listProduct,
        getProduct,
        newProduct,
        updateProduct,
        deleteProduct
    })

    server.bindAsync(productServiceUrl,
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if (err) {
                return console.log(err.message);
            }
            console.log("gRPC ProductService running on port: ", port);
        })

}

main()