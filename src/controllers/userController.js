const { createInstance, getRateLimit, getRepoLanguages, createAuthInstance,  getRepos, getAuthRepos } = require('../services/authApi');

async function calcAllReposLanguages(api, repos, user){
    var languagesUser= {};
    let index = 0;
    var response = await new Promise(
        async function(resolve, reject){
            for await (const repo of repos){
                if (repo.owner.login !== user) {
                    // você não é dono do repositório e por isso não pode acessar pela api
                }
                else {
                    getRepoLanguages(api, user, repo.name)
                    .then(repoLanguages =>{
                        index++;
                        for (const language in repoLanguages) {
                            languagesUser[language] = (languagesUser[language] || 0 )+ repoLanguages[language];
                        };
                        if (index === repos.length) {
                            var total = 0;
                            for (const language in languagesUser){
                                total += languagesUser[language];
                            }
                            for (const language in languagesUser) {
                                languagesUser[language] = ((languagesUser[language]*100)/total).toFixed(2)+"%";
                            }
                            return resolve(languagesUser);
                        };
                    })
                    .catch(err => reject(err));
                }
            };
        }
    );
    return response;
}

module.exports = {
    async getAuthUserRepos(req, res) {
        const { user, token }= req.query;
        const api = createAuthInstance(token);
        const repos = await getAuthRepos(api);
        if (repos.response) {
            //será chamado caso retorne o erro
            return res.json(repos.response.data)
        }
        const response = await calcAllReposLanguages(api, repos, user);
        return res.json(response);
    },
    async getUserRepos(req, res) {
        const { user }= req.query;
        const api = createInstance();
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
    }
};