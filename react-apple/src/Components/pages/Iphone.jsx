import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/home/IPhoneSe.jpeg";
import SingleProduct from "./SingleProduct.jsx";

function Iphone() {
  const [iphones, setIphones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/iphones")
      .then((response) => response.json())
      .then((data) => {
        setIphones(data);
      });
  }, []);

  return (
    <>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold mt-5 pt-5">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>

          {iphones.map((product, index) => {
            // let productPage = "/iphone/" + product.product_url;
            let productPage = "/iphone/SingleProduct/";

            // console.log(productPage);

            let productDiv = (
              <div
                key={product.product_url}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${
                    index % 2 === 0 ? "1" : "2"
                  }`}
                >
                  <div className="product-title">{product.product_name}</div>
                  <div className="product-brief">
                    {product.product_brief_description}
                  </div>
                  <div className="starting-price">
                    {`Starting at ${product.starting_price}`}
                  </div>
                  <div className="monthly-price">{product.price_range}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`col-sm-12 col-md-6 order-${
                    index % 2 === 0 ? "2" : "1"
                  }`}
                >
                  <div className="prodict-image">
                    {/* <img src={product.product_img} alt="" /> */}
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </>
  );
}



export default Iphone;
