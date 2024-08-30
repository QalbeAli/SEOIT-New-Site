"use client";
import { useEffect, useState } from "react";
import WorldFlag from "react-world-flags";
import { getUserLocation } from "@/utils/getUserLocation";
import { GetServerSideProps } from "next";
import axios from "axios";

const CountryFlag = () => {
  const [countryCode, setCountryCode] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const locationData = await getUserLocation();
      if (locationData) {
        setCountryCode(locationData.country);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="flex items-center justify-center ">
      {countryCode ? (
        <div className="flex items-center justify-center ">
          <WorldFlag code={countryCode} className="w-6 h-6" />
        </div>
      ) : (
        <p>Loading your location...</p>
      )}
    </div>
  );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const ip = context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress;
    const locationResponse = await axios.get(`https://ipinfo.io/${ip}/json?token=YOUR_IPINFO_TOKEN`);
    const locationData = locationResponse.data;

    return {
      props: {
        countryCode: locationData.country || null,
      },
    };
  } catch (error) {
    console.error('Error fetching user location:', error);
    return {
      props: {
        countryCode: null,
      },
    };
  }
};

export default CountryFlag;
