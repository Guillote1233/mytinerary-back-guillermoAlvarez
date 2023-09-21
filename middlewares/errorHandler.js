const errorHandler = (error, req, res, next) => {
    let status = error.status || 500;
    res.status(status).json({
        sucess: false,
        status: status,
        error: error.message
    })
}

export default errorHandler