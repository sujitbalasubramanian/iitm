import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      AWS_IP: "http://52.66.168.66",
      API_IP: "http://127.0.0.1:4000/api",
    },
  },
});
