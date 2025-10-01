"use client";

import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#4c1d95" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Nome do site como link para Home */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "white",       // mantém branco
            textDecoration: "none", // remove sublinhado
            cursor: "pointer",
          }}
          component={Link}
          href="/"
        >
          Portal Vacina
        </Typography>

        {/* Links de navegação */}
        <Stack direction="row" spacing={2}>
          <Typography
            component={Link}
            href="/calendario"
            sx={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          >
            Calendário
          </Typography>
          <Typography
            component={Link}
            href="/vacinas"
            sx={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          >
            Vacinas
          </Typography>
          <Typography
            component={Link}
            href="/informativos"
            sx={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          >
            Informativos
          </Typography>
          <Typography
            component={Link}
            href="/contato"
            sx={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          >
            Contato
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
