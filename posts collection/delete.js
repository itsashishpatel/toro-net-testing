//remove single post by post id
function removeOne(objectId){

db.posts.remove({"_id": ObjectId(objectId)});

}

removeOne("");

//remove multiple posts by post id
function removeMany(objectId1, objectId2){

db.posts.remove(
	{
		$or: [
		{"_id": ObjectId(objectId1)}, {"_id": ObjectId(objectId2)}
		]
	}
);
}

removeMany("", "");


//remove post by user
function removeUser(user){

db.posts.remove({'user': user});
print("User posts removed successfully!");

}

removeUser("");

//remove post by title
function removeTitle(title){

db.posts.remove({'title': title});
print("Title posts removed successfully!");

}

removeTitle("");

//remove post by body
function removeBody(body){

db.posts.remove({'body': body});
print("Body posts removed successfully!");

}

removeBody("");
