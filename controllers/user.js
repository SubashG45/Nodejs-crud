exports.createUser = function(req, res){
    console.log('Post user to be send');
    const user = req.body

    users.push({...user, id:uuidv4()});

    res.send(`User with the name ${user.firstName} added to the database!`);
}


