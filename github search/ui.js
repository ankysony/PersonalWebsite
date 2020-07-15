class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        const created = user.created_at.substr(0, 10);
        this.profile.innerHTML = `
        <div class="jumbotron" id="profile" style="margin: 3rem">
            <h3 class="page-heading mb-3">${(user.login).toUpperCase()}</h1>
            <div class="card card-body mb-3">
                <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2 rounded" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-info p-2 m-1">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary p-2 m-1">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success p-2 m-1">Followers: ${user.followers}</span>
                    <span class="badge badge-warning p-2 m-1">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                    <li class="list-group-item ">Company: ${user.company}</li>
                    <li class="list-group-item">Website: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${created}</li>
                    </ul>
                </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">LATEST REPOSITORIES</h3>
            <div id="repos"></div>
        </div>
        `;
    }
    showRepos(repos) {
        let output = '';

        repos.forEach(function (repo) {
            output += `
                <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-info p-2 m-1">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary p-2 m-1">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success p-2 m-1">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
                </div>
            `;
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;
    }
    showAlert(message, className) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.error');
        const pro = document.getElementById('profile');
        
        container.insertBefore(div, pro);

        setTimeout(() => {
            this.clearAlert();
        },3000)
    }
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }
    clearPage() {
        this.profile.innerHTML = '';
    }
}