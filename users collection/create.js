function create(number){

var randomString = "";
var userFields = [];

var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for(i = 0; i < number; i++)//value of i controls number of users created
{
	for(k = 0; k < 7; k++)//value of k indicates number of user fields in array
	{
	randomString = "";
	userFields[k] = generateRandomString();
	}
	var myobj = {displayName: userFields[0], email: userFields[1], username: userFields[2], password: userFields[3], question1: userFields[4], question2: userFields[5], question3: userFields[6]};
	db.users.insert(myobj);
}
function generateRandomString()
{
	for(j = 0; j < 5; j++)//value of j controls length of randomly generated string
	{
		randomString += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return randomString;
}
print("Users Inserted Successfully!");
}

create();
