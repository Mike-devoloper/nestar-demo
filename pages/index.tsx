import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import TrendProperties from "@/libs/components/TrendProperties";
import PopularProperties from "@/libs/components/PopularProperties";
import Advertisement from "@/libs/components/Advertisement";
import TopProperties from "@/libs/components/TopProperties";
import TopAgents from "@/libs/components/TopAgent";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const Home: NextPage = () => {
  //MOBILE Device or PC
  const device = useDeviceDetect()

  if(device === "mobile") {
    return <Stack>HOME PAGE</Stack>
  } else {
    return (
      <Stack className={"home-page"}>
        <TrendProperties/>
        <PopularProperties/>
        <Advertisement/>
        <TopProperties/>
        <TopAgents/>
      </Stack>
    );
  }
};

export default withLayoutMain(Home);
