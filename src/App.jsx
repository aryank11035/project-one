
import './App.css'

import LoginPage from './components/pages/LoginPage'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import {
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import DashBoardPage from './components/pages/DashBoard'
import { CategoryPage } from './components/pages/CategoryPage'
import { AddCategory } from './components/category/category'
import { CategoryList } from './components/category/category-list';
function App() {
  

  return (
    <>
      <SidebarProvider>
      <Routes>  

        <Route index element={<LoginPage/>} />
        <Route path='/dashboard' element={<DashBoardPage />}>
        
          <Route path='category' element={<CategoryPage/>}>
            <Route index element={<CategoryList/>}/>
            <Route path='add' element={<AddCategory/>} />
            <Route path="category/add/:id" element={<AddCategory />} />
          </Route>
          <Route path='*' element={<h1>404</h1>} />
        </Route>
      </Routes>
      </SidebarProvider>
    </>
  )
}

export default App
