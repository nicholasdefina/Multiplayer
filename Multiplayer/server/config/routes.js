var path = require('path');
var pets = require('../controllers/user.js')

module.exports = function(app){  //exporting routes

    app.post('/api/users', function(req, res){  //create user route
        console.log("at routes for create user")
        pets.create(req, res)
    })  
    // app.get('/api/users', function(req, res){  //get all users route
    //     pets.getAll(res, res)
    // })
    // app.delete('/api/users/:id', function(req, res){  //delete user
    //     pets.deleteUser(req, res)
    // })
    // app.get('/api/users/:id', function(req, res){  //find specific user by id
    //     pets.getUserById(req, res)
    // })
    // app.put('/api/users/:id', function(req, res){  //update user by id
    //     console.log("at the routes for update")
    //     pets.updateUser(req, res)
    // })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))  //route for exceptions
      });
}