import { useState } from "react";
import type { Review } from "../../types/review";
import { Box, Typography, TextField, Button, Rating } from "@mui/material";
import ReviewCard from "../ReviewCard/ReviewCard";

const mockReviews: Review[] = [
  { id: 1, dish_id: 1, user_id: 1, username: "Иван", rating: 5, comment: "Очень вкусно!", createdAt: new Date("2024-01-15") },
  { id: 2, dish_id: 1, user_id: 2, username: "Мария", rating: 4, comment: "Отличное блюдо, рекомендую!", createdAt: new Date("2024-02-20") },
];

const ReviewList = ({ dishId }: { dishId: number }) => {
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number>(5);

  const handleSubmit = () => {
    if (!username || !comment) return;
    const newReview: Review = {
      id: reviews.length + 1,
      dish_id: dishId,
      user_id: 0,
      username,
      rating,
      comment,
      createdAt: new Date(),
    };
    setReviews([...reviews, newReview]);
    setUsername("");
    setComment("");
    setRating(5);
  };

  return (
    <Box mt={3}>
      <Typography variant="h5" color="#FFFFFF" mb={3} fontWeight={700}>
        Отзывы
      </Typography>

      {reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))
      ) : (
        <Typography variant="h6" align="center" color="gray" mt={3}>
          Отзывов пока нет. Будьте первым!
        </Typography>
      )}

      <Box mt={4} p={3} sx={{ backgroundColor: "#2a2a2c", borderRadius: "12px" }}>
        <Typography variant="h6" color="#FFFFFF" mb={2}>
          Оставить отзыв
        </Typography>

        <TextField
          fullWidth
          label="Ваше имя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              color: "#FFFFFF",
              "& fieldset": { borderColor: "#8B2331" },
            },
            "& .MuiInputLabel-root": { color: "#AAAAAA" },
          }}
        />

        <TextField
          fullWidth
          label="Комментарий"
          multiline
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              color: "#FFFFFF",
              "& fieldset": { borderColor: "#8B2331" },
            },
            "& .MuiInputLabel-root": { color: "#AAAAAA" },
          }}
        />

        <Box mb={2}>
          <Typography color="#AAAAAA" mb={1}>Оценка:</Typography>
          <Rating value={rating} onChange={(_, val) => setRating(val || 5)} />
        </Box>

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ backgroundColor: "#8B2331", "&:hover": { backgroundColor: "#6e1c27" } }}
        >
          Отправить
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewList;