var express = require('express');
var router = express.Router();
var accountModel = require('../models/account');

/* API calls */

/* create new account */
router.post('/account', function(req, res, next) {
 	try{

 		var account = new accountModel({
 			name : req.body.name,
 			gender : req.body.gender,
 			age : req.body.age
 		});

 		account.save(function(err){
 			if(err)
 				res.send(err);

 			res.json({message:'Created account', data:account});
 		})
 	} catch(error){
 		next(error)
 	}
});

/* list all accounts*/
router.get('/account',function(req,res,next){
	try{
		accountModel.find(function(err,data){
			if(err)
				res.send(err);

			res.json({message:'Listing all accounts', data:data});
		})

	} catch(error){
		next(error)
	}
});

/* list account after filter */
/*router.get('/account',function(req,res,next){
	try{
		accountModel.find(function(err,data){
			if(err)
				res.send(err);

			res.json({message:'Listing all accounts', data:data});
		})

	} catch(error){
		next(error)
	}
})*/

module.exports = router;
