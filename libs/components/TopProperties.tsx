import { EastOutlined, WestOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TopPropertyCard from "./TopPropertyCard";

const TopProperties = () => {
  const [topProperties, setTopProperties] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

  return (
    <Stack className="top-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Top Properties</span>
            <p>Check out our top properties</p>
          </Box>
          <Box className="right">
            <Box className="pagination-box">
              <WestOutlined className="swiper-trend-prev" />
              <div className="swiper-trend-pagination"></div>
              <EastOutlined className="swiper-trend-next" />
            </Box>
          </Box>
        </Stack>
        <Stack className="card-box">
            <Swiper
              className="top-property-swiper"
              slidesPerView="auto"
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-top-next",
                prevEl: ".swiper-top-prev",
              }}
              pagination={{
                el: ".swiper-top-pagination",
              }}
            >
              {topProperties.map((property, index) => (
                <SwiperSlide key={index} className="top-property-slide">
                  <TopPropertyCard />
                </SwiperSlide>
              ))}
            </Swiper>
          
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopProperties;
