import { FavoriteOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";

const PopularPropertyCard = () => {
return (
    <Stack className="popular-card-box">
        <Box 
        className="card-img"
        style={{
            backgroundImage: `url("/img/banner/types/apartment.webp")`
        }}>
            <div className="status">
                <img src="/img/icons/electricity.svg" alt=""/>
                <span>Top</span>
            </div>

            <div className="price">$5320000</div>
        </Box>
        <Box className={"info"}>
            <strong className={"title"}>Busan City Hall Apartments</strong>
            <p className={"desc"}>Good wills</p>
            
            <div className={"options"}>
                <div>
                <img src="/img/icons/bed.svg" alt="" />
                <span>3 bed</span>
                </div>
                <div>
                <img src="/img/icons/room.svg" alt="" />
                <span>7 rooms</span>
                </div>
                <div>
                <img src="/img/icons/expand.svg" alt="" />
                <span>220 m²</span>
                </div>
            </div>
            
            <Divider sx={{ mt: "15px", mb: "17px" }} />
            
            <div className={"bott"}>
                <p>rent</p>
                <div className="view-like-box">
                <IconButton color="default">
                    <RemoveRedEyeOutlined />
                </IconButton>
                <Typography className="view-cnt">50</Typography>
                
                <IconButton color={"default"}>
                    <FavoriteOutlined style={{ color: "red" }} />
                </IconButton>
                <Typography className="view-cnt">250</Typography>
                </div>
            </div>
        </Box>

    </Stack>
)
}

export default PopularPropertyCard;