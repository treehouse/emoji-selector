const key = '4904071080a3a378fed80c61462647a72507e5be';
const allEmojis = `https://emoji-api.com/emojis?access_key=${key}`
const emojiCategory = `https://emoji-api.com/categories?access_key=${key}`


const alphabet = 'abcdefghjklmnopqrstuvwxyz';
let textArr = [];

fetch(allEmojis)
    .then((response) => response.json())
    .then((data) => createEmoji(data));

function createEmoji(emoji) {
    const emojiContainer = document.querySelector('.emoji-container ul');

    emoji.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `&#x${item.codePoint};`
        emojiContainer.appendChild(li);
    });

    const emojis = document.querySelectorAll('.emoji-section li');
    emojis.forEach((emoji) => {
        textArr.push(emoji.textContent.toLowerCase().split(""));
        textArr.forEach((text, index) => {
            text.forEach(letter => {
                if (alphabet.includes(letter)) {
                    emojis[index].style.display = 'none';
                }
            });
        });
    });

    const emojiTitle = document.querySelector('.emoji-section .title');
    emojiTitle.textContent = 'Showing all emojis';    
}

const form = document.querySelector('form');
const formInput = form.querySelector('input');
form.addEventListener('submit', e => {
    e.preventDefault();
    if (formInput.value !== '') {
        createChat(formInput.value);
        formInput.value = '';
    }
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









const emojiIcon = document.querySelector('.emoji-toggle');
const emojiSelector = document.querySelector('.emoji-selector')
emojiIcon.addEventListener('click', e => {
    emojiSelector.classList.toggle('active');
});
formInput.addEventListener('click', () => {
    emojiSelector.classList.remove('active');
})