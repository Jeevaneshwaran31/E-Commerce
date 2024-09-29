import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route index element={<Navigate to={'login'}></Navigate>} />
                <Route path='/' element={<AppLayout />}>
                    <Route path='home' element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes