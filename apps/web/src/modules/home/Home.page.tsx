import { useEffect } from "react";
import axios from "axios";
import AlertIpAccess from "@/components/AlertIpAccess.tsx";
import Navbar from "@/components/navbar/Navbar.tsx";


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
      <>
        <Navbar />
        <AlertIpAccess />
      </>
  );
};


export default HomePage;
