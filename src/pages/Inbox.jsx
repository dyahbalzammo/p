import * as React from 'react';
import axios from 'axios'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
import { CardActionArea } from '@mui/material';

import {
    Link
} from "react-router-dom";

function Inbox() {

    const [triggerRender, setTriggerRender] = React.useState(0);
    React.useEffect(() => {
        console.log("Inbox Dirender");

        const myTimeout = setTimeout(myGreeting, 1500);

        function myGreeting() {
            // getData()
            clearTimeout(myTimeout);
        }
        // getData()

    }, [triggerRender]);


    const [dataApi, setDataApi] = React.useState([]);
    async function getData() {
        var config = {
            method: "get",
            url: `https://jsonplaceholder.typicode.com/users`
        };

        try {
            const resp = await axios(config);
            // const hasil = await JSON.stringify(resp.data)
            // console.log(resp);

            const data = resp.data;
            console.log(data);

            setDataApi(data)

        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    function handleFullPicture() {
        alert('handleFullPicture')
    }

    return (
        <>
            <p>Inbox</p>

            {/* For variant="text", adjust the height via font-size */}
            {/* For other variants, adjust the size with `width` and `height` */}
            {/* {dataApi.length == 0 ?
                <Stack spacing={1}>
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                </Stack>
                :
                <> */}

            {/* <video width="320" height="240" controls>
                <source src="https://www.mediafire.com/file/6kcapf1coq6fbp2/videoplayback.mp4" type="video/mp4" />
            </video> */}

            {/* <video data-v-30244848="" id="videoplayer_html5_api" muted="muted" class="vjs-tech" tabindex="-1" preload="auto" autoplay="" src="blob:https://www.terabox.com/61be831c-ad1b-41e0-9c4f-6c13424ad834"></video> */}

            {/* <video width="320" height="240" controls>
                <source src="https://www.terabox.com/play/video?path=%2Fvideoplayback.mp4" type="video/mp4" />
            </video> */}

            <video width="320" height="240" controls>
                <source src="https://terabox.com/s/15kywOPnEGEV0Ay_p2MAmxQ" type="video/mp4" />
            </video>

            {/* <video width="320" height="240" controls>
                <source src="https://drive.google.com/u/0/uc?id=1cx_G51GPq1y5x0UngrjLd3hCn8-uDXia&export=download" type="video/mp4" />
            </video> */}

            {/* <iframe src="https://player.vimeo.com/video/805370081?h=f11fe14c0c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="videoplayback.mp4"></iframe> */}

            {/* <iframe src="https://drive.google.com/file/d/1cx_G51GPq1y5x0UngrjLd3hCn8-uDXia/preview" width="640" height="480" allow="autoplay"></iframe> */}

            <Card sx={{ maxWidth: "100%" }} onClick={handleFullPicture}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://lh3.googleusercontent.com/drive-viewer/AAOQEOT-7yujjMR2IoG612SggvzSsgUlj7yhWMTUKJV6iGmoTwn-q4cdtZJH1yvvyAKR0v2jmI-69O2sMantk2HG8RoqoWtL_w=w1920-h1093"
                        alt="green iguana"
                    />
                    {/* <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent> */}
                </CardActionArea>
                {/* <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions> */}
            </Card>

            {/* {
                        dataApi.map((data) =>
                            <Card sx={{ minWidth: 275 }} key={data.id}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {data.id}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {data.name}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={`/inbox-details/${data.id}`}>
                                        <Button size="small">Learn More</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        )
                    } */}
            {/* onClick={() => handleSidebarNavLink('inbox')} */}

            {/* </>
            } */}
        </>
    );
}

export default Inbox;