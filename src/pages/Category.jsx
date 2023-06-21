// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Category = () => {
//     return (
//         <div>
//             <Typography gutterBottom variant="h5" component="div" align="center">
//                 <h2>Best Selling Category</h2>
//             </Typography>

//             <Box>
//                 <Grid container spacing={8} sx={{ padding: '2% 15%' }}>

//                     <Grid item xs={12} md={6} lg={4}>
//                         <Card>
//                             <Link style={{ textDecoration: "none" }} to={"/DSLR"} target="_self" >
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="200"
//                                         image={require("../assets/img/DSLR.jpg")}
//                                         alt="DSLR"
//                                         sx={{ height: '100%' }}
//                                     />
//                                     <CardContent sx={{ backgroundColor: "#00bae1" }}>
//                                         <Typography gutterBottom variant="h5" color="text.primary" component="div">
//                                             DSLR CAMERA
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Link>
//                         </Card>  
//                     </Grid>

//                     <Grid item xs={12} md={6} lg={4} >
//                         <Card>
//                             <Link style={{ textDecoration: "none" }} to={"/action-camera"} target="_self" >
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="200"
//                                         image={require("../assets/img/ActionCamera.jpg")}
//                                         alt="green iguana"
//                                         sx={{ height: '100%' }}
//                                     />
//                                     <CardContent sx={{ backgroundColor: "#ffd301" }}>
//                                         <Typography gutterBottom variant="h5" color="text.primary" component="div">
//                                             ACTION CAMERA
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Link>
//                         </Card>
//                     </Grid>
//                     <Grid item xs={12} md={6} lg={4}>
//                         <Card>
//                             <Link style={{ textDecoration: "none" }} to={"/video-camera"} target="_self" >
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="200"
//                                         image={require("../assets/img/VideoCamera.jpg")}
//                                         alt="green iguana"
//                                         sx={{ height: '100%' }}
//                                     />
//                                     <CardContent sx={{ backgroundColor: "#de3f28" }}>
//                                         <Typography gutterBottom variant="h5" color="text.primary" component="div">
//                                             VIDEO CAMERA
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             Lizards are a widespread group of squamate reptiles, with over 6,000
//                                             species, ranging across all continents except Antarctica
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Link>
//                         </Card>
//                     </Grid>
//                 </Grid>
//             </Box>

//         </div> */}


//         <div>

//         </div>
//     )
// }



import * as React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = () => {

    return (

        <div className='cat_row'>
            <div className='col-1'>
                <img src={require("../assets/img/Salesman pointing.png")} />
            </div>
            <div className='col-2'>
                <h2>Here We Comes With Different Category.</h2>
                <p>If you're looking to sell your old camera, you've come to the right place. At SellYourCamera.in,
                    we make it easy for you to find buyers who are passionate about photography and ready to give your camera a new home. Whether you have a vintage film camera or the latest digital powerhouse,
                    our platform connects you with potential buyers from all around.</p>
                <h3>Select Your Category and follow some easy steps.</h3>
            </div>
            <div className='col-3'>
             <h2>Ready to sell your old camera?</h2>
                <Link style={{ textDecoration: "none" }} to={"/DSLR"} target="_self" >
                    <div className='items'>
                        <img src={require("../assets/img/DSLR.jpg")} />
                        <h3>DSLR Camera</h3>
                    </div>
                </Link>
                <Link style={{ textDecoration: "none" }} to={"/Action-camera"} target="_self" >
                    <div className='items'>
                        <img src={require("../assets/img/ActionCamera.jpg")} />
                        <h3>Action Camera</h3>
                    </div>
                </Link>
                <Link style={{ textDecoration: "none" }} to={"/video-camera"} target="_self" >
                    <div className='items'>
                        <img src={require("../assets/img/VideoCamera.jpg")} />
                        <h3>Video Camera</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Category;
