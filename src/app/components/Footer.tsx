"use client";

import { Box, Typography, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#4c1d95", color: "white", py: 3, mt: 6 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} justifyContent="center" alignItems="center">
        <Typography>© 2025 Portal Vacina</Typography>
        <Typography>Todos os direitos reservados</Typography>
      </Stack>
    </Box>
  );
}
