"use client";

import { Box, Container, Typography, Stack, TextField, Button } from "@mui/material";
import { Mail, Phone } from "@mui/icons-material";

export default function Contato() {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 900, color: "white", mb: 4 }}>
          📞 Contato
        </Typography>

        <Stack spacing={3}>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <Phone sx={{ color: "white" }} />
            <Typography color="white">(11) 3456-7890</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <Mail sx={{ color: "white" }} />
            <Typography color="white">saude@prefeitura.gov.br</Typography>
          </Stack>

          <TextField label="Nome" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Mensagem" variant="outlined" fullWidth multiline rows={4} />

          <Button variant="contained" size="large" sx={{ mt: 2, bgcolor: "white", color: "#4c1d95", "&:hover": { bgcolor: "#4c1d95", color: "white" } }}>
            Enviar
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
