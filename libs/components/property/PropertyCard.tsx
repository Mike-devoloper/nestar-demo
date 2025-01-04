
import { FavoriteOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material"
import Link from "next/link";

const PropertyCard = () => {
    return (
        <Stack className="card-config">
                <Stack className="top">
                    <Link href={{
                        pathname: "/property/detail",
                        query: {id: "test782358379jhkj"}
                    }}>
                         <Box className="top-badge">
                             <img src="/img/icons/electricity.svg" alt=""/>
                             <Typography>Top</Typography>
                         </Box>
                         <Box className="price-box">
                             <Typography>$2500000</Typography>
                         </Box>
                    </Link>
                </Stack>
                <Stack className="bottom">
                    <Stack className="name-address">
                        <Stack className="name">
                            <Link
                            href={{
                                pathname: "/property/detail",
                                query: { id: "test123sdijfsdf" },
                            }}
                            >
                            <Typography>Kingstone Apartments</Typography>
                            </Link>
                        </Stack>
                        <Stack className="address">
                            <Typography>Busan, City Center 200 - 5</Typography>
                        </Stack>
                    </Stack>
                    <Stack className="options">
                        <Stack className="option">
                            <img src="/img/icons/bed.svg" alt="" />{" "}
                            <Typography>2 bed</Typography>
                        </Stack>
                        <Stack className="option">
                            <img src="/img/icons/room.svg" alt="" />{" "}
                            <Typography>7 room</Typography>
                        </Stack>
                        <Stack className="option">
                            <img src="/img/icons/expand.svg" alt="" />{" "}
                            <Typography>170 m²</Typography>
                        </Stack>
                    </Stack>
                    <Stack className="divider"></Stack>
                     <Stack className="type-buttons">
                            <Stack className="type">
                                <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>Rent</Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>Barter</Typography>
                            </Stack>
                            <Stack className="buttons">
                                <IconButton color="default">
                                <RemoveRedEyeOutlined />
                                </IconButton>
                                <Typography className="view-cnt">100</Typography>
                                <IconButton color="default">
                                <FavoriteOutlined color="primary" />
                                </IconButton>
                                <Typography className="view-cnt">20</Typography>
                            </Stack>
                     </Stack>
                </Stack>
			</Stack>
    )
}

export default PropertyCard;