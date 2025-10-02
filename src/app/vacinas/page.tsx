"use client";

import { Box, Container, Typography, Card, CardContent, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const vacinas = [
  { nome: "Influenza (Gripe)", publico: "Todas as idades" },
  { nome: "COVID-19", publico: "A partir de 6 meses" },
  { nome: "Hepatite B", publico: "Todas as idades" },
  { nome: "Tríplice Viral", publico: "Crianças e adultos" },
  { nome: "dT (Difteria e Tétano)", publico: "Adolescentes e adultos" }
];

export default function Vacinas() {
  return (
    <Box sx={{ py: 12, backgroundColor: "#7c3aed" }}>
      <Container>
        <Typography
          variant="h3"
          sx={{ fontWeight: 900, color: "white", mb: 6, textAlign: "center" }}
        >
          💉 Vacinas Disponíveis
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          flexWrap="wrap"
          justifyContent="center"
        >
          {vacinas.map((vacina, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: 3,
                boxShadow: 6,
                width: { xs: "100%", md: "30%" },
                mb: 4,
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <CheckCircle color="primary" />
                  <Stack>
                    <Typography variant="body1" fontWeight={600}>
                      {vacina.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {vacina.publico}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
