//list all posts
function listAllPosts(){
print(JSON.stringify(db.posts.aggregate(), undefined, 4));
}

listAllPosts();

//find posts by various criteria
function findOnePost(body){

print(JSON.stringify(db.posts.findOne({"body": body}), undefined, 4));
print("Search Successful!");

}

findOnePost("");

//find post by post id
function findByPostId(postId){

print(JSON.stringify(db.posts.findOne({"_id": ObjectId(postId)}), undefined, 4));
print("Search Successful!");

}

findByPostId("");
/*
example of how to use 'find' feature using and/or with all 7 user fields
print(JSON.stringify(db.posts.find(
{
	$or:
	$and: [
	{"user": ""},
	{"title": ""},
	{"body": ""},
	]
}
).toArray()));
*/
