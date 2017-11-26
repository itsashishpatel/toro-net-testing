//update all information for a user
function updateAll(objectId, displayName, eMail, userName, password, question1, question2, question3){
db.users.update({"_id": ObjectId(objectId)},
		{$set: {'displayName':displayName,
			'email':eMail,
			'username':userName,
			'password':password,
			'question1':question1,
			'question2':question2,
			'question3':question3
		}
});

print("Update made successfully!");

}

updateAll("", "", "", "", "", "", "", "");

//update email & username
function updateEmailUsername(objectId, eMail, userName){

db.users.update({"_id": ObjectId(objectId)},

		{$set: {'email':eMail,
			'username':userName
		}
});

print("Update made successfully!");

}

updateEmailUsername("", "", "");

//update displayName

function updateDisplayName(objectId, displayName){

db.users.update({"_id": ObjectId(objectId)},{$set: {'displayName':displayName}});
print("Update made successfully!");

}

updateDisplayName("", "");
