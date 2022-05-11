const listUsers = document.getElementsByClassName('list_users')[0]
const inputMsg = document.querySelector(".input_message");
const chatArea = document.getElementsByClassName('chat')[0]

const users = [
    {
        id: 1,
        name: "Vasiliy"
    },
    {
        id: 2,
        name: "Mary"
    },
    {
        id: 3,
        name: "Nikolay"
    },
    {
        id: 4,
        name: "Tatyna"
    },
    {
        id: 5,
        name: "Peter"
    },
    {
        id: 6,
        name: "Vasiliy"
    },
    {
        id: 7,
        name: "Mary"
    },
    {
        id: 8,
        name: "Nikolay"
    },
    {
        id: 9,
        name: "Tatyna"
    },
    {
        id: 10,
        name: "Peter"
    },
    {
        id: 11,
        name: "Peter"
    },
    {
        id: 12,
        name: "Vasiliy"
    },
    {
        id: 13,
        name: "Mary"
    },
    {
        id: 14,
        name: "Nikolay"
    },
    {
        id: 15,
        name: "Tatyna"
    },
    {
        id: 16,
        name: "Peter"
    }
];

inputMsg.addEventListener('change', e => {
    sendMsg(inputMsg.value, 'message_client');
    sayBot();
    console.log(e.which)
});

function sendMsg(text, sender) {
    chatArea.innerHTML += `
    <div class="message ${sender}">
        <div class="message__text">
            ${text}
        </div>
    </div>`;
    inputMsg.value = '';
};

function sayBot() {
    const messageRobot = [
        'Кто тут?',
        'Где ваша совесть?',
        'К сожалению  все операторы сейчас заняты! Не пишите нам больше!',
        'Вы не купили не одного товара, что б так с нами разговаривать!',
        'Добрый день! До свидания!',
        'Мы нечего не будем вам продавать!',
        'Где ваша совесть?'
    ];
    let index = Math.floor(Math.random() * messageRobot.length);
    chatArea.innerHTML += `
    <div class="message">
        <div class="message__text">
            ${messageRobot[index]}
        </div>
    </div>`;
}

function getListContent() {
    let fragment = new DocumentFragment();

    for (let i = 0; i < users.length; i++) {
        let li = document.createElement('li');
        li.className = "user"
        li.append(users[i].name);
        fragment.append(li);
    }
    return fragment
}

listUsers.append(getListContent())



