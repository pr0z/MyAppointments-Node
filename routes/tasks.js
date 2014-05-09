var async = require("async");

module.exports = function(app){

app.get('/Task/GetTasksForUserId/:userId', function(req, res, next){
   console.log(req.params.userId);
   database.collection('TASK').find(
     {
       IdUser : +req.params.userId
     },
     {
       _id : 0
     }
   ).toArray(function(err, results){
     if (err)
       res.send("ERR : nodata");

     res.send(results);
   });
})

app.get('/Task/SyncrhonizeTasksForUserId/:userId/:maxTaskId', function(req, res, next) {
    database.collection('TASK').find(
     {
       Id : { $gt : +req.params.maxTaskId },
       IdUser : +req.params.userId
     },
     {
       _id : 0
     }
    ).toArray(function(err, results){
     if (err)
       res.send("ERR : nodata");

     res.send(results);
   });
})

app.post('/Task/RegisterTask/', function(req, res, next){
    var json = req.body;
    var options = { "sort": [['Id','desc']] };
    var maxId = 0;
    async.parallel([
        function (cb) {
          database.collection('TASK').findOne({}, options , function(err, doc) {
           if (err)
              console.log(err);

            maxId = +doc.Id;
            cb(null);
        }),
        function (cb){
            cb(null);
        }
    }],
        function(){
            maxId++;
            json.Id = maxId;
            console.log(json);

            database.collection('TASK').insert(json, function(err, cursor){
                if (err)
                    console.log(err);
            });

            console.log(json);
            res.json(json);
        }
    );
})
}