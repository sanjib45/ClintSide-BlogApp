import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import './index.css'
import router from './route'
import { store } from './Redux/store'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
 <Provider store={store}>
   <RouterProvider router={router} />
 </Provider>
)
