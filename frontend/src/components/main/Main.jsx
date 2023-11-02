import { useTheme } from '@emotion/react';
import { Box, Container, Dialog, IconButton, Stack, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Rating from '@mui/material/Rating';
import { Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';
// RTK-query
import { useGetproductByNameQuery } from '../../Redux/product';




const Main = () => {

    const handleAlignment = (event, newValue) => {
        
        setmyData(newValue) //newAlignment == newValue
    };
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const allProuductsApi = 'products?populate=*';
    const menCategoryApi = 'products?populate=*&filters[productCategory][$eq]=Men';
    const womenCategoryApi = 'products?populate=*&filters[productCategory][$eq]=Women';

    const [myData, setmyData] = useState(allProuductsApi);

    const { data, error, isLoading } = useGetproductByNameQuery(myData);

    if (data) {
        console.log(data.data)
    }

    if (isLoading) {
        return (
            <Typography variant='h6' >Loading..................</Typography>
        )
    }
    if (error) {
        return (
            <Typography variant='h6' > Oh no, there was an error {error.message}</Typography>
        )
    }


    if (data) {
        return (
            <Container sx={{ py: 9 }}>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    gap={3}
                >
                    <Box>
                        <Typography variant="h6">Selected Products</Typography>
                        <Typography fontWeight={300} variant="body1">
                            All our new arrivals in a exclusive brand selection
                        </Typography>
                    </Box>
                    <ToggleButtonGroup
                        color='error'
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{
                            ".Mui-selected": {
                                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                                color: "#e94560",
                                backgroundColor: "initial",
                            },
                        }}
                    >
                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className='myButton'
                            value={allProuductsApi}
                            aria-label="left aligned"
                        >
                            All Products
                        </ToggleButton>
                        <ToggleButton
                            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                            className='myButton'
                            value={menCategoryApi}
                            aria-label="centered"
                        >
                            MEN category
                        </ToggleButton>
                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className='myButton'
                            value={womenCategoryApi}
                            aria-label="right aligned"
                        >
                            Women category
                        </ToggleButton>

                    </ToggleButtonGroup>
                </Stack>

                <Stack direction={'row'} flexWrap={"wrap"} justifyContent={"space-between"}>
                    {/* {["aa", "bb", "cc"].map((item) => { */}
                    {data.data.map((item) => {
                        return (
                            <Card key={item}
                                sx={{
                                    maxWidth: 333, mt: 6,
                                    ":hover .MuiCardMedia-root": { scale: "1.2", rotate: "1deg", transition: "0.4s ease-in-out" },
                                }}>
                                <CardMedia
                                    sx={{ height: 270 }}
                                    // strapi development
                                    // image={`${import.meta.env.VITE_BASE_URL}${item.attributes.productImage.data[0].attributes.url}`}
                                    // uploded to cloudinary
                                    image={`${item.attributes.productImage.data[0].attributes.url}`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                    >
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.attributes.productTitle}
                                        </Typography>

                                        <Typography variant="subtitle1" component="p">
                                            $ {item.attributes.productPrice}
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.attributes.productDescription}

                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "space-between" }}>
                                    <Button onClick={handleClickOpen} sx={{ textTransform: "capitalize" }} size="large">
                                        <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
                                        add to cart
                                    </Button>
                                    <Rating precision={0.5} name="read-only" value={item.attributes.productRating} readOnly />
                                </CardActions>
                            </Card>
                        )
                    })}
                </Stack>



                <Dialog
                    sx={{ ".MuiPaper-root": { minWidth: { xs: "90%", md: 800 } } }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <IconButton onClick={handleClose}
                        sx={{
                            position: "absolute", top: 0, right: 10,
                            ":hover": { rotate: "180deg", transition: "0.3s", color: "red" }
                        }}
                    >
                        <Close />
                    </IconButton>

                    <ProductDetails />

                </Dialog>

            </Container>
        )
    }
}

export default Main