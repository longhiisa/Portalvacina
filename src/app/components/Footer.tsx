"use client";

import { Box, Container, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import React from "react";


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#111827",
        color: "white",
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography
            variant="body1"
            sx={{
              color: "#9ca3af",
              mb: 1,
            }}
          >
            © 2025 Campanha Nacional de Vacinação. Todos os direitos reservados.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#6b7280",
              }}
            >
              Proteja-se e proteja quem você ama
            </Typography>
            <Favorite sx={{ fontSize: 16, color: "#3b82f6" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}