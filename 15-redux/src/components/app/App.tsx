import { BrowserRouter } from 'react-router-dom'
import Layout from '../layout/layout/Layout'
import './App.css'
import { Provider as Redux } from 'react-redux'
import store from '../../redux/store'

function App() {

  return (
    <>
        <BrowserRouter>
            <Redux store={store}>
                <Layout />
            </Redux>
        </BrowserRouter>
    </>
  )
}

export default App
