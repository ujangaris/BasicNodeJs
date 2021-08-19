exports.getStudent =(req,res,next)=>{
    res.render('student/student-list',{
        pageTitle: 'Student List'
    })
}