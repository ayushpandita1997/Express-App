var mongoose = require('mongoose');
const { response, router } = require('../app');
const StudentModel = require('../Models/student.model');
const Joi = require('@hapi/joi');



//get//
const stuGet = function(req, res, next) {
    res.render('index', { title: 'Node.js' , ID: "1."});
  };


//post//
 const stuPost =  function(req, res, next) {
  
//Data Validator//
  const joiSchema = Joi.object({
    stuFirstName: Joi.string().min(8).required(),
      stuLastName: Joi.string().min(8).required(),
      stuAge: Joi.number().min(8).required(),
      stuID: Joi.number().min(8).required(),
      stuDOB: Joi.string().min(12).required()
  });
  const joiData = joiSchema.validate(req.body);
  res.send(joiData);

    let newStudent = new StudentModel({
      stuFirstName: req.body.stuFirstName,
      stuLastName: req.body.stuLastName,
      stuAge: req.body.stuAge,
      stuID: req.body.stuID,
      stuDOB: req.body.stuDOB
    });
    newStudent.save(function(err,message){
  if(err)
  res.send(err,{message: "user cannot be added"});
  else
  res.send({status:200,message: "user added successfully",studentObj: newStudent});
    });
  };
//get//
  const getStuFromDB = function(req, res, next) {
    StudentModel.find(function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200,students: response});
      });
    };
//get by name//
  const getStuByName = function(req, res, next) {
    const fName = req.query.stuFirstName;
    StudentModel.find({stuFirstName:fName},function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200,students: response});
      });
    };

//get by ID//
const getStuById = function(req, res, next) {
    const id = req.query.id;
    StudentModel.findById(id,function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200,students: response});
      });
    };

//update//
const updateUser = function(req, res, next) {
    const id = req.query.id;
    const fname = req.query.stuFirstName;
    const lname = req.query.stuLastName;
    const age = req.query.stuAge;
    const sID = req.query.stuID;
    StudentModel.findByIdAndUpdate(id,{stuFirstName:fname,stuLastName:lname,stuAge:age,stuID:sID},function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200,students: response});
      });
    };

  //delete//
const delUser = function(req, res, next) {
    const id = req.query.id;
    StudentModel.findByIdAndDelete(id,function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200,students: response});
      });
    };

      //delete by id//
const delUserById = function(req, res, next) {
    const id = req.query.id;
    StudentModel.findByIdAndRemove(id,function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200,students: response});
      });
    };

    module.exports.stuGet = stuGet;
    module.exports.stuPost = stuPost;
    module.exports.getStuFromDB = getStuFromDB;
    module.exports.getStuByName = getStuByName;
    module.exports.getStuById = getStuById;
    module.exports.updateUser = updateUser;
    module.exports.delUser = delUser;
    module.exports.delUserById = delUserById