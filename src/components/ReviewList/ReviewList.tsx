import { useState } from "react";
import type { Review } from "../../types/review";
import { Box, Typography, TextField, Rating } from "@mui/material";
import ReviewCard from "../ReviewCard/ReviewCard";

const mockReviews: Review[] = [
  { id: 1, dish_id: 1, user_id: 1, username: "Иван", rating: 5, comment: "Очень вкусно! Лучшее блюдо в ресторане.", createdAt: new Date("2024-01-15") },
  { id: 2, dish_id: 1, user_id: 2, username: "Мария", rating: 4, comment: "Отличное блюдо, обязательно рекомендую!", createdAt: new Date("2024-02-20") },
];

const ReviewList = ({ dishId }: { dishId: number }) => {
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number>(5);

  const handleSubmit = () => {
    if (!username || !comment) return;
    setReviews([...reviews, {
      id: reviews.length + 1,
      dish_id: dishId,
      user_id: 0,
      username,
      rating,
      comment,
      createdAt: new Date(),
    }]);
    setUsername("");
    setComment("");
    setRating(5);
  };

  const avgRating = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography
          sx={{
            fontSize: "12px",
            letterSpacing: "3px",
            color: "#E8C87A",
            textTransform: "uppercase",
          }}
        >
          Отзывы · {reviews.length}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Rating value={avgRating} readOnly precision={0.5} size="small"
            sx={{ "& .MuiRating-iconFilled": { color: "#E8C87A" } }} />
          <Typography sx={{ color: "#555", fontSize: "13px" }}>
            {avgRating.toFixed(1)}
          </Typography>
        </Box>
      </Box>

      {reviews.length > 0 ? (
        reviews.map((r) => <ReviewCard key={r.id} review={r} />)
      ) : (
        <Box textAlign="center" py={4}>
          <Typography sx={{ color: "#444", fontSize: "15px" }}>
            Отзывов пока нет. Будьте первым!
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          mt: 4,
          p: 4,
          backgroundColor: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #8B2331, transparent)",
          },
        }}
      >
        <Typography sx={{ fontSize: "12px", letterSpacing: "3px", color: "#E8C87A", textTransform: "uppercase", mb: 3 }}>
          Оставить отзыв
        </Typography>

        <TextField
          fullWidth
          placeholder="Ваше имя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              borderRadius: "12px",
              backgroundColor: "rgba(255,255,255,0.03)",
              "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
              "&:hover fieldset": { borderColor: "#8B2331" },
              "&.Mui-focused fieldset": { borderColor: "#8B2331" },
            },
            "& input::placeholder": { color: "#444" },
          }}
        />

        <TextField
          fullWidth
          placeholder="Ваш комментарий..."
          multiline
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              borderRadius: "12px",
              backgroundColor: "rgba(255,255,255,0.03)",
              "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
              "&:hover fieldset": { borderColor: "#8B2331" },
              "&.Mui-focused fieldset": { borderColor: "#8B2331" },
            },
            "& textarea::placeholder": { color: "#444" },
          }}
        />

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography sx={{ color: "#444", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", mb: 1 }}>
              Оценка
            </Typography>
            <Rating
              value={rating}
              onChange={(_, val) => setRating(val || 5)}
              sx={{ "& .MuiRating-iconFilled": { color: "#E8C87A" } }}
            />
          </Box>

          <Box
            onClick={handleSubmit}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "50px",
              backgroundColor: username && comment ? "#8B2331" : "rgba(255,255,255,0.05)",
              color: username && comment ? "#fff" : "#333",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              cursor: username && comment ? "pointer" : "default",
              transition: "all 0.3s",
              "&:hover": username && comment ? {
                backgroundColor: "#6e1c27",
                transform: "translateY(-1px)",
              } : {},
            }}
          >
            Отправить
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewList;