//remove unregistered user

function removeDisplayName(FrankSinatra){

db.users.remove({'displayName': FrankSinatra});

}

removeDisplayName("");


//search for removed user

function removeUserId(1234){

db.users.remove({"_id": ObjectId(1234)});

}

function findByUserId(1234){

print(JSON.stringify(db.users.findOne({"_id": ObjectId(1234)}), undefined, 4));

}

findByUserId("");


//