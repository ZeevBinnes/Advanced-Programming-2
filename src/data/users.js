import A_photo from './pink_flower_2.jpeg'
import B_photo from './flowers_square.jpeg'
import Shahar_photo from './shahar_profile.jpg'
import Me_photo from './prof_img.jpeg'

var users = {}
users['aaa' ] = {nickName: 'Abba Even with a very long name', password: 'Apass', photo: A_photo,
    contacts: {'bbb': [
            {whoSent: 'rec', time: '7:32 10.4.22', type: 'text', content: 'hi its my 1\'st message'},
            {whoSent: 'sent', time: '7:34 10.4.22', type: 'text', content: 'hello there'},
            {whoSent: 'rec', time: '7:37 10.4.22', type: 'text', content: 'hi its my 2\'st message'}
        ]}
    }
users['bbb'] = {nickName: 'Bracha Achronah', password: 'Bpass', photo: B_photo,
    contacts: {'aaa': [
            {whoSent: 'sent', time: '7:32 10.4.22', type: 'text', content: 'hi its my 1\'st message'},
            {whoSent: 'rec', time: '7:34 10.4.22', type: 'text', content: 'hello there'},
            {whoSent: 'sent', time: '7:37 10.4.22', type: 'text', content: 'hi its my 2\'st message'}
        ],
        'Shahar userName': [
            {whoSent: 'sent', time: '8:32 10.4.22', type: 'text', content: 'hi to you as well'}
        ]}
    }
users['Shahar userName'] = {nickName: 'Shahar', password: 'Cpass', photo: Shahar_photo, contects: {}}
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