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
        <div style={{
            padding: '20px 0px 60px', margin: '5%', border: '2px solid #f1f1f1',
            borderRadius: '10px', display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"
        }}>
            <div className='typography'><Typography gutterBottom variant="h5" component="div" align="center">
                <h2>Best Selling Category</h2>
            </Typography>
            </div>
            <div>
            <Box sx={{
  border: "10px solid green",
  display: "flex",
  width: "100%",
  maxWidth: "1000px",
  '@media (max-width: 600px)': {
    width: "90%",
    maxWidth: "100%"
  }
}}>
                    <Grid container>
                        <div className='grid-view' style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>

                            <Grid item xs={12} md={6} lg={4} margin={2}>
                                <item>
                                    <Card sx={{ maxWidth: 310 }} >
                                        {/* need to add link */}
                                        <Link style={{ textDecoration: "none" }} to={"/DSLR"} target="_self" >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={require("../assets/img/DSLR.jpg")}
                                                    alt="DSLR"
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
                                </item>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} margin={2}>
                                <item>
                                    <Card sx={{ maxWidth:310 }}>
                                        <Link style={{ textDecoration: "none" }} to={"/VideoCamera"} target="_self" >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="180"
                                                    image={require("../assets/img/ActionCamera.jpg")}
                                                    alt="green iguana"
                                                />
                                                <CardContent sx={{ backgroundColor: "#ffd301" }}>
                                                    <Typography gutterBottom variant="h5" color="text.primary" component="div">
                                                        ACTION CAMARA
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                                        species, ranging across all continents except Antarctica
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Link>
                                    </Card>
                                </item>
                            </Grid>
                            <Grid xs={12} md={6} lg={4} margin={2}>
                                <item>
                                    <Card sx={{ maxWidth: 310 }}>
                                        <Link style={{ textDecoration: "none" }} to={"/VideoCamera"} target="_self" >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={require("../assets/img/VideoCamera.jpg")}
                                                    alt="green iguana"
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
                                </item>
                            </Grid>
                        </div>
                    </Grid>

                </Box>
            </div>


        </div>
    )
}

export default Category;
