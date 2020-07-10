module.exports = (app, jwt, knex) => {
    app.post("/candidate_register", (req, res) =>{
        if (req.body.name === "" || req.body.email === ""){
            console.log({"suggetion": "please fill all contents!"});
            res.send({"suggetion": "please fill all contents!"})
        }else{
            knex
            .select('*').from('candidate')
            .where({"email": req.body.email})
            .then((data) =>{
                console.log(data);
                if (data.length<1){
                    knex('candidate')
                    .insert(req.body)
                    .then((result) =>{
                        knex
                        .select('*')
                        .from('candidate')
                        .where('email', req.body.email)
                        .then((data) =>{
                            console.log({"success": "signup successfully..."})
                            res.send({result:true});
                        }).catch((err) =>{
                            console.log(err);
                        })
                    }).catch((err) =>{
                        console.log(err);
                    })
                }else{
                    console.log({"exist": "this candidate already exists.."});
                    res.send({result:false})
                }
            }).catch((err) =>{
                console.log(err);
            })
        }
    })
}