// var express = require('express');
// var router = express.Router();

// /* GET tasks listing. */
// router.route('/')
// 	.get(function(req, res, next) {
// 		res.send('GET Tasks');
// 	})
// 	.post(function(req, res, next) {
// 		res.send('POST Tasks');
// 	});

// router.route('/GetTasksForUserId/:userId')
// 	.get(function(req, res, next){
// 		console.log(req.params.userId);
// 		database.collection('TASK').find(
// 			{
// 				IdUser : +req.params.userId
// 			},
// 			{
// 				_id : 0
// 			}
// 		).toArray(function(err, results){
// 			if (err)
// 				res.send("ERR : nodata");

// 			res.send(results);
// 		});
// 	})

// router.route('/SyncrhonizeTasksForUserId/:userId/:maxTaskId')
// 	.get(function(req, res, next) {
// 		 database.collection('TASK').find(
// 			{
// 				Id : { $gt : +req.params.maxTaskId },
// 				IdUser : +req.params.userId
// 			},
// 			{
// 				_id : 0
// 			}
// 		).toArray(function(err, results){
// 			if (err)
// 				res.send("ERR : nodata");

// 			res.send(results);
// 		});
// 	})

// router.route('/RegisterTask')
// 	.post(function(req, res, next) {
		 
// 	})	

// router.route("/CreateDocuments")
// 	.get(function(req, res, next){
// 		tasks = [{"Id":1,"IdUser":1,"IdCompany":1,"Title":"Dentiste","DateBegin":"2014-04-26T14:30:00","DateEnd":"2014-04-26T16:00:00","Description":"Rendez-vous chez le dentiste"},{"Id":2,"IdUser":1,"IdCompany":1,"Title":"Garagiste","DateBegin":"2014-04-28T09:00:59","DateEnd":"2014-04-28T12:00:00","Description":"Changement phare voiture"},{"Id":3,"IdUser":1,"IdCompany":1,"Title":"Plombier","DateBegin":"2014-04-15T09:00:00","DateEnd":"2014-04-15T09:30:00","Description":"RDV plombier : SDB"},{"Id":4,"IdUser":1,"IdCompany":1,"Title":"Agence immo.","DateBegin":"2014-04-28T14:00:00","DateEnd":"2014-04-28T17:00:00","Description":"Estimation maison"},{"Id":5,"IdUser":1,"IdCompany":0,"Title":"Rdv docteur Clement","DateBegin":"2014-05-02T11:00:00","DateEnd":"2014-05-02T11:30:00","Description":"Certificat medical foot"},{"Id":7,"IdUser":1,"IdCompany":0,"Title":"France Irlande","DateBegin":"2014-07-12T20:45:00","DateEnd":"2014-07-12T23:30:00","Description":"reserver un bar"},{"Id":8,"IdUser":1,"IdCompany":0,"Title":"Repas voisins","DateBegin":"2014-06-01T12:00:00","DateEnd":"2014-06-01T14:00:00","Description":"nettoyer le salon de jardin"},{"Id":9,"IdUser":1,"IdCompany":0,"Title":"Grand prix Monaco","DateBegin":"2014-08-16T16:17:25","DateEnd":"2014-08-17T16:17:25","Description":"penser aux boules quies"},{"Id":10,"IdUser":1,"IdCompany":1,"Title":"Anniversaire clément","DateBegin":"2014-04-30T21:30:00","DateEnd":"2014-04-30T23:00:00","Description":"rdv café oz"},{"Id":11,"IdUser":1,"IdCompany":1,"Title":"Repas Aline","DateBegin":"2014-04-30T19:00:00","DateEnd":"2014-04-30T21:00:00","Description":"miam miam"},{"Id":1008,"IdUser":1,"IdCompany":0,"Title":"Rdv mairie de senlis","DateBegin":"2014-05-10T11:30:00","DateEnd":"2014-05-10T12:30:00","Description":"demande permis international"},{"Id":1009,"IdUser":1,"IdCompany":0,"Title":"Etat des lieux","DateBegin":"2014-06-26T14:30:00","DateEnd":"2014-06-26T16:30:00","Description":"Pensez à tous les documents"},{"Id":1010,"IdUser":1,"IdCompany":0,"Title":"Reunion pedagogique","DateBegin":"2014-05-02T14:25:00","DateEnd":"2014-05-02T14:55:00","Description":"Preparer docs"},{"Id":1011,"IdUser":1,"IdCompany":0,"Title":"Grosse cuite","DateBegin":"2014-05-08T20:00:00","DateEnd":"2014-05-08T21:30:00","Description":"Acheter du rhum "}];

//    		database.collection('TASK').insert(tasks, function(err, cursor) {
//    			if(err)
//    				console.log(err);
//    		});

// 		res.send('tâches enregistrées');	
// 	}
// )

// module.exports = router;
