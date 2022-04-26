import React from 'react'

export default function FeaturedProducts({products}) {
  console.log(products)
  return (
    <div>
        <section className="featured-product section-padding">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h2 className="mb-5">Featured Products</h2>
      </div>
      {/* <div className="col-lg-4 col-12 mb-3">
        <div className="product-thumb">
          <a href="product-detail.html">
            <img src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg" className="img-fluid product-image" alt />
          </a>
          <div className="product-top d-flex">
            <span className="product-alert me-auto">New Arrival</span>
            <a href="#" className="bi-heart-fill product-icon" />
          </div>
          <div className="product-info d-flex">
            <div>
              <h5 className="product-title mb-0">
                <a href="product-detail.html" className="product-title-link">{props.pname}</a>
              </h5>
              <p className="product-p">{props.description}</p>
            </div>
            <small className="product-price text-muted ms-auto mt-auto mb-5">${props.price}</small>
          </div>
        </div>
      </div> */}

      {products.map((product)=>{

     return (
       <div className="col-lg-4 col-12 mb-3">
        <div className="product-thumb">
          <a href="product-detail.html">
            <img src={product.image} className="img-fluid product-image" alt />
          </a>
          <div className="product-top d-flex">
            <span className="product-alert">Low Price</span>
            <a href="#" className="bi-heart-fill product-icon ms-auto" />
          </div>
          <div className="product-info d-flex">
            <div>
              <h5 className="product-title mb-0">
                <a href="product-detail.html" className="product-title-link">{product.title}</a>
              </h5>
              <p className="product-p">{product.description}</p>
            </div>
            <small className="product-price text-muted ms-auto mt-auto mb-5">${product.price}</small>
          </div>
        </div>
      </div> 
     )

    })}
      {/* <div className="col-lg-4 col-12">
        <div className="product-thumb">
          <a href="product-detail.html">
            <img src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg" className="img-fluid product-image" alt />
          </a>
          <div className="product-top d-flex">
            <a href="#" className="bi-heart-fill product-icon ms-auto" />
          </div>
          <div className="product-info d-flex">
            <div>
              <h5 className="product-title mb-0">
                <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
              </h5>
              <p className="product-p">Nature made another world</p>
            </div>
            <small className="product-price text-muted ms-auto mt-auto mb-5">$45</small>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="product-thumb">
          <a href="product-detail.html">
            <img src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg" className="img-fluid product-image" alt />
          </a>
          <div className="product-top d-flex">
            <a href="#" className="bi-heart-fill product-icon ms-auto" />
          </div>
          <div className="product-info d-flex">
            <div>
              <h5 className="product-title mb-0">
                <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
              </h5>
              <p className="product-p">Nature made another world</p>
            </div>
            <small className="product-price text-muted ms-auto mt-auto mb-5">$45</small>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="product-thumb">
          <a href="product-detail.html">
            <img src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg" className="img-fluid product-image" alt />
          </a>
          <div className="product-top d-flex">
            <a href="#" className="bi-heart-fill product-icon ms-auto" />
          </div>
          <div className="product-info d-flex">
            <div>
              <h5 className="product-title mb-0">
                <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
              </h5>
              <p className="product-p">Nature made another world</p>
            </div>
            <small className="product-price text-muted ms-auto mt-auto mb-5">$45</small>
          </div>
        </div>
      </div>     <div className="col-lg-4 col-12">
        <div className="product-thumb">
          <a href="product-detail.html">
            <img src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg" className="img-fluid product-image" alt />
          </a>
          <div className="product-top d-flex">
            <a href="#" className="bi-heart-fill product-icon ms-auto" />
          </div>
          <div className="product-info d-flex">
            <div>
              <h5 className="product-title mb-0">
                <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
              </h5>
              <p className="product-p">Nature made another world</p>
            </div>
            <small className="product-price text-muted ms-auto mt-auto mb-5">$45</small>
          </div>
        </div>
      </div>     <div className="col-lg-4 col-12">
        <div className="product-thumb">
          <a href="product-detail.html">
            <img src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg" className="img-fluid product-image" alt />
          </a>
          <div className="product-top d-flex">
            <a href="#" className="bi-heart-fill product-icon ms-auto" />
          </div>
          <div className="product-info d-flex">
            <div>
              <h5 className="product-title mb-0">
                <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
              </h5>
              <p className="product-p">Nature made another world</p>
            </div>
            <small className="product-price text-muted ms-auto mt-auto mb-5">$45</small>
          </div>
        </div>
      </div>     <div className="col-lg-4 col-12">
        <div className="product-thumb">
          <a href="product-detail.html">
            <img src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg" className="img-fluid product-image" alt />
          </a>
          <div className="product-top d-flex">
            <a href="#" className="bi-heart-fill product-icon ms-auto" />
          </div>
          <div className="product-info d-flex">
            <div>
              <h5 className="product-title mb-0">
                <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
              </h5>
              <p className="product-p">Nature made another world</p>
            </div>
            <small className="product-price text-muted ms-auto mt-auto mb-5">$45</small>
          </div>
        </div>
      </div>     <div className="col-lg-4 col-12">
        <div className="product-thumb">
          <a href="product-detail.html">
            <img src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg" className="img-fluid product-image" alt />
          </a>
          <div className="product-top d-flex">
            <a href="#" className="bi-heart-fill product-icon ms-auto" />
          </div>
          <div className="product-info d-flex">
            <div>
              <h5 className="product-title mb-0">
                <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
              </h5>
              <p className="product-p">Nature made another world</p>
            </div>
            <small className="product-price text-muted ms-auto mt-auto mb-5">$45</small>
          </div>
        </div>
      </div>  */}
      <div className="col-12 text-center">
        <a href="products.html" className="view-all">View All Products</a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
