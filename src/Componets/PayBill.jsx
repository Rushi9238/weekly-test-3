import React from 'react'
import '../CSS_files/payBill.css'
import Button from '../Common-files/Button'
const PayBill = () => {
  return (
    <div className='paybill flex flex-col center'>
      <h1>we take your money
matters seriously.</h1>
<h2>so that you don’t have to.</h2>
<p>never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.</p>
<Button name={"Experience the upgrade"} />
      </div>
  )
}

export default PayBill