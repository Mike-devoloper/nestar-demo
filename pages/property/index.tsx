import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";
import { green } from "@mui/material/colors";
import { NextPage } from "next";

const Property:NextPage = () => {
    return <>
       <Container sx={{background: green}}>Property Page</Container>
    </>
 }
 
 export default withLayoutBasic(Property);