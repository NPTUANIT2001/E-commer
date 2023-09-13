import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Productdetail from "./productDetail";
import { BsEye } from "react-icons/bs";
import "./styles.scss";
import { useDispatch } from "react-redux";
import {
  getAllproductThunk,
  getByIdProductThunk,
} from "../../../redux/actions/user/product";
const Product = () => {
  const dispatch = useDispatch();
  dispatch(getAllproductThunk()).then((res) => {
    if (res.status === 200) {
      console.log("thanhcong");
    } else {
      console.log("that bai");
    }
  });
  const data = { id: "1" };
  dispatch(getByIdProductThunk(data.id)).then((res) => console.log(res));

  return (
    <>
      <div className="products">
        <h3># Product</h3>
        <p>Home . product</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li>Tablet</li>
                <li>Smart watch</li>
                <li>Tablet</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {Productdetail.map((curElm) => {
                return (
                  <>
                    <div className="box" key={curElm.id}>
                      <div className="img_box">
                        <img src={curElm.Img} alt={curElm.Title} />
                        <div className="icon">
                          <li>
                            <AiOutlineShoppingCart />
                          </li>
                          <li>
                            <BsEye />
                          </li>
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className="detail">
                        <p>{curElm.Cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>{curElm.Price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
