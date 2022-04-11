import A_photo from './pink_flower_2.jpeg'
import B_photo from './flowers_square.jpeg'
import Shahar_photo from './shahar_prophile.jpg'
import Me_photo from './proph_img.jpeg'

var users = {}
users['Abba Even userName' ] = {nickName: 'Abba Even with a very long name', password: 'A-pass', photo: A_photo,
    contacts: {'Bracha Achronah userName': [
            {whoSent: 'rec', time: '7:32 10.4.22', type: 'text', content: 'hi its my 1\'st message'},
            {whoSent: 'sent', time: '7:34 10.4.22', type: 'text', content: 'hello there'},
            {whoSent: 'rec', time: '7:37 10.4.22', type: 'text', content: 'hi its my 2\'st message'}
        ]}
    }
users['bbb'] = {nickName: 'Bracha Achronah', password: 'B-pass', photo: B_photo,
    contacts: {'Abba Even userName': [
            {whoSent: 'sent', time: '7:32 10.4.22', type: 'text', content: 'hi its my 1\'st message'},
            {whoSent: 'rec', time: '7:34 10.4.22', type: 'text', content: 'hello there'},
            {whoSent: 'sent', time: '7:37 10.4.22', type: 'text', content: 'hi its my 2\'st message'}
        ],
        'Shahar userName': [
            {whoSent: 'sent', time: '8:32 10.4.22', type: 'text', content: 'hi to you as well'}
        ]}
    }
users['Shahar userName'] = {nickName: 'Shahar Hamelech!!!11', password: 'C-pass', photo: Shahar_photo, contects: {}}
users['userName userName'] = {nickName: 'Me and my Name', password: 'D-pass', photo: Me_photo, contacts: {}}


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

//export function SetContacts(myId, contactsId) {
//    users[myId].contects += [{id: contactsId, chat: []}];
//}

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
