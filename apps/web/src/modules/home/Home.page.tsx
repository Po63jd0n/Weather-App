import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + "/weather",
      );
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Witaj w aplikacji pogodowej!</h1>
      <p>To jest prosty frontend startowy.</p>
    </div>
  );
};

export default HomePage;
