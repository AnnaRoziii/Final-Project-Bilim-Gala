import {Box, Typography, Paper} from "@mui/material"
import Carousel from "../common/Carousel"


function CarouselSection() {
    return (
  <Box>     
<Box sx={{bgcolor: "primary.main", width: "100%", color: "secondary.main", textAlign: "center", paddingBottom: "100px"}} >
  <Box sx={{bgcolor: "primary.main", width: "80%", m: "0 auto"}}> 
   <Typography variant="h4" color={"custom1.main"}>News</Typography>
    <Typography variant="body1" margin={"15px 0 40px 0"}>С нами вы всегда будете впереди, принимая во внимание современные вызовы и возможности в сфере образования</Typography>
    <Carousel/>
    </Box>
</Box>
<Paper variant="outlined"/>
</Box> 
    )
}
export default CarouselSection

















