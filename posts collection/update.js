//update title
function updateTitle(objectId, title){

db.posts.update({"_id": ObjectId(objectId)},{$set: {'title':title}});
print("Update made successfully!");

}

updateTitle("", "");

//update body
function updateBody(objectId, body){

db.posts.update({"_id": ObjectId(objectId)},{$set: {'body':body}});
print("Update made successfully!");

}

updateBody("", "");
