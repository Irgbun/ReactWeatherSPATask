import { Routes, Route } from "react-router-dom";
import { MainPage } from "./MainPage";
import { WeatherPage } from "./WeatherPage";
import { NotFoundPage } from "./NotFoundPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Weather" element={<WeatherPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
