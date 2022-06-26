const BearerToken = 'Bearer FSMovies2021';

exports.basicAuth = () => (request, response, next) => {
    try { 
        if(request.headers.authorization == BearerToken) return next()
        return  response.send({
            "Status":401,
            "Message":"Uauthorized Credentials"
        })
    } catch (error) {
        console.log(error)
        return next(error)
    }
}