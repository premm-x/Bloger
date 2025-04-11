import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import ProductMain from './pages/ProductMain'
import BlogDetail from './pages/BlogDetail'
import UserProfile from './pages/UserProfile'
import UpdateProfile from './pages/UpdateProfile'
import ProtectRoute from './component/ProtectRoute'
import AddBlog from './pages/AddBlog'
import UpdatePost from './pages/UpdatePost'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path={'/'} element={ <Home/> } />
        <Route path={'/signin'} element={ <SignIn/> } />
        <Route path={'/register'} element={ <SignUp/> } />
        <Route path={'/profile'} element={  <ProtectRoute> <UserProfile/> </ProtectRoute>  } />
        <Route path={'/profile/update'} element={ <UpdateProfile/> } />
        <Route path={'/product/home'} element={ <ProductMain/> } />
        <Route path={'/product/blog/detail'} element={ <BlogDetail/> } />
        <Route path={'/product/blog/add'} element={ <AddBlog/> } />
        <Route path={'/product/blog/update'} element={ <UpdatePost/> } />
      </Routes>
    </div>
  )
}

export default App
