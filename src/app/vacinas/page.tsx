"use client";

import { Box, Container, Typography, Grid, Card, CardContent, Stack } from "@mui/material";
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
    <Box sx={{ width: "100%", py: 12, background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #a78bfa 100%)" }}>
      <Container>
        <Typography variant="h3" color="white" fontWeight={900} mb={6} textAlign="center">
          💉 Vacinas Disponíveis
        </Typography>

        <Grid container spacing={4}>
          {vacinas.map((vacina, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ borderRadius: 3, boxShadow: 6 }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <CheckCircle color="primary" />
                    <Stack>
                      <Typography variant="body1" fontWeight={600}>{vacina.nome}</Typography>
                      <Typography variant="body2" color="text.secondary">{vacina.publico}</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
