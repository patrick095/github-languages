const axios = require('axios');

module.exports = {
    async getAuthRepos(api){
        return await api.get('/user/repos')
        .then(res => {return res.data})
        .catch(err => {return err});
    },
    async getRepos(api, user){
        return await api.get('/users/'+user+'/repos')
        .then(res => {return res.data})
        .catch(err => {return err});
    },
    async getRepoLanguages(api, user, repo){
        return await api.get('/repos/'+user+'/'+repo+'/languages')
        .then(res => {return res.data})
        .catch(err => {return err});
    },
    async getRateLimit(api){
        return await api.get('/rate_limit')
        .then(res => {return res.data})
        .catch(err => {return err});
    },
    createAuthInstance(token = ''){
        return axios.create({
            baseURL:'https://api.github.com',
            headers: {
                'Authorization': `token ${token}`,
                'X-OAuth-Scopes': 'repos, user',
                'X-Accepted-OAuth-Scopes': 'user'
            }
        });
    },
    createInstance(){
        return axios.create({
            baseURL:'https://api.github.com'
        });
    }
}