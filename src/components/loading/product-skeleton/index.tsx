import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";

const ProductCardSkeleton: React.FC<{ count: number }> = ({ count }) => {
  return (
    <>
      <div className="container">
        <Grid sx={{ width: "100%" }} spacing={3} container>
          {new Array(count).fill("").map((_, inx) => (
            <Grid item xs={4} key={inx}>
              <Box>
                <Skeleton variant="rectangular" width={"100%"} height={300} />
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton height={60} />
                  <Skeleton height={60} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default ProductCardSkeleton;
