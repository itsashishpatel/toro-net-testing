var numUsers = 2;
var users = [];
var randomString = "";
var string = "";
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
create();
read(users);
updateAll();
//updateNew(users);
removeAll();

function create(){

	var userFields = [];
	for(i = 0; i < numUsers; i++)//value of i controls number of users created
	{
		for(k = 0; k < 7; k++)//value of k indicates number of user fields in array
		{
			randomString = "";
			userFields[k] = generateRandomString();
		}
		var myobj = {displayName: userFields[0], email: userFields[1], username: userFields[2], password: userFields[3], question1: userFields[4], question2: userFields[5], question3: userFields[6]};
		users[i] = myobj;
		db.users.insert(myobj);
	}
	print("Users Inserted Successfully!");
}

function generateRandomString()
	{
		for(j = 0; j < 5; j++)//value of j controls length of randomly generated string
		{
			randomString += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return randomString;
	}

function read(users){
	print("Searching for new Users...");
	for (i = 0; i < numUsers; i++)
	{
		print(JSON.stringify(db.users.findOne({"username":users[i].username}), undefined, 4));
	}
	print("New Users Found Successfully!");
}

function updateAll(){
print("Updating all Users...");
db.users.find().forEach(function (user){
	randomString = "";
	string = generateRandomString();
	
	db.users.update({_id: user._id},
		{$set: {'displayName':string,
			'email':string,
			'username':string,
			'password':string,
			'question1':string,
			'question2':string,
			'question3':string
			}
		});
});
print(JSON.stringify(db.users.aggregate(), undefined, 4));
print("Update made successfully!");
}

function updateNew(users){
print("Updating new Users...");
	for (i = 0; i < numUsers; i++)
	{
		randomString = "";
		string = generateRandomString();
	
		db.users.update({'username': users[i].username},
		{$set: {'displayName':string,
			'email':string,
			'username':string,
			'password':string,
			'question1':string,
			'question2':string,
			'question3':string
			}
		});
	}
print(JSON.stringify(db.users.aggregate(), undefined, 4));
print("Update made successfully!");
}

function removeAll(){

db.users.remove({});
print(JSON.stringify(db.users.aggregate(), undefined, 4));
print("All Users have been removed.");
}

