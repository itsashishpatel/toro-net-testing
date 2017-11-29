// Remove unavailable post

function removeOne(unavailable objectID){

db.posts.remove({"_id": ObjectId(unavailable objectId)});

}




removeOne("");