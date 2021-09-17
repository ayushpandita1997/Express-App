var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const { response } = require('../app');
const StudentModel = require('../Models/student.model');
const {stuGet,stuPost,getStuFromDB,getStuByName,getStuById,updateUser,delUser,delUserById} = require('../controllers/students-controller');

/* GET users listing. */

router.get('/',stuGet);

router.post('/add',stuPost);

router.get('/see',getStuFromDB);

router.get('/seebyname',getStuByName);

router.get('/seebyid',getStuById);

router.put('/update',updateUser);

router.delete('/delete',delUser);

router.delete('/deleteId',delUserById);



module.exports = router;
