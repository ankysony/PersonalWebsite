
// Instantiating the classes made in github.js and ui.js
const github = new Github;
const ui = new UI;

// adding an event when we search anyone in the search bar
document.getElementById('searchUser').addEventListener('keyup', (e) => {
    const text = e.target.value;
    if (text !== '') {

        // getting user from github api
        github.getUser(text).then(text => {
            if (text.profile.message === 'Not Found') {
                ui.showAlert('User not found', 'alert alert-danger');
            }
            else {
                ui.showProfile(text.profile);
                ui.showRepos(text.repos);
            }
        })
    }
    else {

        //clearing the page if nothing is searched on the search bar
        ui.clearPage();
        ui.clearAlert();
    }
});


