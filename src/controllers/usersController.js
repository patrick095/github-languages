const { createInstance, getRateLimit, getRepoLanguages, getRepos } = require('../services/api')

module.exports = {
    async getUserRepos(req, res) {
        const { user, token }= req.query;
        const api = createInstance(token);
        // const limit = await getRateLimit(api);
        var languagesUser= {};
        const repos = await getRepos(api);
        var index = 0
        for await (const repo of repos) {
            getRepoLanguages(user, repo.name, api).then(repoLanguages =>{
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
                    return res.json(languagesUser);
                };
            });
        };
    }
};