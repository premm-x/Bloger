import { useNavigate } from 'react-router-dom'


const ProtectRoute = ({children}) =>{
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    return(
        <>
            {token ? children : navigate('/') }
        </>
    )
}

export default ProtectRoute;