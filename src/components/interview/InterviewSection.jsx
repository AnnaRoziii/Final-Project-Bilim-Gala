import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Video from "./Video";
import InterviewDsc from "./InterviewDsc";

function InterviewSection() {
     const steps = [
          {
               video: require("../../public/study-club.jfif"),
          },
          {
               video: require("../../public/tutor5.jfif"),
          },
          {
               video: require("../../public/tutor4.jfif"),
          },
          {
               video: require("../../public/tutor5.jfif"),
          },
     ];
     return (
          <Box sx={{ padding: "90px 0 50px 0", bgcolor:"primary.main", width: "100%",}}>
               <Box
                    py={{ xs: 5, sm: 10, md: 20 }}
                    px={{ xs: 4, sm: 6, md: 10 }}
                    sx={{
                         bgcolor: "#DFD7BF",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                         borderRadius: 9,
                         margin: "0 auto 50px ",
                         width:"80%"
                    }}
               >
                    <Typography variant="h2" textAlign="center" pb={2} color="primary.main">
                         Interviews
                    </Typography>
                    <Typography variant="body1" maxWidth={700} textAlign="center" pb={6} color="primary.main">
                         It is a long established fact will be distracted.Lorem Ipsum is simply dummy text of
                         the printing and typesetting industry.
                    </Typography>
                    <Grid container spacing={5}>
                         {steps.map((step, index) => (
                              <Grid item xs={12}>
                                   {index % 2 === 0 ? (
                                        <Stack
                                             direction={{ xs: "column", md: "row" }}
                                             gap={{ md: 5 }}
                                             alignItems="center"
                                        >
                                             <Video imgWidth={{ xs: "100%", md: 1 / 2 }} video={step.video} />
                                             <InterviewDsc boxWidth={{ xs: "100%", md: 1 / 2 }} />
                                        </Stack>
                                   ) : (
                                        <Stack
                                             direction={{ xs: "column", md: "row-reverse" }}
                                             columnGap={{ md: 5 }}
                                             alignItems="center"
                                        >
                                             <Video imgWidth={{ xs: "100%", md: 1 / 2 }} video={step.video} />
                                             <InterviewDsc boxWidth={{ xs: "100%", md: 1 / 2 }} />
                                        </Stack>
                                   )}
                              </Grid>
                         ))}
                    </Grid>
               </Box>
          </Box>
     );
}

export default InterviewSection;
