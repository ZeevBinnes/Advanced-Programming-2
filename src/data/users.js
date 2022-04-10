import A_photo from './pink_flower_2.jpeg'
import B_photo from './flowers_square.jpeg'
import Shahar_photo from './shahar_prophile.jpg'
import Me_photo from './proph_img.jpeg'

var users = {}
users['Abba Even with a very long name' ] = {id: 'Abba Even with a very long name', password: 'A-pass', photo: A_photo,
    contacts: [
        {id: 'Bracha Achronah', chat: [
            {whoSent: 'rec', time: '7:32 10.4.22', type: 'text', content: 'hi its my 1\'st message'},
            {whoSent: 'sent', time: '7:34 10.4.22', type: 'text', content: 'hello there'},
            {whoSent: 'rec', time: '7:37 10.4.22', type: 'text', content: 'hi its my 2\'st message'}
        ]}
    ]}
users['Bracha Achronah'] = {id: 'Bracha Achronah', password: 'B-pass', photo: B_photo,
    contacts: [
        {id: 'Abba Even with a very long name', chat: [
            {whoSent: 'sent', time: '7:32 10.4.22', type: 'text', content: 'hi its my 1\'st message'},
            {whoSent: 'rec', time: '7:34 10.4.22', type: 'text', content: 'hello there'},
            {whoSent: 'sent', time: '7:37 10.4.22', type: 'text', content: 'hi its my 2\'st message'}
        ]},
        {id: 'Shahar Hamelech!!!11', chat: [
            {whoSent: 'sent', time: '8:32 10.4.22', type: 'text', content: 'hi to you as well'}
        ]}
    ]}
users['Shahar Hamelech!!!11'] = {id: 'Shahar Hamelech!!!11', password: 'C-pass', photo: Shahar_photo, contects: []}
users['Me and my Name'] = {id: 'Me and my Name', password: 'D-pass', photo: Me_photo, contacts: []}


export function GetUser(myId) {
    var user = users[myId];
    if (user != null)
        return JSON.parse(JSON.stringify(user));
    else
        return null;
}

export function GetPhoto(myId) {
    return users[myId].photo;
}

export function SetContacts(myId, contactsId) {
    users[myId].contects += [{id: contactsId, chat: []}];
}

