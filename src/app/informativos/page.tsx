"use client";

import { Box, Container, Typography, Card, CardContent, Stack } from "@mui/material";

const informativos = [
  {
    titulo: "O que é vacina?",
    descricao: "Vacina é uma preparação biológica que protege contra doenças, estimulando o sistema imunológico.",
  },
  {
    titulo: "Como funciona?",
    descricao: "Ela apresenta ao corpo uma versão inativa ou fragmentada do vírus/bactéria para que o organismo aprenda a se defender.",
  },
  {
    titulo: "Por que é importante?",
    descricao: "A vacinação previne doenças graves, reduz hospitalizações e protege toda a comunidade.",
  },
];

export default function Informativos() {
  return (
    <Box sx={{ py: 12, backgroundColor: "#7c3aed" }}>
      <Container>
        <Typography
          variant="h3"
          sx={{ fontWeight: 900, color: "white", mb: 6, textAlign: "center" }}
        >
          📚 Informativos sobre Vacinação
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          flexWrap="wrap"
          justifyContent="center"
        >
          {informativos.map((info, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: 3,
                boxShadow: 6,
                width: { xs: "100%", md: "30%" }, // responsivo
                mb: 4,
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  mb={2}
                  color="primary.main"
                >
                  {info.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {info.descricao}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
