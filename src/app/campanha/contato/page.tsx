"use client";

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import React from "react";

export default function Contato() {
  const contatos = [
    {
      icon: <Phone sx={{ fontSize: 40, color: "#3b82f6" }} />,
      titulo: "Telefone",
      descricao: "(11) 1234-5678",
    },
    {
      icon: <Email sx={{ fontSize: 40, color: "#3b82f6" }} />,
      titulo: "Email",
      descricao: "vacinacao@campanha.gov.br",
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: "#3b82f6" }} />,
      titulo: "Endereço",
      descricao: "Rua da Saúde, 100 - Centro",
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
            📞 Contato
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              opacity: 0.95,
            }}
          >
            Em caso de dúvidas, fale conosco:
          </Typography>
        </Box>

        <Card
          sx={{
            boxShadow: 6,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <List>
              {contatos.map((contato, index) => (
                <ListItem
                  key={index}
                  sx={{
                    py: 3,
                    borderBottom: index < contatos.length - 1 ? "1px solid #e5e7eb" : "none",
                  }}
                >
                  <ListItemIcon>{contato.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" fontWeight="bold" color="#1e3a8a">
                        {contato.titulo}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1" color="text.secondary" mt={1}>
                        {contato.descricao}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}