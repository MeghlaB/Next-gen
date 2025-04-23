import { BarChart2, Boxes, Home, LayoutDashboard, User, User2, UserPlus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  return (
    <aside className="h-screen w-[250px] bg-gray-800 text-white px-4 py-6 hidden md:block fixed top-0 left-0 z-40">
    <div className="text-2xl font-bold mb-10">Admin</div>
    <div className="pb-4" >
      <Link to="/dashboard" className="flex items-center gap-3 hover:text-gray-300">
        <Home size={20} />
        Admin Home
      </Link>
    </div>
    <nav className="space-y-4">
      <Link
        to="/dashboard/blog-management"
        className="flex items-center gap-3 hover:text-gray-300"
      >
        <Boxes size={20} />
      Blog Management
      </Link>
      <Link
        to="/dashboard/add-blog"
        className="flex items-center gap-3 hover:text-gray-300"
      >
        <UserPlus size={20} />
        Add-Blog
      </Link>
      <Link
        to="/dashboard/alluser"
        className="flex items-center gap-3 hover:text-gray-300"
      >
        <User2 size={20} />
        All User
      </Link>
    </nav>
   
  </aside>
  )
}

export default AdminDashboard
