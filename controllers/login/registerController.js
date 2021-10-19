exports.getRegister=(req,res,next)=>{
    res.render('login/register',{
        pageTitle: 'Register',
        path     : '/register'
    })
}

exports.getIndex=(req,res,next)=>{
    res.render('login/index',{
        pageTitle: 'Login',
        path     : '/login'
    })
}