// making a class of github to take data from github api
class Github {
    constructor() {
        this.client_id = '07bb08c1993cb75222e1';
        this.client_secret = 'f05ffc2ef4bb0ac535e7edc92db1e8e9c2cffa6d';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
    }


    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            //returning to the app.js by a object literal
            profile,
            repos
        }
    }

}
