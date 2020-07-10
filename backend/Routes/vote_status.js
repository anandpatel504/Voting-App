module.exports = (app, knex) => {
    app.get("/result", (req, res) => {
        knex.select('*').from('candidate')
        .where('vote', 'Yes')
        .then((data) => {
            console.log(data);
            knex.select('*').from('candidate')
            .where('vote', 'No')
            .then((result) => {
                res.send({Yes: data.length, No: result.length})
            })
            .catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });
    })
}