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
import { LocationOn, CalendarToday } from "@mui/icons-material";

export default function Calendario() {
  const eventos = [
    { local: "Posto Central", periodo: "01/10 a 05/10" },
    { local: "Escola Municipal", periodo: "06/10 a 10/10" },
    { local: "UBS Bairro Novo", periodo: "11/10 a 15/10" },
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
            📅 Calendário de Vacinação
          </Typography>
          <Typography variant="h5" sx={{ color: "white", opacity: 0.95 }}>
            Confira as datas e locais da campanha:
          </Typography>
        </Box>

        <Card sx={{ boxShadow: 6, borderRadius: 3 }}>
          <CardContent>
            <List>
              {eventos.map((evento, index) => (
                <ListItem
                  key={index}
                  sx={{
                    py: 3,
                    borderBottom: index < eventos.length - 1 ? "1px solid #e5e7eb" : "none",
                  }}
                >
                  <ListItemIcon>
                    <LocationOn sx={{ fontSize: 40, color: "#3b82f6" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" fontWeight="bold" color="#1e3a8a">
                        {evento.local}
                      </Typography>
                    }
                    secondary={
                      <Box display="flex" alignItems="center" gap={1} mt={1}>
                        <CalendarToday sx={{ fontSize: 18, color: "#6b7280" }} />
                        <Typography variant="body1" color="text.secondary">
                          {evento.periodo}
                        </Typography>
                      </Box>
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
