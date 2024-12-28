import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";
import { green } from "@mui/material/colors";

const PropertyDetail = () => {
    return <>
         <Container sx={{background: green}}>Property Detail</Container>
    </>
}

export default withLayoutBasic(PropertyDetail);