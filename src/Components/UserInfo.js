
import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaExpeditedssl, FaTrash, FaUserEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UseUserInfo } from '../API/UserInfoAPI';
const UserInfo = () => {
    const [userinfo,refetch] = UseUserInfo();
   const handleDelete = (id,name)=>{
   const confirm = window.confirm('Are you sure you want to delete')
   if(confirm){
    axios.delete(`https://data-input-server.vercel.app/userdata/${id}`).then(res =>{
        if(res.data.deletedCount > 0){
            toast.success(`${name} Deleted successfully`)
            refetch()
        }
    })
   }
   }
   const accessUser = JSON.parse(sessionStorage.getItem("userdata"));
   console.log(accessUser);
    return (
        <div>
            <div>
            <h1 className='flex justify-center items-center w-full h-[70px] bg-teal-300 text-white rounded-md text-2xl 
             lg:text-3xl font-bold '>User Information</h1>
            <div className="overflow-x-auto h-[60vh] lg:h-[80vh] mb-12">
  <table className="table w-full  table-auto lg:table-normal">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th className='text-center'>Serial</th>
        <th className='text-center'>Name</th>
        <th className='text-center'>Profession</th>
        <th className='text-center'>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        userinfo &&  userinfo?.map((user,i) =>
            <tr key={user?._id} className=''>
        <th className='text-center'>{i+1}</th>
        <td className='text-center'>{user?.name}</td>
        <td className='text-center'>{user?.profession}</td>
        <td className='flex items-center justify-center gap-2 '>
           {
            accessUser?.name === user?.name  && accessUser?.profession === user?.profession ? <>
            <Link to={`/updateUser/${user?._id}`} className='btn btn-sm btn-success text-white'><FaUserEdit></FaUserEdit></Link>
            <button
            onClick={()=>handleDelete(user?._id,user?.name)}
             className='btn btn-sm btn-error text-white'><FaTrash></FaTrash></button>
            </> : <>
               <span className='text-2xl'><FaExpeditedssl></FaExpeditedssl></span>
            </>
           }
        </td>
      </tr>
        )
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default UserInfo;