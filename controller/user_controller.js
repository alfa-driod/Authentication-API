const User=require('../model/user_model')



function signin(req,res) {
    User.findOne({email:req.body.email,
        password:req.body.password})
        .then(function (user) {
            console.log(user),
            res.json(user)
        })
        .catch(function (err) {
            console.log(err),
            res.json({error:'invalid logs'})
            
        })
    
}
function signup(req,res) {
    User.findOne({email:req.body.email},(function (err,user) {
        if (err) {
            console.log(err),
            res.json(err)
        } 
        
        
        
        else{
            if(user==null){
                const user=User({
                    email:req.body.email,
                    password:req.body.password
                })
                // user.save()
                // User.create(req.body)
                user.save()
                .then(function (user) {
                    console.log(user)
                    res.json(user)
                })
                .catch(function (err) {
                    console.log(err)
                    res.json(err)
                })
            }
            else{
                res.json({message:'Email is available'})
            }
            

            
        }
        
        
    }))
    
    
}
module.exports={
    signin,signup
}
