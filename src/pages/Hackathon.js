import { useParams } from "react-router-dom";
import { getHackathon } from "../data/hackathonData";

export default function Hackathon() {
  let params = useParams();
  let hackathon = getHackathon(parseInt(params.hackathonId, 10));
  return (
    <h2>{hackathon.title}</h2>);
}