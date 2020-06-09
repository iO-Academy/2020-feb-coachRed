"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const coachModel_1 = require("../models/coachModel");
const sendEmail_1 = require("../helpers/sendEmail");
const validators_1 = require("../helpers/validators");
const BCrypt = require("bcrypt");
function sendFormInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let aCoach = req.body;
        yield BCrypt.hash(aCoach.password, 10, (err, hash) => __awaiter(this, void 0, void 0, function* () {
            aCoach.password = hash;
            if (yield validators_1.default(aCoach)) {
                try {
                    let coach = new coachModel_1.default(aCoach);
                    coach.save();
                    sendEmail_1.default(aCoach);
                    res.status(200).json({
                        status: 'success',
                        message: 'coach successfully added',
                        data: coach
                    });
                }
                catch (error) {
                    res.status(500).json({
                        status: 'unsuccessful',
                        message: 'coach not registered',
                        data: {
                            error: error
                        }
                    });
                }
            }
            else {
                res.status(400).json({
                    status: 'unsuccessful',
                    message: 'coach not registered data not validated',
                    data: {}
                });
            }
        }));
    });
}
exports.default = sendFormInfo;
