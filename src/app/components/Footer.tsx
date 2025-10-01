"use client";

import { Box, Typography, Stack } from "@mui/material";
import { Phone, Mail } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 3, // menor altura
        px: { xs: 3, md: 6 },
        backgroundColor: "#5b21b6", // cor que combina com o background
        color: "white",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="body2" fontWeight={600}>
          © 2025 Prefeitura Municipal
        </Typography>

        <Stack direction="row" spacing={4} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <Phone fontSize="small" />
            <Typography variant="body2">(11) 3456-7890</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Mail fontSize="small" />
            <Typography variant="body2">saude@prefeitura.gov.br</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
