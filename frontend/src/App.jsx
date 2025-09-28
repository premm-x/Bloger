import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import ProductMain from './pages/ProductMain'
import BlogDetail from './pages/BlogDetail'
import UserProfile from './pages/UserProfile'
import UpdateProfile from './pages/UpdateProfile'
import AddBlog from './pages/AddBlog'
import UpdatePost from './pages/UpdatePost'
import SearchUser from './pages/SearchUser'
import SearchedUserProfile from './pages/SearchedUserProfile'
import UserProtectWrapper from './pages/UserProtectWrapper'
import Hometwo from './pages/Hometwo'

function App() {
  

  return (
    <div>
      <Routes>
        {/* <Route path={'/'} element={ <Home/> } /> */}
        <Route path={'/'} element={ <Hometwo/> } />
        <Route path={'/signin'} element={ <SignIn/> } />
        <Route path={'/register'} element={ <SignUp/> } />
        {/* <Route path={'/h2'} element={ <Hometwo/> } /> */}
        
          <Route path={'/profile'} element={ <UserProtectWrapper>  <UserProfile/>  </UserProtectWrapper>   } />
          <Route path={'/profile/update'} element={<UserProtectWrapper>  <UpdateProfile/>  </UserProtectWrapper>  } />
          <Route path={'/profile/search/user'} element={<UserProtectWrapper> <SearchUser/> </UserProtectWrapper>} />
          <Route path={'/profile/search/user/profile'} element={<UserProtectWrapper>  <SearchedUserProfile/>  </UserProtectWrapper>  } />
          
          <Route path={'/product/home'} element={<UserProtectWrapper>  <ProductMain/>  </UserProtectWrapper>} />
          <Route path={'/product/blog/detail'} element={<UserProtectWrapper>  <BlogDetail/>  </UserProtectWrapper>  } />
          <Route path={'/product/blog/add'} element={<UserProtectWrapper>  <AddBlog/>  </UserProtectWrapper>  } />
          <Route path={'/product/blog/update'} element={<UserProtectWrapper>  <UpdatePost/>  </UserProtectWrapper>  } />

      </Routes>
    </div>
  )
}

export default App
