import React from 'react'

function home() {
  return (
    <>
        <section>
            <div>
                <div>
                    <div className='slider_div'>

                    </div>
                    <div className='movies_div'>
                        <div className='movies_div_container'>
                            <div className='movies_div_main'>

                            </div>
                        </div>
                    </div>
                    <div className='foods_div'>
                        <div className='foods_div_container'>
                            <div>
                                <h1>Food & Beverage</h1>
                            </div>
                            <div className='foods_div_main'>
                                < div className='foods_card'>
                                    <div>
                                            <div className='food_image_div'>
                                                <img src='../images/download.jpeg' alt='/' />
                                            </div>
                                            <div>
                                                <h2>Dragon Fly Popcorn</h2>
                                                <p>Price</p>
                                                <div className='food_add_to_cart_div'>
                                                    <button className='food_add_to_cart_btn'>Add To Cart</button>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default home