import A_photo from './pink_flower_2.jpeg'
import B_photo from './flowers_square.jpeg'
import Shahar_photo from './shahar_profile.jpg'
import Me_photo from './prof_img.jpeg'

var users = {}
users['aaa'] = {nickName: 'Abba Even with a very long name', password: 'Apass', photo: A_photo,
    contacts: {'bbb': [
            {sender: false, time: '7:32 10.4.22', type: 'text', content: 'hi its my 1\'st message'},
            {sender: true, time: '7:34 10.4.22', type: 'text', content: 'The early history of the territory is unclear.[26]: 104  Modern archaeology has largely discarded the historicity of the narrative in the Torah concerning the patriarchs, The Exodus, and the conquest of Canaan described in the Book of Joshua, and instead views the narrative as constituting the Israelites\' national myth.[69] During the Late Bronze Age (1550–1200 BCE), large parts of Canaan formed vassal states paying tribute to the New Kingdom of Egypt, whose administrative headquarters lay in Gaza.[70]'},
            {sender: false, time: '7:37 10.4.22', type: 'text', content: 'hi its my 2\'st message'}
        ]}
    }
users['bbb'] = {nickName: 'Bracha Achronah', password: 'Bpass', photo: B_photo,
    contacts: {'aaa': [
            {sender: true, time: '7:32 10.4.22', type: 'text', content: 'hi its my 1\'st message'},
            {sender: false, time: '7:34 10.4.22', type: 'text', content: 'The early history of the territory is unclear.[26]: 104  Modern archaeology has largely discarded the historicity of the narrative in the Torah concerning the patriarchs, The Exodus, and the conquest of Canaan described in the Book of Joshua, and instead views the narrative as constituting the Israelites\' national myth.[69] During the Late Bronze Age (1550–1200 BCE), large parts of Canaan formed vassal states paying tribute to the New Kingdom of Egypt, whose administrative headquarters lay in Gaza.[70]'},
            {sender: true, time: '7:37 10.4.22', type: 'text', content: 'hi its my 2\'st message'},
        ],
        'Shahar userName': [
            {sender: true, time: '8:32 10.4.22', type: 'text', content: 'hi to you as well'}
        ]}
    }
users['Shahar userName'] = {nickName: 'Shahar', password: 'Cpass', photo: Shahar_photo, contacts: {}}
users['mmm'] = {nickName: 'Me and my Name', password: 'Dpass', photo: Me_photo, contacts: {}}


export function FindUser(id){
    if (users[id] != null) {
        return true;
    } else
        return false;
}

export function GetUser(myId) {
    var user = users[myId];
    if (user != null)
        return JSON.parse(JSON.stringify(user));
    else
        return null;
}

export function GetPhoto(id) {
    if (users[id] != null) {
        return users[id].photo;
    } 
}

export function GetContacts(myId){
    if (users[myId] != null) {
        var retval = [];
        for (var con in users[myId].contacts) {
            retval.push(con);
        }
        return retval;
    } else {
        return null;
    }
}

export function GetNickName(id){
    if (users[id] != null) {
        return users[id].nickName;
    }
}

export function GetChat(myId, othersId){
    if (users[myId] != null && users[myId].contacts[othersId] != null) {
        return users[myId].contacts[othersId];
    }
}

export function AddContactToUser(user, newContact){
    if (users[user].contacts[newContact] == null)
        users[user].contacts[newContact] = [];
}

export function VerifyPassword(username, password){
    if (users[username].password == password)
        return true;
    return false;
}

export function AddUser(userName, password, nickName, profImg) {
    users[userName] = {nickName: nickName, password: password, photo: profImg, contacts: {}}
}

export function SendTextMessage(fromUser, toContact, time, content) {
    const sentMsg = {sender: true, time: time, type: 'text', content: content}
    const recvMsg = {sender: false, time: time, type: 'text', content: content}

    if (users[fromUser] == undefined && users[toContact == undefined]) {
        return null;
    } else {
        if (!(toContact in users[fromUser].contacts))
            {users[fromUser].contacts[toContact] = [];}
        users[fromUser].contacts[toContact].push(sentMsg);
        if (!(fromUser in users[toContact].contacts))
            {users[toContact].contacts[fromUser] = [];}
        users[toContact].contacts[fromUser].push(recvMsg);
    }
}