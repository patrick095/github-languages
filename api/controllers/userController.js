const { createInstance, getRateLimit, getRepoLanguages,  getRepos, getAuthRepos } = require('../services/api');
const calcAllReposLanguages = require('./calcAllReposLanguages');

module.exports = {
    async getAuthUserRepos(req, res) {
        const { user, token }= req.query;
        const api = createInstance(token);
        const repos = await getAuthRepos(api);
        if (repos.response) {
            //será chamado caso retorne o erro
            return res.json(repos.response.data)
        }
        const response = await calcAllReposLanguages(api, repos, user);
        return res.json(response);
    },
    async getUserRepos(req, res) {
        const { user, token }= req.query;
        const api = createInstance(token);
        const repos = await getRepos(api, user);
        if (repos.response) {
            //será chamado caso retorne o erro
            const limit = await getRateLimit(api);
            return res.json({
                message: repos.response.data.message,
                limit: limit.rate.limit,
                remaining: limit.rate.remaining,
                used: limit.rate.used
            })
        }
        const response = await calcAllReposLanguages(api, repos, user);
        return res.json(response);
    },
    async getLimit(req,res){
        const api = createInstance();
        const limit = await getRateLimit(api);
            return res.json({
                limit: limit.rate.limit,
                remaining: limit.rate.remaining,
                used: limit.rate.used
            })
    }
};