import express = require('express')


export default (req : express.Request, res : express.Response) => {
    try {
            res.status(200).json({
                status: 'success',
                message: 'Successfully created time slot',
                data: {
                    token: req.header('Authorization').split(' ')[1]
                }
            })
        } catch (err) {
            res.status(404).json({
                status: 'fail',
                message: err
            })
    }
}