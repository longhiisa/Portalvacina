"use client";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#2E7D32" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          💉 Portal de Vacinação
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} href="/">Início</Button>
          <Button color="inherit" component={Link} href="/vacinas">Sobre as Vacinas</Button>
          <Button color="inherit" component={Link} href="/calendario">Calendário</Button>
          <Button color="inherit" component={Link} href="/perguntas">Perguntas</Button>
          <Button color="inherit" component={Link} href="/contato">Contato</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
