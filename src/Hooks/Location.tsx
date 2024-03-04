import { useState } from "react";

const useGeoLocation = () => {
  const [Location, setLocation] = useState<{
    altitude: number | null;
    latitude: number;
    longitude: number;
  }>();
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState({ Error: false, message: "" });
  function GetLocation() {
    setIsLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            altitude: position.coords.altitude,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
    setIsLoading(false);
        },
        (err) => {
          setError({ Error: true, message: "Somthing went wrong " });
          setIsLoading(false);
        }
      );
    } else {
      setError({ Error: true, message: "Geo location api not supported" });
    setIsLoading(false);

    }
return Location
  }
  return { GetLocation,Location,Error,isLoading };
};

export default useGeoLocation;
