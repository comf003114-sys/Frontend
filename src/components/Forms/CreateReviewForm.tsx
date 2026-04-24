import React from "react"; 
import { useState } from "react";
import { Box, Button, TextField, Typography, Rating } from "@mui/material";
import type { Review } from "../../types/review";

interface CreateReviewFormProps {
  dishId: number;
  onReviewAdded: (review: Review) => void;
}

const CreateReviewForm: React.FC<CreateReviewFormProps> = ({ dishId, onReviewAdded }) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number>(5);

  const handleSubmit = () => {
    if (!username || !comment) return;

    const newReview: Review = {
      id: Date.now(),
      dish_id: dishId,
      user_id: 0,
      username,
      rating,
      comment,
      createdAt: new Date(),
    };

    onReviewAdded(newReview);
    setUsername("");
    setComment("");
    setRating(5);
  };

  return (
    <Box
      mt={4}
      p={3}
      sx={{ backgroundColor: "#2a2a2c", borderRadius: "12px", border: "1px solid #8B2331" }}
    >
      <Typography variant="h6" color="#FFFFFF" mb={3} fontWeight={700}>
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
            "&:hover fieldset": { borderColor: "#FFFFFF" },
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
            "&:hover fieldset": { borderColor: "#FFFFFF" },
          },
          "& .MuiInputLabel-root": { color: "#AAAAAA" },
        }}
      />

      <Box mb={3}>
        <Typography color="#AAAAAA" mb={1}>Оценка:</Typography>
        <Rating
          value={rating}
          onChange={(_, val) => setRating(val || 5)}
          sx={{ color: "#8B2331" }}
        />
      </Box>

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!username || !comment}
        sx={{
          backgroundColor: "#8B2331",
          "&:hover": { backgroundColor: "#6e1c27" },
          "&:disabled": { backgroundColor: "#555", color: "#888" },
          py: 1.5,
          px: 4,
        }}
      >
        Отправить отзыв
      </Button>
    </Box>
  );
};

export default CreateReviewForm;