import A_photo from './pink_flower_2.jpeg'
import B_photo from './flowers_square.jpeg'
import Shahar_photo from './shahar_profile.jpg'
import Me_photo from './prof_img.jpeg'

import snowVideo from './snowVideo.mp4'
import pdfFile from './ex1PdfFile.pdf'
import record from './record1.ogg'


const users = {};
users['aaa'] = {nickName: 'Abba Even with a very long name', password: 'Apass', photo: A_photo,
    contacts: {'bbb': [
            {sender: true, time: '7:32 10.4.22', type: 'text', content: 'hi its my 1\'st message'},
            {sender: false, time: '7:34 10.4.22', type: 'text', content: 'The early history of the territory is unclear.[26]: 104  Modern archaeology has largely discarded the historicity of the narrative in the Torah concerning the patriarchs, The Exodus, and the conquest of Canaan described in the Book of Joshua, and instead views the narrative as constituting the Israelites\' national myth.[69] During the Late Bronze Age (1550–1200 BCE), large parts of Canaan formed vassal states paying tribute to the New Kingdom of Egypt, whose administrative headquarters lay in Gaza.[70]'},
            {sender: true, time: '7:37 10.4.22', type: 'text', content: 'hi its my 2\'st message'}
        ]}
    }
users['bbb'] = {nickName: 'Bracha Achronah', password: 'Bpass', photo: B_photo,
    contacts: {'aaa': [
            {sender: false, time: '7:32 10.4.22', type: 'text', content: 'hi its my 1\'st message'},
            {sender: true, time: '7:34 10.4.22', type: 'text', content: 'The early history of the territory is unclear.[26]: 104  Modern archaeology has largely discarded the historicity of the narrative in the Torah concerning the patriarchs, The Exodus, and the conquest of Canaan described in the Book of Joshua, and instead views the narrative as constituting the Israelites\' national myth.[69] During the Late Bronze Age (1550–1200 BCE), large parts of Canaan formed vassal states paying tribute to the New Kingdom of Egypt, whose administrative headquarters lay in Gaza.[70]'},
            {sender: false, time: '7:37 10.4.22', type: 'text', content: 'hi its my 2\'st message'},
        ],
        'Shahar userName': [
            {sender: true, time: '8:32 10.4.22', type: 'text', content: 'hi to you as well'},
            {sender: true, time: '8:37 10.4.22', type: 'image', content: Shahar_photo},
            {sender: true, time: '8:37 10.4.22', type: 'image', content: B_photo},
            {sender: false, time: '8:39 10.4.22', type: 'video', content: snowVideo},
            {sender: false, time: '8:39 10.4.22', type: 'file', content: pdfFile, fileName: 'ew1PdfFile'},
            {sender: false, time: '8:50 10.4.22', type: 'audio', content: record}
        ]}
    }
users['Shahar userName'] = {nickName: 'Shahar', password: 'Cpass', photo: Shahar_photo, contacts: {}}
users['mmm'] = {nickName: 'Me and my Name', password: 'Dpass', photo: Me_photo, contacts: {}}
users['q'] = {nickName: 'Me and my Name', password: 'Dpass', photo: Me_photo, contacts: {}}
users['w'] = {nickName: 'Me and my Name', password: 'Dpass', photo: Me_photo, contacts: {}}
users['e'] = {nickName: 'Me and my Name', password: 'Dpass', photo: Me_photo, contacts: {}}
users['r'] = {nickName: 'Me and my Name', password: 'Dpass', photo: Me_photo, contacts: {}}
users['t'] = {nickName: 'Me and my Name', password: 'Dpass', photo: Me_photo, contacts: {}}
users['y'] = {nickName: 'Me and my Name', password: 'Dpass', photo: Me_photo, contacts: {}}
users['u'] = {nickName: 'Me and my Name', password: 'Dpass', photo: Me_photo, contacts: {}}


export function FindUser(id){
    return users[id] != null;
}

export function GetUser(myId) {
    const user = users[myId];
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
        const retval = [];
        for (let con in users[myId].contacts) {
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
    return users[username].password == password;

}

export function AddUser(userName, password, nickName, profImg) {
    users[userName] = {nickName: nickName, password: password, photo: profImg, contacts: {}}
}

export function SendMessage(fromUser, toContact, time, type, content, fileName) {
    const sentMsg = {sender: false, time: time, type: type, content: content, fileName: fileName}
    const recvMsg = {sender: true, time: time, type: type, content: content, fileName: fileName}

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