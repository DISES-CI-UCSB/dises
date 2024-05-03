import React from "react";
import { Grid, Typography, Box, Link } from "@mui/material";

interface Props {
    details: {
        name: string;
        title: string;
        description: string;
        imagePath: string;
        links: Array<string>;
    }
    
}

export default function MemberBio(props: Props) {

    const { details } = props


    return (
        <Grid item xs={12} sm={8} md={4} lg={3} m={5}>
            <Grid container direction="column" >
                {/* image */}
                <Box 
                    component="img"
                    mb = {2}
                    sx = {{
                        width:"100%",
                        height: "auto"}}
                    src = {details.imagePath} />
                
                {/* name */}
                <Typography component="h4" variant="h4" align="center" mb={2}>
                {details.name}
                </Typography>
                
                {/* description */}
                <Typography component="h6" variant="h6" mb={1} align="left">
                    {details.description}
                </Typography>
                
                {/* links  */}
                <Typography component="h6" variant="h6" align="left">
                    {details.links.map((link) => (
                        <Link href={link} underline="hover" target="_blank" rel="noreferrer">{link}</Link>
                        ))}
                </Typography>
                
                

            </Grid>
        
        </Grid>
    )
}