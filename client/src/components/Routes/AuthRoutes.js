import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import AllLists from "../../pages/AllLists";
import MyLists from "../../pages/MyLists";

function AuthRoutes () {
    return(
<Routes>
<Route path = '/all-lists' element= {< AllLists/>} />
<Route path = '/my-lists' element = {<MyLists />} />
</Routes>
    )
}

export default AuthRoutes