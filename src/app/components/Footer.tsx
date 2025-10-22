"use client";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#2E7D32", color: "white", textAlign: "center", py: 3, mt: 8 }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Portal Nacional de Vacinação — Todos os direitos reservados.
      </Typography>
    </Box>
  );
}
