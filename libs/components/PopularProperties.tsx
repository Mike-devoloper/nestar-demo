
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPropertyCard from "./PopularPropertyCard";

const PopularProperties = ({ initialInput = [1, 2, 3, 4, 5, 6, 7], ...props }: any) => {
    const [popularProperties, setPopularProperties] = useState<number[]>(initialInput);
  
    return (
      <Stack className="popular-properties">
        <Stack className="container">
          <Stack className="info-box">
            <Box className="left">
              <span>Popular properties</span>
              <p>Popularity based on views</p>
            </Box>
            <Box className="right">
              <div className="more-box">
                <Link href="/property">
                  <span>See All categories</span>
                </Link>
                <img src="/img/icons/rightup.svg" alt="" />
              </div>
            </Box>
          </Stack>
          <Stack className="card-box">
            <Swiper
              className="popular-property-swiper"
              slidesPerView={"auto"}
              spaceBetween={25}
              navigation={{
                nextEl: ".swiper-popular-next",
                prevEl: ".swiper-popular-prev",
              }}
              pagination={{
                el: ".swiper-popular-pagination",
              }}
            >
              {
                popularProperties?.map((property, index) => {
                    return (
                        <SwiperSlide key={index} className="popular-property-slide">
                  <PopularPropertyCard />
                </SwiperSlide>
                    )
                })
              }
            </Swiper>
          </Stack>
        </Stack>
      </Stack>
    );
  };
  



export default PopularProperties;