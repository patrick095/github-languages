const axios = require('axios');

module.exports = {
    async getRepos(api){
        const repos = await api.get('/user/repos');
        return repos.data;
    },
    async getRepoLanguages(user, repo, api){
        const languages = await api.get('/repos/'+user+'/'+repo+'/languages');
        return languages.data;
    },
    async getRateLimit(api){
        const limit = await api.get('/rate_limit');
        return limit.data;
    },
    createInstance(token = ''){
        return axios.create({
            baseURL:'https://api.github.com',
            headers: {
                'Authorization': `token ${token}`,
                'X-OAuth-Scopes': 'repos, user',
                'X-Accepted-OAuth-Scopes': 'user'
            }
        });
    }
}