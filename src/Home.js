import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div>
       <div className="home">
        <div className="home__conatiner">
            <img src="https://i.pinimg.com/originals/df/c1/f9/dfc1f9ba2734aa94690f009d721440d7.jpg" alt="" className="Home__image" />
        <hr />
        <div className="home__row">
             <Product
             id="123"
             title= "product1"
             price={205}
             rating={5}
             image ="https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20210623062101282562_482x264jpg"/>
             <Product
              id="1232"
              title= "product2"
              price={204}
              rating={4}
              image ="https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20210623062101282562_482x264jpg"
              />
        </div>
        <div className="home__row">
             <Product
              id="1233"
              title= "product3"
              price={203}
              rating={3}
              image ="https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20210623062101282562_482x264jpg"/>
             <Product
              id="1234"
              title= "product4"
              price={202}
              rating={5}
              image ="https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20210623062101282562_482x264jpg"
              />
             <Product
              id="1234"
              title= "product4"
              price={20}
              rating={5}
              image ="https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20210623062101282562_482x264jpg"
              />
        </div>
        <div className="home__row">
               <Product
                id="1235"
                title= "product5"
                price={201}
                rating={5}
                image ="https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20210623062101282562_482x264jpg"
                />
        </div>
        </div>
       </div>
    </div>
  )
}

export default Home