"use client";

import Link from "next/link";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import { Vaccines, CalendarMonth, Phone } from "@mui/icons-material";

export default function HomeCampanha() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 200px)",
        background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #22d3ee 100%)",
        py: 8,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 2,
              textShadow: "0 4px 6px rgba(0,0,0,0.2)",
            }}
          >
            Campanha Nacional de Vacinação
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              opacity: 0.95,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Proteja-se e proteja quem você ama. Vacinar é um ato de cuidado coletivo!
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          justifyContent="center"
        >
          <Button
            component={Link}
            href="/campanha/vacinas"
            variant="contained"
            size="large"
            startIcon={<Vaccines />}
            sx={{
              bgcolor: "white",
              color: "#1e3a8a",
              py: 2,
              px: 4,
              fontSize: "1.1rem",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "#1e3a8a",
                color: "white",
                transform: "translateY(-5px)",
              },
              transition: "all 0.3s ease",
              boxShadow: 3,
            }}
          >
            Ver Vacinas
          </Button>

          <Button
            component={Link}
            href="/campanha/calendario"
            variant="contained"
            size="large"
            startIcon={<CalendarMonth />}
            sx={{
              bgcolor: "white",
              color: "#1e3a8a",
              py: 2,
              px: 4,
              fontSize: "1.1rem",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "#1e3a8a",
                color: "white",
                transform: "translateY(-5px)",
              },
              transition: "all 0.3s ease",
              boxShadow: 3,
            }}
          >
            Ver Calendário
          </Button>

          <Button
            component={Link}
            href="/campanha/contato"
            variant="contained"
            size="large"
            startIcon={<Phone />}
            sx={{
              bgcolor: "white",
              color: "#1e3a8a",
              py: 2,
              px: 4,
              fontSize: "1.1rem",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "#1e3a8a",
                color: "white",
                transform: "translateY(-5px)",
              },
              transition: "all 0.3s ease",
              boxShadow: 3,
            }}
          >
            Fale Conosco
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}