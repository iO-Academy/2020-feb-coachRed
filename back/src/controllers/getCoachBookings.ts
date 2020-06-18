// import express = require('express')
// import Bookings from '../models/bookingModel'


// export default (req : express.Request, res : express.Response) => {
//     try{
//         Bookings.findOne().then((booking) =>{
//             res.status(200).json({
//                 status: 'success',
//                 results: booking.length,
//                 data: {}
//             })
//         })
//     } catch (err) {
//         res.status(404).json({
//             status: 'fail',
//             message: err
//         })
//     }
// }