import React from "react";
import type { Review } from "../../types/review";
import { Card, CardContent, Rating, Typography, Box } from "@mui/material";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card sx={{ width: "100%", marginBottom: 3, backgroundColor: "#DDDDDD" }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Rating name="read-only" value={review.rating} readOnly />
          <Typography variant="subtitle1" color="gray" fontSize={12}>
            {review.createdAt
              ? new Date(review.createdAt).toLocaleDateString()
              : ""}
          </Typography>
        </Box>
        <Typography variant="subtitle1" fontWeight="700" mb={1}>
          {review.username}
        </Typography>
        <Typography variant="body1">{review.comment}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;