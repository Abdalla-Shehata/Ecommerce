import { ExpandMore, KeyboardArrowRightOutlined } from '@mui/icons-material';
import { Box, Paper, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// eslint-disable-next-line react/prop-types
const Links = ({ title }) => {
    return (
        <Box
            // className="border"
            sx={{
                display: "flex", alignItems: "center",
                position: "relative",
                ":hover .show-when-hover": { display: "block" },
                ":hover ": { cursor: "pointer" },
            }}
        >
            <Typography variant="body1">
                {title}
            </Typography>
            <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

            <Box
                className="show-when-hover "
                sx={{
                    position: "absolute",
                    minWidth: "170px",
                    top: "100%", left: "50%",
                    transform: "translateX(-50%)",
                    display: "none",
                    zIndex:2,
                }}
            >

                <Paper
                    sx={{
                        mt: 1.5,
                    }}
                >
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        display: "flex",
                                        py: 0,
                                        px: 1.5,
                                    }}
                                >
                                    <ListItemText
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontSize: "15px",
                                                fontWeight: 300,
                                            },
                                        }}
                                        primary="Dashboard"
                                    />
                                    <Box flexGrow={1} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem
                                sx={{
                                    ":hover .sub-link": { display: "block" },
                                    position: "relative",
                                }}
                                disablePadding
                            >
                                <ListItemButton
                                    sx={{
                                        display: "flex",
                                        py: 0,
                                        px: 1.5,
                                    }}
                                >
                                    <ListItemText
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontSize: "15px",
                                                fontWeight: 300,
                                            },
                                        }}
                                        primary="products"
                                    />
                                    <Box flexGrow={1} />

                                    <KeyboardArrowRightOutlined fontSize="small" />
                                </ListItemButton>

                                <Box
                                    className="sub-link"
                                    sx={{
                                        display: "none",

                                        position: "absolute",
                                        top: 0,
                                        left: "100%",
                                    }}
                                >
                                    <Paper sx={{ ml: 1, minWidth: 150 }}>
                                        <nav aria-label="secondary mailbox folders">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton
                                                        sx={{
                                                            display: "flex",
                                                            py: 0,
                                                            px: 1.5,
                                                        }}
                                                    >
                                                        <ListItemText
                                                            sx={{
                                                                "& .MuiTypography-root": {
                                                                    fontSize: "15px",
                                                                    fontWeight: 300,
                                                                },
                                                            }}
                                                            primary="Add Product"
                                                        />
                                                        <Box flexGrow={1} />
                                                    </ListItemButton>
                                                </ListItem>

                                                <ListItem disablePadding>
                                                    <ListItemButton
                                                        sx={{
                                                            display: "flex",
                                                            py: 0,
                                                            px: 1.5,
                                                        }}
                                                    >
                                                        <ListItemText
                                                            sx={{
                                                                "& .MuiTypography-root": {
                                                                    fontSize: "15px",
                                                                    fontWeight: 300,
                                                                },
                                                            }}
                                                            primary="Edit Product"
                                                        />
                                                        <Box flexGrow={1} />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    </Paper>
                                </Box>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        display: "flex",
                                        py: 0,
                                        px: 1.5,
                                    }}
                                >
                                    <ListItemText
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontSize: "15px",
                                                fontWeight: 300,
                                            },
                                        }}
                                        primary="orders"
                                    />
                                    <Box flexGrow={1} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        display: "flex",
                                        py: 0,
                                        px: 1.5,
                                    }}
                                >
                                    <ListItemText
                                        sx={{
                                            "& .MuiTypography-root": {
                                                fontSize: "15px",
                                                fontWeight: 300,
                                            },
                                        }}
                                        primary="Profile"
                                    />
                                    <Box flexGrow={1} />
                                </ListItemButton>
                            </ListItem>

                        </List>
                    </nav>
                </Paper>
            </Box>




        </Box>

    )
}

export default Links;