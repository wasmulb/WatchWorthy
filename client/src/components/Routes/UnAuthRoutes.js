import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'

function UnAuthRoutes () {
    return(
<Routes>
    <Route path='/signup' element = {<Signup />} />
    <Route path='/login' element = {<Login />} />
</Routes>
    )
}

export default UnAuthRoutes