"use client";
import { Box, Container, Typography, Stack } from "@mui/material";

export default function FaqPage() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ color: "primary.main", fontWeight: 800, mb: 4, textAlign: "center" }}>
          Perguntas Frequentes
        </Typography>

        <Stack spacing={4}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>As vacinas têm efeitos colaterais?</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Podem causar reações leves como dor no local da aplicação ou febre baixa, mas os benefícios superam
              amplamente os riscos.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Posso tomar mais de uma vacina no mesmo dia?</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Sim! Muitas vacinas podem ser aplicadas juntas sem problemas, conforme orientação do profissional de saúde.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>As vacinas são gratuitas?</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Sim, todas as vacinas do Programa Nacional de Imunizações (PNI) estão disponíveis gratuitamente pelo SUS.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
