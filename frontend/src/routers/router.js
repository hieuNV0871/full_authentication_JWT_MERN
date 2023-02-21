import config from '../configs/config'
import Home from '../pages/Home/Home'
import ActiveEmail from '../layouts/components/Auth/ActiveEmail'
import ResetPassword from '../layouts/components/Auth/ResetPassword'
const publicRoutes = [
    {
        path: config.router.home,
        component: Home
    },
    {
        path: config.router.active_email_page,
        component: ActiveEmail
    },
    {
        path: config.router.reset_password_page,
        component: ResetPassword
    }
]

const privateRoutes = []

export {privateRoutes, publicRoutes}