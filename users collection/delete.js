//remove user by user id
function removeUserId(userId){

db.users.remove({"_id": ObjectId(userId)});

}

removeUserId("");

//remove user by displayName
function removeDisplayName(displayName){

db.users.remove({'displayName': displayName});

}

removeDisplayName("");



//remove user by email
function removeEmail(eMail){

db.users.remove({'email': eMail});

}

removeEmail("");


//remove user by username
function removeUsername(userName){

db.users.remove({'username': userName});

}

removeUsername("");


//remove user by password
function removePassword(password){

db.users.remove({'password': password});

}

removePassword("");


//remove user by question1
function removeQuestion1(question1){

db.users.remove({'question1': question1});

}

removeQuestion1("");

//remove user by question2
function removeQuestion2(question2){

db.users.remove({'question2': question2});

}

removeQuestion2("");


//remove user by question3
function removeQuestion3(question3){

db.users.remove({'question3': question3});

}

removeQuestion3("");

