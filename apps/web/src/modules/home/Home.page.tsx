import { useState } from "react";
import Navbar from "@/components/navbar/Navbar.tsx";
import Content from "@/components/Content.tsx";
import AlertIpAccess from "@/components/AlertIpAccess.tsx";
import WeatherInfo from "@/components/WeatherInfo.tsx";



const HomePage = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [hasGivenAccess, setHasGivenAccess] = useState(false);

  const handleAddLocation = () => {
    setAlertOpen(true);
  };


  return (
      <>
        <Navbar />
          {hasGivenAccess ? (
              <WeatherInfo/>
          ) : (
              <Content onAddLocationClick={handleAddLocation} />
          )}
        <AlertIpAccess
          open={alertOpen}
          setAlertOpen={setAlertOpen}
          onGiveAccess={() => {
            setHasGivenAccess(true);
            setAlertOpen(false);
          }}
        />
      </>
  );
};


export default HomePage;
