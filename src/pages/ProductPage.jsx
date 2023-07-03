import React from 'react';
import { fetchOneProduct } from '../http/productAPI';
import { useParams } from 'react-router-dom';

const ProductPage = ({ setActive }) => {
  const [product, setProduct] = React.useState({ info: [] });
  const { id } = useParams();
  React.useEffect(() => {
    fetchOneProduct(id).then((data) => setProduct(data));
  }, []);
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-page__inner">
          <div className="product-page__top">
            <div className="product-page__top-left">
              <img
                src={process.env.REACT_APP_API_URL + product.img}
                alt="tires or wheel"
                className="product-page__img"
              />
            </div>
            <div className="product-page__top-right">
              <p className="product-page__name">{product.name}</p>
              <span className="product-page__price">{product.price} р</span>
              <button className="btn btn--gray product-page__btn" onClick={() => setActive(true)}>
                Связаться
              </button>
              <div className="product-page__social">
                <h4 className="product-page__social-title">Появились вопросы ?</h4>
                <div className="product-page__social-inner">
                  <div className="product-page__social-text">
                    <p className="product-page__social-descr">
                      Свяжитесь с нами и мы обязательно ответим на них
                    </p>
                  </div>
                  <a href="https://wa.me/89923330098" className="social product__social">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.875 2.0625C10.5938 0.75 8.84375 0 6.96875 0C3.15625 0 0.03125 3.125 0.03125 6.9375C0.03125 8.1875 0.375 9.375 0.96875 10.4062L0 14L3.65625 13.0625C4.6875 13.5938 5.8125 13.9062 6.96875 13.9062C10.8125 13.9062 14 10.7812 14 6.96875C14 5.09375 13.1875 3.375 11.875 2.0625ZM6.96875 12.7188C5.9375 12.7188 4.9375 12.4375 4.03125 11.9062L3.84375 11.7812L1.65625 12.375L2.25 10.25L2.09375 10.0312C1.53125 9.09375 1.21875 8.03125 1.21875 6.9375C1.21875 3.78125 3.8125 1.1875 7 1.1875C8.53125 1.1875 9.96875 1.78125 11.0625 2.875C12.1562 3.96875 12.8125 5.40625 12.8125 6.96875C12.8125 10.125 10.1562 12.7188 6.96875 12.7188ZM10.1562 8.40625C9.96875 8.3125 9.125 7.90625 8.96875 7.84375C8.8125 7.78125 8.6875 7.75 8.5625 7.9375C8.46875 8.09375 8.125 8.5 8.03125 8.625C7.90625 8.71875 7.8125 8.75 7.65625 8.65625C6.625 8.15625 5.96875 7.75 5.28125 6.59375C5.09375 6.28125 5.46875 6.3125 5.78125 5.65625C5.84375 5.53125 5.8125 5.4375 5.78125 5.34375C5.75 5.25 5.375 4.40625 5.25 4.0625C5.09375 3.71875 4.96875 3.75 4.84375 3.75C4.75 3.75 4.625 3.75 4.53125 3.75C4.40625 3.75 4.21875 3.78125 4.0625 3.96875C3.90625 4.15625 3.46875 4.5625 3.46875 5.40625C3.46875 6.28125 4.0625 7.09375 4.15625 7.21875C4.25 7.3125 5.375 9.0625 7.125 9.8125C8.21875 10.3125 8.65625 10.3438 9.21875 10.25C9.53125 10.2188 10.2188 9.84375 10.375 9.4375C10.5312 9.03125 10.5312 8.6875 10.4688 8.625C10.4375 8.53125 10.3125 8.5 10.1562 8.40625Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ul className="product-page__bottom">
            <h3 className="product-page__bottom-title">
              Характеристики: <span>{product.name}</span>
            </h3>
            {product.info.map((info, index) => (
              <li
                style={{ background: index % 2 === 0 ? '#B7B7B7' : '#ffffff' }}
                className="product-page__bottom-item"
                key={info.id}>
                <span>{info.title}:</span> <span>{info.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
