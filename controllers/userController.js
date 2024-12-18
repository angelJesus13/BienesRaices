


//funcionalidad de controlador
const formLogin = (req, res) => {
    res.render('auth/login', {
        authenticated: false
    })
}

const formRegister = (req, res) => {
    res.render('auth/register', {
        
    })
}



//export nombrado o el expor default solo uno por archivo y teniendo uno nombrado se pueden tener varias funciones con este, en default puede tener el nombre x
export{
    formLogin,
    formRegister
}