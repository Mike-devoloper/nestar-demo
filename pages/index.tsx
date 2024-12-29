import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import TrendProperties from "@/libs/components/TrendProperties";

const Home: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <TrendProperties/>
      <Stack>
        <Stack className="container">Popular Properties</Stack>
      </Stack>
      <Stack>
        <Stack className="container">Advertisement</Stack>
      </Stack>
      <Stack>
        <Stack className="container">Top Properties</Stack>
      </Stack>
      <Stack>
        <Stack className="container">Top Agents</Stack>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
