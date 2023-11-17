import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <form>
                    <div className='input_field'>
                        <label> Email</label>
                        <input type='email' placeholder='Enter Your Email' />
                        <label> Password</label>
                        <input type='password' placeholder='Enter Your Password' />
                    </div>
                    <div className='button_collection'>
                        <button type='submit' className='btn-one' >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
