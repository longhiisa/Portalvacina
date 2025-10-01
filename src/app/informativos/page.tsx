"use client";

import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const informativos = [
  { titulo: "O que é vacina?", descricao: "Vacina é uma preparação biológica que protege contra doenças, estimulando o sistema imunológico." },
  { titulo: "Como funciona?", descricao: "Ela apresenta ao corpo uma versão inativa ou fragmentada do vírus/bactéria para que o organismo aprenda a se defender." },
  { titulo: "Por que é importante?", descricao: "A vacinação previne doenças graves, reduz hospitalizações e protege toda a comunidade." },
];

export default function Informativos() {
  return (
    <Box sx={{ width: "100%", py: 12, background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #a78bfa 100%)" }}>
      <Container>
        <Typography variant="h3" color="white" fontWeight={900} mb={6} textAlign="center">
          📚 Informativos sobre Vacinação
        </Typography>

        <Grid container spacing={4}>
          {informativos.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ borderRadius: 3, boxShadow: 6 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} mb={2} color="primary.main">
                    {info.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.descricao}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
