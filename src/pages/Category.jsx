import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <Typography gutterBottom variant="h5" component="div" align="center">
                <h2>Best Selling Category</h2>
            </Typography>
           
            <Box>
                <Grid container spacing={8} sx={{ padding: '2% 15%' }}>
                    
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <Link style={{ textDecoration: "none" }} to={"/DSLR"} target="_self" >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={require("../assets/img/DSLR.jpg")}
                                        alt="DSLR"
                                        sx={{ height: '100%' }}
                                    />
                                    <CardContent sx={{ backgroundColor: "#00bae1" }}>
                                        <Typography gutterBottom variant="h5" color="text.primary" component="div">
                                            DSLR CAMERA
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>  
                    </Grid>
                   
                    <Grid item xs={12} md={6} lg={4} >
                        <Card>
                            <Link style={{ textDecoration: "none" }} to={"/action-camera"} target="_self" >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={require("../assets/img/ActionCamera.jpg")}
                                        alt="green iguana"
                                        sx={{ height: '100%' }}
                                    />
                                    <CardContent sx={{ backgroundColor: "#ffd301" }}>
                                        <Typography gutterBottom variant="h5" color="text.primary" component="div">
                                            ACTION CAMERA
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <Link style={{ textDecoration: "none" }} to={"/video-camera"} target="_self" >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={require("../assets/img/VideoCamera.jpg")}
                                        alt="green iguana"
                                        sx={{ height: '100%' }}
                                    />
                                    <CardContent sx={{ backgroundColor: "#de3f28" }}>
                                        <Typography gutterBottom variant="h5" color="text.primary" component="div">
                                            VIDEO CAMERA
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
          
        </div>
    )
}

export default Category;
