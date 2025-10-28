import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/navbar/Navbar.tsx";
import Content from "@/components/Content.tsx";
import AlertIpAccess from "@/components/AlertIpAccess.tsx";


const HomePage = () => {
  const [open, setOpen] = useState(false);

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
        <Content onAddLocationClick={() => setOpen(true)}/>
        <AlertIpAccess open={open} setOpen={setOpen}/>
      </>
  );
};


export default HomePage;
