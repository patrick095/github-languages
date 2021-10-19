const express = require('express');
const cors = require('cors');

const { createInstance, getAuthRepos } = require('./services/api');
const calcAllReposLanguages = require('./controllers/calcAllReposLanguages');

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

app.get('/api', async function (req, res) {
    const { user }= req.query;
    const api = createInstance('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');
    const repos = await getAuthRepos(api);
    if (repos.response) {
        //será chamado caso retorne o erro
        return res.json(repos.response.data)
    }
    const response = await calcAllReposLanguages(api, repos, user);
    return res.json(response);
});

module.exports = app;