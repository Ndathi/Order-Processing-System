import { useEffect, useState } from "react";
import axios from "axios";
import ImgMediaCard from "../Components/item";
import "./ItemsPageStyle.css";
const ItemsPage = () => {
  // eslint-disable-next-line
  const url = "http://127.0.0.1:4000/items/Allitems";
  const [data, setData] = useState([]);

  const fetchItems = async () => {
    const response = await axios.get(url);
    console.log(response.data.data.items)
    return setData(response.data.data.items);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="item-cont">
      {data.map((item) => (
        <ImgMediaCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ItemsPage;
