import React from "react";
import type { Review } from "../../types/review";
import { Box, Typography, Rating } from "@mui/material";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        p: 3,
        mb: 2,
        transition: "border-color 0.3s",
        "&:hover": {
          borderColor: "rgba(232,200,122,0.2)",
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1.5}>
        <Rating
          value={review.rating}
          readOnly
          size="small"
          sx={{ "& .MuiRating-iconFilled": { color: "#E8C87A" } }}
        />
        <Typography sx={{ fontSize: "12px", color: "#444" }}>
          {review.createdAt ? new Date(review.createdAt).toLocaleDateString("ru-RU") : ""}
        </Typography>
      </Box>

      <Typography sx={{ fontSize: "15px", fontWeight: 700, color: "#fff", mb: 1 }}>
        {review.username}
      </Typography>

      <Typography sx={{ fontSize: "14px", color: "#777", lineHeight: 1.7 }}>
        {review.comment}
      </Typography>
    </Box>
  );
};

export default ReviewCard;