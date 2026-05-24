import { useState, useEffect } from "react";
import { Box, Typography, TextField, Rating } from "@mui/material";
import ReviewCard from "../ReviewCard/ReviewCard";
import { getReviews, createReview } from "../../api";

interface ReviewDto {
  id: number;
  comment: string;
  rating: number;
  dishId: number;
  userId: number;
  username: string;
  createdAt: string;
}

const ReviewList = ({ dishId }: { dishId: number }) => {
  const [reviews, setReviews] = useState<ReviewDto[]>([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number>(5);

  useEffect(() => {
    getReviews(dishId).then((data) => {
      if (Array.isArray(data)) setReviews(data);
    });
  }, [dishId]);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Войдите в аккаунт чтобы оставить отзыв");
      return;
    }
    if (!comment) return;
    try {
      await createReview(comment, rating, dishId);
      const data = await getReviews(dishId);
      if (Array.isArray(data)) setReviews(data);
      setComment("");
      setRating(5);
    } catch {
      alert("Ошибка при отправке отзыва");
    }
  };

  const avgRating = reviews.length > 0
    ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
    : 0;

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography sx={{ fontSize: "12px", letterSpacing: "3px", color: "#E8C87A", textTransform: "uppercase" }}>
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
        reviews.map((r) => (
          <ReviewCard key={r.id} review={{
            id: r.id,
            dish_id: r.dishId,
            user_id: r.userId,
            username: r.username,
            rating: r.rating,
            comment: r.comment,
            createdAt: new Date(r.createdAt),
          }} />
        ))
      ) : (
        <Box textAlign="center" py={4}>
          <Typography sx={{ color: "#444", fontSize: "15px" }}>
            Отзывов пока нет. Будьте первым!
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          mt: 4, p: 4,
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
              px: 4, py: 1.5,
              borderRadius: "50px",
              backgroundColor: comment ? "#8B2331" : "rgba(255,255,255,0.05)",
              color: comment ? "#fff" : "#333",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              cursor: comment ? "pointer" : "default",
              transition: "all 0.3s",
              "&:hover": comment ? { backgroundColor: "#6e1c27", transform: "translateY(-1px)" } : {},
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