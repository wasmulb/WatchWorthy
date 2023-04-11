import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import AllLists from "../../pages/AllLists";
import MyLists from "../../pages/MyLists";

function AuthRoutes () {
    return(
<Routes>
<Route path = '/allLists' element= {< AllLists/>} />
<Route path = '/myLists' element = {<MyLists />} />
</Routes>
    )
}

export default AuthRoutes