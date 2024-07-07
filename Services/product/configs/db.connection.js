import { connect } from "mongoose";

export default connect("mongodb://localhost:27017/grpc-nodejs").then(() => {
    console.log("connected to db");
}).catch(err => {
    console.log(err.message);
})