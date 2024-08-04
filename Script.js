window.Telegram.WebApp.ready();

const tg = window.Telegram.WebApp;
const mainButton = document.getElementById('mainButton');
const userInfoDiv = document.getElementById('userInfo');

function updateTheme() {
    if (tg.colorScheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

tg.onEvent('themeChanged', updateTheme);
updateTheme();

mainButton.addEventListener('click', () => {
    const user = tg.initDataUnsafe.user;
    if (user) {
        userInfoDiv.innerHTML = `
            <p><strong>Username:</strong> ${user.username}</p>
            <img src="${user.photo_url}" alt="Profile Picture" width="100" height="100">
        `;
    } else {
        userInfoDiv.innerHTML = '<p>No user data available.</p>';
    }
});

tg.MainButton.show();
tg.MainButton.setParams({
    text: 'Settings',
});

tg.MainButton.onClick(() => {
    alert('Hi');
});

tg.BackButton.show();
tg.BackButton.onClick(() => {
    userInfoDiv.innerHTML = '';
});
