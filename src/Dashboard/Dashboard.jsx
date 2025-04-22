import React from 'react'

import { Outlet } from 'react-router-dom';
import AdminDashboard from '../Components/AdminDashboard';
import UseAuth from '../Hooks/UseAuth';
import UserDashboard from '../Components/UserDashboard';

export default function Dashboard() {
  
    const isAdmin = true
  
  
  return (
    <div>
      <div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[250px] fixed h-full bg-gray-100">
        {isAdmin ? <AdminDashboard/>:<UserDashboard/>}
          {/* <SellerSidebar /> */}
        </div>

        {/* Main Content */}
        <div className="md:ml-[250px] w-full">
          
          <main className="pt-6 px-6">

          <Outlet/>
          </main>
        </div>
      </div>
    </div>
    </div>
  )
}
