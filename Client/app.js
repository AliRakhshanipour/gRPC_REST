import e from "express"
import { MainRoutes } from "./routes/index.routes.js"

const main = () => {
    const app = e()
    app.use(e.json())
    app.use(e.urlencoded({ extended: true }))

    app.use(MainRoutes)
    app.listen(4000, () => {
        console.log("server is runnig on http://localhost:4000");
    })
}

main()