function loginWithGitHub() {
    // Replace with your GitHub OAuth App details
    const clientId = '2b3625c2bd71538e9587';
    const clientSecret = '79522918c2f2783e4f5858bdcfdaa5d1a070e5ae';
    const redirectUri = 'https://opensrc-sites.vercel.app/index.html';
    const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&scope=user`;

    // Open GitHub login popup
    window.open(githubLoginUrl, '_blank', 'width=600,height=600');

    // Set up an event listener to handle the callback after successful login
    window.addEventListener('message', (event) => {
        if (event.origin === window.location.origin) {
            const { type, data } = event.data;

            if (type === 'githubLogin') {
                displayUserInfo(data);
            }
        }
    });
}
function displayUserInfo(userData) {
    const userInfoContainer = document.getElementById('userInfo');
    userInfoContainer.innerHTML = `
        <p>Username: ${userData.login}</p>
        <img src="${userData.avatar_url}" alt="Profile Picture">
    `;
}
