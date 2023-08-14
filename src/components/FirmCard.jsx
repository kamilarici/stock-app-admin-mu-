import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
export default function FrimCard({ firm }) {
  const { address, image, name, phone } = firm;
  return (
    <Card
      sx={{
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
        sx={{ height: 140, p: 1, objectFit: "contain" }}
      />
      <Typography variant="body2" color="text.secondary">
        {phone}
      </Typography>
      <CardActions>
        <EditIcon />
        <DeleteOutlineIcon />
      </CardActions>
    </Card>
  );
}
