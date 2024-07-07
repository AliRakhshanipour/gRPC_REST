import { ErrorMessages } from "./error.messages.js"

export const allErrorHandler = (app) => {
    app.use((err, req, res, next) => {
        const status = err.status || err.statusCode || 500
        const message = err.msg || err.message || ErrorMessages.ServerError

        res.status(status).json({
            message
        })
    })
}
