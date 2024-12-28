import { brown, green } from "@mui/material/colors"
import { Stack } from "@mui/system"
import Head from "next/head"

const withLayoutMain = (Component: any) => {
    return (props: any) => {
        return (
            <>
       <Head><title>Nestar</title></Head>
       <Stack id="pc-wrap">
       <Stack  sx={{background: green[300]}}>Header</Stack>

        <Stack id="main">
            <Component {...props}/>
        </Stack>

       <Stack sx={{background: brown[300]}}>Footer</Stack>
       </Stack>
       </>
        )
       
    }
}

export default withLayoutMain;