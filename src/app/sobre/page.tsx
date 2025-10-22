"use client";
import { Box, Container, Typography } from "@mui/material";

export default function SobrePage() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ color: "primary.main", fontWeight: 800, mb: 4 }}>
          O que é a Vacina?
        </Typography>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
          A vacina é uma substância que estimula o sistema imunológico a reconhecer e combater microrganismos
          que causam doenças. Ela é uma forma segura e eficaz de criar imunidade sem precisar contrair a doença.
          <br /><br />
          As vacinas passam por rigorosos testes de segurança antes de serem aprovadas e são essenciais para
          eliminar doenças graves, como a poliomielite e o sarampo.
        </Typography>
      </Container>
    </Box>
  );
}
