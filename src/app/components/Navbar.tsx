"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import { Vaccines } from "@mui/icons-material";

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#1e40af", boxShadow: 3 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Vaccines sx={{ fontSize: 40, color: "white" }} />
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "white",
                display: { xs: "none", md: "block" },
              }}
            >
              Portal da Vacinação
            </Typography>
          </Link>

          {/* Espaçador */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Menu */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              href="/campanha"
              sx={{
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Campanha
            </Button>
            <Button
              component={Link}
              href="/campanha/vacinas"
              sx={{
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Vacinas
            </Button>
            <Button
              component={Link}
              href="/campanha/calendario"
              sx={{
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Calendário
            </Button>
            <Button
              component={Link}
              href="/campanha/contato"
              sx={{
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Contato
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
