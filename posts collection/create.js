function create(number){

var randomString = "";
var postFields = [];

var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for(i = 0; i < number; i++)//value of i controls number of posts created
{
	for(k = 0; k < 3; k++)//value of k indicates number of fields
	{
	randomString = "";
	postFields[k] = generateRandomString();
	}
	var myobj = {user: postFields[0], title: postFields[1], body: postFields[2]};
	db.posts.insert(myobj);
}
function generateRandomString()
{
	for(j = 0; j < 5; j++)//value of j controls length of randomly generated string
	{
		randomString += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return randomString;
}
print("Posts Created Successfully!");
}

create();
