"use client";

import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { Vaccines, CalendarMonth, Phone } from "@mui/icons-material";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box sx={{ width: "100%", minHeight: "calc(100vh - 64px)", backgroundColor: "#7c3aed", py: 12 }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" sx={{ fontWeight: 900, color: "white", mb: 2 }}>
          Campanha Nacional de Vacinação
        </Typography>
        <Typography variant="h5" sx={{ color: "white", mb: 6 }}>
          Proteja-se e proteja quem você ama. Vacinar é um ato de cuidado coletivo!
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={3} justifyContent="center">
          <Button
            component={Link}
            href="/vacinas"
            variant="contained"
            size="large"
            startIcon={<Vaccines />}
            sx={{
              bgcolor: "white",
              color: "#4c1d95",
              py: 2,
              px: 4,
              fontWeight: "bold",
              "&:hover": { bgcolor: "#4c1d95", color: "white", transform: "translateY(-5px)" },
              transition: "all 0.3s ease",
              boxShadow: 3,
            }}
          >
            Vacinas
          </Button>

          <Button
            component={Link}
            href="/calendario"
            variant="contained"
            size="large"
            startIcon={<CalendarMonth />}
            sx={{
              bgcolor: "white",
              color: "#4c1d95",
              py: 2,
              px: 4,
              fontWeight: "bold",
              "&:hover": { bgcolor: "#4c1d95", color: "white", transform: "translateY(-5px)" },
              transition: "all 0.3s ease",
              boxShadow: 3,
            }}
          >
            Calendário
          </Button>

          <Button
            component={Link}
            href="/contato"
            variant="contained"
            size="large"
            startIcon={<Phone />}
            sx={{
              bgcolor: "white",
              color: "#4c1d95",
              py: 2,
              px: 4,
              fontWeight: "bold",
              "&:hover": { bgcolor: "#4c1d95", color: "white", transform: "translateY(-5px)" },
              transition: "all 0.3s ease",
              boxShadow: 3,
            }}
          >
            Contato
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
