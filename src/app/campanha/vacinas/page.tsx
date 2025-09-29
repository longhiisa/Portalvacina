"use client";

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { Vaccines, Coronavirus, HealthAndSafety, LocalHospital } from "@mui/icons-material";
import React from "react";


export default function Vacinas() {
  const vacinas = [
    {
      nome: "Influenza (Gripe)",
      descricao: "Proteção contra os vírus mais comuns da gripe sazonal",
      icon: <Vaccines sx={{ fontSize: 60, color: "#3b82f6" }} />,
      cor: "#dbeafe",
    },
    {
      nome: "COVID-19",
      descricao: "Imunização contra o coronavírus SARS-CoV-2",
      icon: <Coronavirus sx={{ fontSize: 60, color: "#ef4444" }} />,
      cor: "#fee2e2",
    },
    {
      nome: "Sarampo",
      descricao: "Prevenção contra o vírus do sarampo altamente contagioso",
      icon: <HealthAndSafety sx={{ fontSize: 60, color: "#f59e0b" }} />,
      cor: "#fef3c7",
    },
    {
      nome: "HPV",
      descricao: "Proteção contra o Papilomavírus Humano",
      icon: <LocalHospital sx={{ fontSize: 60, color: "#8b5cf6" }} />,
      cor: "#ede9fe",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 200px)",
        background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #22d3ee 100%)",
        py: 8,
      }}
    >
      <Container maxWidth="md">
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
            🏥 Vacinas Disponíveis
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
            Conheça as vacinas oferecidas em nossa campanha
          </Typography>
        </Box>

        <Stack spacing={3}>
          {vacinas.map((vacina, index) => (
            <Card
              key={index}
              sx={{
                boxShadow: 6,
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 12,
                },
              }}
            >
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    bgcolor: vacina.cor,
                    p: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "140px",
                  }}
                >
                  {vacina.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    fontWeight="bold"
                    color="#1e3a8a"
                    mb={1}
                  >
                    {vacina.nome}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
                    {vacina.descricao}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          ))}
        </Stack>

        <Box
          sx={{
            mt: 6,
            p: 4,
            bgcolor: "white",
            borderRadius: 3,
            boxShadow: 6,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#1e3a8a"
            mb={2}
            textAlign="center"
          >
            ⚠️ Importante
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Consulte um profissional de saúde para saber qual vacina é indicada para você.
            A vacinação é gratuita e está disponível em todos os postos de saúde.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}