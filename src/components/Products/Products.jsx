import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import "./Products.css";

const Products = () => {
  const { categorySlug, productSlug, itemSlug } = useParams();
  const [data, setData] = useState([]);
  const [mainImage, setMainImage] = useState("");

  /* LOAD JSON */
  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  /* FIND CATEGORY */
  const category = data.find(c => c.slug === categorySlug);

  /* FIND PRODUCT */
  const product = category?.products?.find(p => p.slug === productSlug);

  /* FIND ITEM */
  const item = product?.items?.find(i => i.slug === itemSlug);

  /* SET IMAGE */
  useEffect(() => {
    if (item?.image) setMainImage(item.image);
    else if (product?.image) setMainImage(product.image);
    else if (category?.categoryImage) setMainImage(category.categoryImage);
  }, [category, product, item]);

  if (!category) return <h2 style={{padding:40}}>Category Not Found</h2>;

  return (
    <div className="product-page">

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> /
        <Link to={`/products/${category.slug}`}>{category.category}</Link>
        {product && <> / <Link to={`/products/${category.slug}/${product.slug}`}>{product.name}</Link></>}
        {item && <> / {item.name}</>}
      </div>

      {/* CATEGORY SECTION */}
      {!product && (
        <>
          <div className="category-container">
            <div>
              <h1>{category.category}</h1>
              <p>{category.categoryDesc}</p>
            </div>
            <img src={category.categoryImage} alt={category.category} />
          </div>

          <div className="product-grid">
            {category.products.map((p, i) => (
              <Link to={`/products/${category.slug}/${p.slug}`} key={i} className="product-card">
                <div
                  className="product-thumb"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <h4>{p.name}</h4>
                <p>{p.description}</p>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* PRODUCT PAGE */}
      {product && !item && (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>

          {product.items ? (
            <div className="product-grid">
              {product.items.map((it, i) => (
                <Link
                  key={i}
                  to={`/products/${category.slug}/${product.slug}/${it.slug}`}
                  className="product-card"
                >
                  <div
                    className="product-thumb"
                    style={{ backgroundImage: `url(${it.image})` ,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                  }}
                  />
                  <h4>{it.name}</h4>
                  <p>{it.shortDesc}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="product-detail">
              <img src={mainImage} alt={product.name} className="product-image" />
              <div className="product-gallery">
                {product.gallery?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="gallery-thumb"
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ITEM PAGE */}
      {item && (
        <div className="product-detail">
          <div>
            <h2>{item.name}</h2>
           <ProductDescription
              description={item.description}
              specifications={item.specifications}
            />

            {item.specifications && (
              <ul className="specs">
                {Object.entries(item.specifications).map(([k, v], i) => (
                  <li key={i}><b>{k}:</b> {v}</li>
                ))}
              </ul>
            )}

          </div>

          <div>
            <img src={mainImage} alt={item.name} className="product-image" />
            <div className="product-gallery">
              {item.gallery?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`gallery-thumb ${mainImage === img ? "active" : ""}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
