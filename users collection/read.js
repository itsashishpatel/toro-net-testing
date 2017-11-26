//list all users
function listAllUsers(){

print(JSON.stringify(db.users.aggregate(), undefined, 4));

}

listAllUsers();

//find user by username
function findByUsername(userName){

print(JSON.stringify(db.users.findOne({"username":userName}), undefined, 4));

}

findByUsername("");

//find user by user id
function findByUserId(userId){

print(JSON.stringify(db.users.findOne({"_id": ObjectId(userId)}), undefined, 4));

}

findByUserId("");

/*
example of how to use 'find' feature using and/or with all 7 user fields
print(JSON.stringify(db.users.find(
{
	$or:
	$and: [
	{"displayName": ""},
	{"email": ""},
	{"username": ""},
	{"password": ""},
	{"question1": ""},
	{"question2": ""},
	{"question3": ""}
	]
}
).toArray()));
*/
