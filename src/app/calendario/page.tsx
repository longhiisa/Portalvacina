"use client";

import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import {
  Place as MapPin,
  CalendarMonth as Calendar,
  AccessTime as Clock,
  InfoOutlined as Info,
  CheckCircle,
  Mail,
  Phone
} from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Calendario() {
  const eventos = [
    { local: "Posto Central de Saúde", periodo: "01/10 a 05/10", horario: "08h às 17h", endereco: "Av. Principal, 1250 - Centro", capacidade: "Alta demanda" },
    { local: "Escola Municipal Santos Dumont", periodo: "06/10 a 10/10", horario: "09h às 16h", endereco: "Rua das Flores, 345 - Jardim Primavera", capacidade: "Moderada" },
    { local: "UBS Bairro Novo", periodo: "11/10 a 15/10", horario: "08h às 17h", endereco: "Rua São José, 789 - Bairro Novo", capacidade: "Alta demanda" },
    { local: "Centro Comunitário Vila Esperança", periodo: "16/10 a 20/10", horario: "10h às 18h", endereco: "Praça da Esperança, 56 - Vila Esperança", capacidade: "Moderada" },
  ];

  return (
    <Box sx={{ backgroundColor: "#7c3aed", minHeight: "100vh" }}>
      <Navbar />

      <Container sx={{ py: 12 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "white", mb: 6, textAlign: "center" }}>
          💉 Calendário de Vacinação
        </Typography>

        <Stack spacing={4}>
          {eventos.map((e, i) => (
            <Paper key={i} sx={{ p: 4, borderRadius: 3, backgroundColor: "white", boxShadow: 3 }}>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4c1d95" }}>{e.local}</Typography>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Calendar sx={{ color: "#4c1d95" }} />
                  <Typography>{e.periodo}</Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Clock sx={{ color: "#4c1d95" }} />
                  <Typography>{e.horario}</Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <MapPin sx={{ color: "#4c1d95" }} />
                  <Typography>{e.endereco}</Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <CheckCircle sx={{ color: "#4c1d95" }} />
                  <Typography>{e.capacidade}</Typography>
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Stack>

        <Paper sx={{ mt: 8, p: 4, borderRadius: 3, backgroundColor: "#4c1d95", color: "white", textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>🏥 Dúvidas? Entre em contato</Typography>

          <Stack direction={{ xs: "column", md: "row" }} spacing={4} justifyContent="center" mb={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Phone />
              <Typography>(11) 3456-7890</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Mail />
              <Typography>saude@prefeitura.gov.br</Typography>
            </Stack>
          </Stack>

          <Typography>
            A vacinação é fundamental para prevenir doenças e proteger toda a comunidade.
            Não deixe de se imunizar!
          </Typography>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}
