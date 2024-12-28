import React from "react";
import { Game } from "../hooks/useGames";
import { Badge, Text } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "grey";

  return <Badge colorScheme={color}>{score} </Badge>;
};

export default CriticScore;
