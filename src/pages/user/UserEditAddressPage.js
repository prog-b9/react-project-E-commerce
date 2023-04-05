import React from 'react'
import { UserSideBar } from '../../components/user/UserSideBar'
import UserEditAddress from '../../components/user/address/UserEditAddress'

export const UserEditAddressPage = () => {
  return (
    <div className="bg-light" style={{ minHeight: "90vh" }}>
    <div className="row m-0 ">
      {/* Side bar */}
      <div className="col-12 col-md-4 col-lg-3 col-xl-2 ">
        <UserSideBar/>
      </div>
      <div className="col-12 col-md-8 col-lg-9 col-xl-10">
        <h3 className="fw-bold py-4"> تعديل العنوان</h3>
        <UserEditAddress/>
      </div>
    </div>
  </div>  )
}
