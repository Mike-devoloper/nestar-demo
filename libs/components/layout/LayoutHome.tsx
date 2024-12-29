import { brown, green } from "@mui/material/colors"
import { Stack } from "@mui/system"
import Head from "next/head"
import HeaderFilter from "../HeaderFilter"
import Footer from "./Footer"
import Top from "./Top"

const withLayoutMain = (Component: any) => {
    return (props: any) => {
        return (
            <>
       <Head><title>Nestar</title></Head>
       <Stack id="pc-wrap">
       <Stack id={"top"}>
        <Top/>
       </Stack>
       <Stack className={"header-main"}>
            <Stack className={"container"}>
                <HeaderFilter/>
            </Stack>
       </Stack>

        <Stack id="main">
            <Component {...props}/>
        </Stack>

       <Stack id={"footer"}>
        <Footer/>
       </Stack>
       </Stack>
       </>
        )
       
    }
}

export default withLayoutMain;