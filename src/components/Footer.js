import React from "react";
import { Box, Stack, Typography, Container, Grid, Link } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => (
    <Box mt="80px" bgcolor="#FFF3F4">
        <Stack
            gap="40px"
            sx={{ alignItems: "center" }}
            flexWrap="wrap"
            px="40px"
            pt="24px"
        >
            <img
                src={Logo}
                alt="logo"
                style={{ width: "50px", height: "50px" }}
            />
        </Stack>

        <Typography
            variant="h5"
            sx={{ fontSize: { lg: "28px", xs: "20px" } }}
            mt="41px"
            textAlign="center"
            pb="40px"
        >
            by Kanishk Agarwal
        </Typography>
        <Box>
            <Container>
                <Grid container spacing={5} textAlign="center">
                    <Grid item xs={12} sm={4}>
                        <Box color="#FF2625">Connect with me</Box>
                        <Box sx={{ justifyContent: "center" }}>
                            <Box>
                                <Link href="https://github.com/unnamedka1">
                                    <GitHubIcon />
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://www.linkedin.com/in/kanishkaga/">
                                    <InstagramIcon />
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/">
                                    <LinkedInIcon />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </Box>
);

export default Footer;
