import { ErrorMessages } from "./error.messages.js"

export const notFoundHandler = (app) => {
    app.use((req, res, next) => {
        const status = 404
        const message = ErrorMessages.NotFoundPage

        res.status(status).json({
            message
        })
    })
}
