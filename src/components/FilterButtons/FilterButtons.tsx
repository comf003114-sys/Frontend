import { Box, Typography } from "@mui/material";

export type PriceFilter = "all" | "cheap" | "medium" | "expensive";

interface FilterButtonsProps {
  active: PriceFilter;
  onChange: (filter: PriceFilter) => void;
}

const filters: { value: PriceFilter; label: string; desc: string }[] = [
  { value: "all", label: "Все", desc: "Показать все блюда" },
  { value: "cheap", label: "До 100 MDL", desc: "Доступные блюда" },
  { value: "medium", label: "100–200 MDL", desc: "Средний ценовой сегмент" },
  { value: "expensive", label: "Дороже 200 MDL", desc: "Премиум блюда" },
];

const FilterButtons = ({ active, onChange }: FilterButtonsProps) => {
  return (
    <Box
      sx={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        backgroundColor: "#1a1a1c",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        px: { xs: 3, md: 8 },
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 2,
        }}
      >
        {filters.map((f) => (
          <Box
            key={f.value}
            onClick={() => onChange(f.value)}
            sx={{
              py: 3,
              px: 3,
              borderRadius: "16px",
              cursor: "pointer",
              border: "1px solid",
              borderColor:
                active === f.value
                  ? "#8B2331"
                  : "rgba(255,255,255,0.06)",
              backgroundColor:
                active === f.value
                  ? "rgba(139,35,49,0.15)"
                  : "rgba(255,255,255,0.02)",
              transition: "all 0.25s",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                borderColor: "#8B2331",
                backgroundColor: "rgba(139,35,49,0.08)",
                transform: "translateY(-2px)",
              },
              "&::before": active === f.value ? {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #8B2331, transparent)",
              } : {},
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "17px" },
                fontWeight: active === f.value ? 700 : 500,
                color: active === f.value ? "#fff" : "#555",
                mb: 0.5,
                transition: "color 0.25s",
              }}
            >
              {f.label}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: active === f.value ? "rgba(255,255,255,0.5)" : "#333",
                letterSpacing: "0.3px",
                transition: "color 0.25s",
              }}
            >
              {f.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FilterButtons;