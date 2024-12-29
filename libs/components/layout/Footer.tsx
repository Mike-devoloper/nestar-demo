import { FacebookOutlined, Instagram, Telegram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Stack } from "@mui/system"

const Footer = () => {
    return (
        <Stack className={"footer-container"}>
            <Stack className={"main"}>
                <Stack className={"left"}>
                    <Box component={"div"} className={"footer-box"}>
                        <img src="/img/logo/logoWhite.svg" alt="" className="logo"/>
                    </Box>
                    <Box component={"div"} className={"footer-box"}> 
                        <span>total free custumer care</span>
                        <p>+82 10 4867 2909</p>
                    </Box>
                    <Box component={"div"} className={"footer-box"}>
                      <span>nee live</span>
                      <p>+82 10 4867 2909</p>
                      <span>Support?</span>
                    </Box>
                    <Box component={"div"} className={"footer-box"}>
                    <span>Follow us on Social media</span>
                    <div className="media-box">
                        <FacebookOutlined/>
                        <Telegram/>
                        <Instagram/>
                        <Twitter/>
                    </div>
                    </Box>
                </Stack>
                <Stack className={"right"}>
                     <Box component={"div"} className={"top"}> 
                        <strong>keep yourself up to date</strong>
                        <div>
                            <input type="text" placeholder="Your Email" />
                            <span>Subscribe</span>
                        </div>
                    </Box>
                    <Box component={"div"} className={"bottom"}> 
                        <div>
                            <strong>Popular search</strong>
                            <span>Property for rent</span>
                            <span>Property low to Hide</span>
                        </div>
                        <div>
                            <strong>Quick links</strong>
                            <span>Terms of use</span>
                            <span>Privacy Policy</span>
                            <span>Our Services</span>
                            <span>Pricing Plans</span>
                            <span>Contact Support</span>
                            <span>FAQs</span>
                        </div>
                        <div>
                            <strong>Discover</strong>
                            <span>Seoul</span>
                            <span>Gyengido</span>
                            <span>Busan</span>
                            <span>Jeju</span>
                        </div>
                    </Box>
                </Stack>
            </Stack>
            <Stack className={"second"}>
                <span>Nestar -All rights reserved. Nestar 2024</span>
                <span>Privacy Terms Sitemap</span>
            </Stack>
        </Stack>
    )
}

export default Footer;