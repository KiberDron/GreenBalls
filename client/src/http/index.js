import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchGreenBalls = async () => {
  const { data } = await $host.get("api/green_balls");
  return data;
};

export const createGreenBall = async () => {
  const { data } = await $host.post("api/green_balls");
  return data;
};

export const deleteGreenBalls = async () => {
  const { data } = await $host.delete("api/green_balls");
  return data;
};
