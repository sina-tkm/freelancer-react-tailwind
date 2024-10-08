import { useNavigate } from "react-router-dom";

export default function useNavigteBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
