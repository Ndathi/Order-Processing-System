import { useEffect, useState } from "react";
import User from "../Components/user.component";
import axios from "axios";

export default function CustomerPage() {
  const [data, setData] = useState([]);

  const allCustomers = async () => {
    const customers = await axios.get("http://127.0.0.1:4000/customers");
    console.log(customers.data.data);
    return setData(customers.data.data);
  };

  useEffect(() => {
    allCustomers();
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((customa) => (
        <User key={customa.id} item={customa} />
      ))}
    </div>
  );
}
