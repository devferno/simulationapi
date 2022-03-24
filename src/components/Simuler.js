import {
  TextField,
  Box,
  Container,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { champs, projet } from "../common";
import TableAmortissment from "./TableAmortissment";
import { Link, useNavigate } from "react-router-dom";
import Back from "./back5.jpg";

const DataShow = ({ simulation }) => {
  const { salaire, duree, prix, taux } = simulation;
  return (
    <Box
      sx={{
        background: "white",
        my: 1,
        p: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body1">Salaire : {salaire}Dh</Typography>
      <Typography variant="body1">Duree : {duree}ans</Typography>
      <Typography variant="body1">Montant : {prix}Dh</Typography>
      <Typography variant="body1">Taux : {taux}%</Typography>
    </Box>
  );
};

const Simuler = () => {
  const [simulation, setSimulation] = useState({
    salaire: "",
    duree: "",
    prix: "",
    taux: "",
    projet: "",
  });

  const [data, setData] = useState();
  const [length, setLength] = useState();
  const [isHide, setHide] = useState(true);
  const myRef = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSimulation((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (localStorage.getItem("simulationInfo")) {
      setSimulation((prev) => ({ ...prev, taux: parseFloat(simulation.taux) }));
      axios
        .post(
          "/simulation/",
          JSON.parse(localStorage.getItem("simulationInfo"))
        )
        .then((res) => {
          setSimulation(JSON.parse(localStorage.getItem("simulationInfo")));
          setData(res.data);
          setLength(res.data.amortissement.length);
          setHide(false);
          setMsg(false);
          myRef.current.scrollIntoView();
          localStorage.removeItem("simulationInfo");
        })
        .catch((err) => {
          if (err.response.status === 404) setMsg(true);
        });
    }
    setSimulation((prev) => ({
      ...prev,
      client: localStorage.getItem("client"),
    }));
  }, []);
  const navigate = useNavigate();
  const [msg, setMsg] = useState(false);
  const sendData = (e) => {
    if (e) e.preventDefault();
    setSimulation((prev) => ({ ...prev, taux: parseFloat(simulation.taux) }));

    axios
      .post("/simulation/", simulation)
      .then((res) => {
        setData(res.data);
        setLength(res.data.amortissement.length);
        setHide(false);
        setMsg(false);
        myRef.current.scrollIntoView();
      })
      .catch((err) => {
        if (err.response.status == 404) setMsg(true);
        if (err.response.status == 403) {
          localStorage.setItem("simulationInfo", JSON.stringify(simulation));
          navigate("/verifier");
        }
      });
  };
  return (
    <Box sx={{ margin: "30px 0", padding: "30px 0" }}>
      <Container>
        <Box
          sx={{
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <Box
            component="form"
            onSubmit={sendData}
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
              border: "solid 2px #e3e3e3",

              width: { xs: "100%", md: "100%" },
            }}
          >
            {msg && (
              <Typography
                variant="body2"
                sx={{ textAlign: "center", color: "red" }}
              >
                Désolé, Votre salaire est insuffisant pour un crédit de telle
                montant.
              </Typography>
            )}
            <Typography variant="h5" sx={{ my: 2, textAlign: "center" }}>
              Simuler
            </Typography>
            {champs.map((item) => (
              <TextField
                key={item.name}
                value={simulation[item.name]}
                placeholder={item.placeholder}
                type="number"
                step="0.1"
                name={item.name}
                sx={{ width: "300px", my: 1 }}
                label={item.placeholder}
                onChange={handleChange}
                required
              />
            ))}
            <TextField
              select
              label="projet"
              helperText="choisir votre projet"
              sx={{ width: "300px", my: 1 }}
              name="projet"
              value={simulation.projet}
              onChange={handleChange}
              required
            >
              {projet.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "300px",
                alignItems: "center",
              }}
            >
              <Link to="/historique">
                <Button variant="outlined">Voir historique</Button>
              </Link>
              <Button
                sx={{ my: 2 }}
                variant="contained"
                disableElevation
                type="submit"
              >
                simuler
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${Back})`,
              width: "80%",
              flexGrow: 1,
              display: { xs: "none", md: "block" },
              backgroundSize: "cover",
              minHeight: "100%",
            }}
          ></Box>
        </Box>
        <Box>{!isHide && <DataShow simulation={simulation} />}</Box>
        <Box ref={myRef} style={{ marginTop: "20px" }}>
          {!isHide && <TableAmortissment data={data} length={length} />}
        </Box>
      </Container>
    </Box>
  );
};

export default Simuler;
