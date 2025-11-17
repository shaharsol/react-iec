import { BrowserRouter } from 'react-router-dom'
import Layout from '../layout/layout/Layout'
import './App.css'
import { Provider as Redux } from 'react-redux'
import store from '../../redux/store'
import Auth from '../auth/auth/Auth'
import SocketDispatcher from '../socket.io/SocketDispatcher'

function App() {

  return (
    <>
        <BrowserRouter>
            <Redux store={store}>
                <Auth>
                    <SocketDispatcher>
                        <Layout />
                    </SocketDispatcher>                    
                </Auth>
            </Redux>
        </BrowserRouter>
    </>
  )
}

export default App
