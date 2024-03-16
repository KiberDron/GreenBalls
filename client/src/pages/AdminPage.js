import React from "react";
import { createGreenBall, deleteGreenBalls } from "../http/index";

const AdminPage = () => {
  return (
    <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center"}}>
      <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <button onClick={createGreenBall}>Добавить зеленый шар</button>
        <button onClick={deleteGreenBalls}>Удалить все</button>
      </div>
    </div>
  );
};

export default AdminPage;
