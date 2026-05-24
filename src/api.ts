const API_URL = import.meta.env.VITE_API_URL as string;

export const login = async (email: string, password: string) => {
  const res = await fetch(API_URL + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const register = async (username: string, email: string, password: string) => {
  const res = await fetch(API_URL + "/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(API_URL + "/categories");
  return res.json();
};

export const getDishes = async () => {
  const res = await fetch(API_URL + "/dishes");
  return res.json();
};

export const getDishById = async (id: number) => {
  const res = await fetch(API_URL + "/dishes/" + id);
  return res.json();
};

export const getReviews = async (dishId: number) => {
  const res = await fetch(API_URL + "/reviews/" + dishId);
  return res.json();
};

export const createReview = async (comment: string, rating: number, dishId: number) => {
  const token = localStorage.getItem("token");
  const res = await fetch(API_URL + "/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
    },
    body: JSON.stringify({ comment, rating, dishId }),
  });
  return res.json();
};