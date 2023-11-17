import React from 'react'

const Home = () => {
    return (
        <div className='img'>
            <div >
                <img className='Image mt-20' src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            </div>
            <div className='Para'>
                <h1>Hello JD</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi consequuntur dignissimos placeat maxime hic?</p>
                <div className=''>
                    <button className='btn btn-one' active >Getting Started</button>
                    <button className='btn'>Contact-Us</button>
                </div>
            </div>
        </div>
    )
}

export default Home
