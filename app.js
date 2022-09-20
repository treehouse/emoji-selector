// const key = '4904071080a3a378fed80c61462647a72507e5be';

// // all endpoints
// const fullApi = `https://emoji-api.com/emojis?access_key=${key}`;

// // search
// const searchApi = `https://emoji-api.com/emojis?search=computer&access_key=${key}`







//   const form = document.querySelector('form');
//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     let value = e.target.querySelector('input').value;
//     fetch(`https://emoji-api.com/emojis?search=${value}&access_key=${key}`)
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//   })


const form = document.querySelector('form');
const formInput = form.querySelector('input');
form.addEventListener('submit', e => {
    e.preventDefault();
    createChat(formInput.value);
    formInput.value = '';
})

function createChat(chatValue) {
    const chats = document.getElementById('chats');
    const newChat = document.createElement('li');
    const newChat_avatar = document.createElement('div');
    newChat_avatar.classList = 'user-avatar';
    const newChat_copy = document.createElement('p');
    newChat_copy.textContent = chatValue;
    newChat.appendChild(newChat_avatar);
    newChat.appendChild(newChat_copy);
    chats.appendChild(newChat);
    chats.scrollTop = chats.scrollHeight;
}