import { useState } from 'react';
import css from './checkout.module.css'

function CheckoutPage () {
  const [ form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(form)
  }
  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h1>Billing Details</h1>
        <label className={css.field}>
          <span className={css.text}>Email Address</span>
          <input type="text" name="email" onChange={handleChange}/>
        </label>
        <label className={css.field}>
          <span className={css.text}>First Name</span>
          <input type="text" name="firsrtName" onChange={handleChange}/>
        </label>
        <label className={css.field}>
          <span className={css.text}>Last Name</span>
          <input type="text" name="lastName" onChange={handleChange}/>
        </label>
        <label className={css.field}>
          <span className={css.text}>Address</span>
          <input type="text" name="address" onChange={handleChange}/>
        </label>
        <label className={css.field}>
          <span className={css.text}>City</span>
          <input type="text" name='city' onChange={handleChange}/>
        </label>
        <button className={css.submitBtn} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CheckoutPage;