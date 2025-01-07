import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import TrendProperties from "@/libs/components/TrendProperties";
import PopularProperties from "@/libs/components/PopularProperties";
import Advertisement from "@/libs/components/Advertisement";
import TopProperties from "@/libs/components/TopProperties";
import TopAgents from "@/libs/components/TopAgent";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { GET_PROPERTIES } from "@/apollo/user/query";
import { useQuery } from "@apollo/client";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Home: NextPage = () => {
  //MOBILE Device or PC
  const device = useDeviceDetect()

  const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getPropertiesError,
    refetch: getPropertiesRefetch,
  } = useQuery(GET_PROPERTIES, {
    fetchPolicy: "network-only",
    variables: {
      input: {
        page: 1,
        limit: 5,
        sort: "createdAt",
        direction: "DESC",
        search: {},
      },
    },
  });
  console.log("getProperties =>", getPropertiesData);
  

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
