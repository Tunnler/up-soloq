import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@nextui-org/button";

// Importa tus íconos de roles
import TopIcon from "../images/positions/top.png";
import JungleIcon from "../images/positions/jungle.png";
import MidIcon from "../images/positions/mid.png";
import AdcIcon from "../images/positions/adc.png";
import SuppIcon from "../images/positions/supp.png";

// Importa tus íconos de ELO
import ChallengerIcon from "../images/ranks/Challenger-icon.webp";
import GrandmasterIcon from "../images/ranks/Grandmaster-icon.webp";
import MasterIcon from "../images/ranks/Master-icon.webp";
import DiamondIcon from "../images/ranks/Diamond-icon.webp";
import EmeraldIcon from "../images/ranks/Emerald-icon.webp";
import PlatinumIcon from "../images/ranks/Platinum-icon.webp";
import GoldIcon from "../images/ranks/Gold-icon.webp";
import SilverIcon from "../images/ranks/Silver-icon.webp";
import BronzeIcon from "../images/ranks/Bronze-icon.webp";
import IronIcon from "../images/ranks/Iron-icon.png";
import UnrankedIcon from "../images/ranks/Unranked-icon.webp";

interface RankedStats {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints?: number;
  wins: number;
  losses: number;
}

interface StreamerData {
  streamer: string;
  summonerName: string;
  tag: string;
  rol: Role;
  profileIconId: number;
  summonerLevel: number;
  rankedStats: RankedStats | null;
  key?: string;
}

type Role = "top" | "jungle" | "mid" | "adc" | "supp";

const roleIcons: Record<Role, string> = {
  top: TopIcon,
  jungle: JungleIcon,
  mid: MidIcon,
  adc: AdcIcon,
  supp: SuppIcon,
};

const eloIcons: Record<string, string> = {
  CHALLENGER: ChallengerIcon,
  GRANDMASTER: GrandmasterIcon,
  MASTER: MasterIcon,
  DIAMOND: DiamondIcon,
  EMERALD: EmeraldIcon,
  PLATINUM: PlatinumIcon,
  GOLD: GoldIcon,
  SILVER: SilverIcon,
  BRONZE: BronzeIcon,
  IRON: IronIcon,
  UNRANKED: UnrankedIcon,
};

const eloTranslations: Record<string, string> = {
  CHALLENGER: "Challenger",
  GRANDMASTER: "Grandmaster",
  MASTER: "Master",
  DIAMOND: "Diamante",
  EMERALD: "Esmeralda",
  PLATINUM: "Platino",
  GOLD: "Oro",
  SILVER: "Plata",
  BRONZE: "Bronce",
  IRON: "Hierro",
  UNRANKED: "Unranked",
};

const rankPriority: Record<string, number> = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  "": 5, // para unranked o ligas sin subniveles
};

const handleButtonClick = (summonerName: string, tag: string) => {
  const url = `https://www.op.gg/summoners/las/${summonerName}-${tag}`;
  window.open(url, "_blank");
};

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortDirection] = React.useState<
    "ascending" | "descending"
  >("ascending");

  const [data, setData] = React.useState<StreamerData[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(
          "https://dark-jacinta-up-soloq-13686f90.koyeb.app/"
        );
        let json: StreamerData[] = await res.json();
        setIsLoading(false);

        let items = json.map((item) => ({
          key: `${item.streamer}-${item.summonerName}`,
          ...item,
        }));

        setData(items);
      } catch (error) {
        console.error("Error loading data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const eloPriority: Record<string, number> = {
    CHALLENGER: 1,
    GRANDMASTER: 2,
    MASTER: 3,
    DIAMOND: 4,
    EMERALD: 5,
    PLATINUM: 6,
    GOLD: 7,
    SILVER: 8,
    BRONZE: 9,
    IRON: 10,
    UNRANKED: 11,
  };

  const sortedData = React.useMemo(() => {
    return [...data].sort((a, b) => {
      const tierA = a.rankedStats?.tier || "UNRANKED";
      const tierB = b.rankedStats?.tier || "UNRANKED";

      const priorityA = eloPriority[tierA];
      const priorityB = eloPriority[tierB];

      if (priorityA !== priorityB) {
        return sortDirection === "ascending"
          ? priorityA - priorityB
          : priorityB - priorityA;
      }

      const rankA = rankPriority[a.rankedStats?.rank || ""];
      const rankB = rankPriority[b.rankedStats?.rank || ""];

      if (rankA !== rankB) {
        return sortDirection === "ascending" ? rankA - rankB : rankB - rankA;
      }

      const lpA = a.rankedStats?.leaguePoints || 0;
      const lpB = b.rankedStats?.leaguePoints || 0;

      return sortDirection === "ascending" ? lpB - lpA : lpA - lpB;
    });
  }, [data, sortDirection]);

  const renderCell = React.useCallback(
    (item: StreamerData, columnKey: React.Key) => {
      const rankedStats: RankedStats = item.rankedStats || {
        leagueId: "",
        queueType: "",
        tier: "UNRANKED",
        rank: "",
        wins: 0,
        losses: 0,
      };
  
      switch (columnKey) {
        case "rankPosition":
          const index = sortedData.findIndex((data) => data.key === item.key) + 1;
          return <p>{index}</p>;
        case "streamer":
          return <p>{item.streamer}</p>;
        case "rol":
          return (
            <div className="flex items-center">
              {roleIcons[item.rol] && (
                <img
                  src={roleIcons[item.rol]}
                  alt={item.rol}
                  className="w-6 h-6 mr-2"
                />
              )}
            </div>
          );
        case "summonerName#tag":
          return (
            <div className="flex items-center">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.12.1/img/profileicon/${item.profileIconId}.png`}
                alt={`Profile Icon ${item.summonerName}`}
                className="w-7 h-7 mr-2 rounded-full"
              />
              <p>
                {item.summonerName}#{item.tag}
              </p>
            </div>
          );
          case "rank":
            const tier = eloTranslations[rankedStats.tier] || "Unranked";
            const rank = rankedStats.rank ? ` ${rankedStats.rank}` : "";
            const leaguePoints =
              rankedStats.leaguePoints !== undefined
                ? ` (${rankedStats.leaguePoints} LP)`
                : "";
          
            return (
              <div className="flex items-center min-w-[160px]">
                <img
                  src={eloIcons[rankedStats.tier]}
                  alt={rankedStats.tier}
                  className="w-9 h-9 mr-1"
                />
                <p className="font-bold">
                  {tier}
                  {rank}&nbsp;
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {leaguePoints}
                </p>
              </div>
            );
          
          
        case "totalGames":
          return <p>{rankedStats.wins + rankedStats.losses}</p>;
        case "wins":
          return <p>{rankedStats.wins}</p>;
        case "losses":
          return <p>{rankedStats.losses}</p>;
        case "winrate":
          const totalGames = rankedStats.wins + rankedStats.losses;
          return (
            <p>
              {totalGames > 0
                ? ((rankedStats.wins / totalGames) * 100).toFixed(2) + "%"
                : "0.00%"}
            </p>
          );
        case "stats":
          return (
            <Button
              radius="lg"
              className="font-bold"
              color="primary"
              variant="light"
              onClick={() => handleButtonClick(item.summonerName, item.tag)}
            >
              OP.GG
            </Button>
          );
        default:
          return item[columnKey as keyof StreamerData] as React.ReactNode;
      }
    },
    [sortedData]
  );
  

  return (
    <Table className="dark:text-white text-gray-700" aria-label="Streamer Data Table" selectionMode="single">
      <TableHeader>
        <TableColumn key="rankPosition">RANK</TableColumn>
        <TableColumn key="streamer">STREAMER</TableColumn>
        <TableColumn key="rol">ROL</TableColumn>
        <TableColumn key="summonerName#tag">CUENTA</TableColumn>
        <TableColumn key="rank">ELO</TableColumn>
        <TableColumn key="totalGames">PARTIDAS</TableColumn>
        <TableColumn key="wins">GANADAS</TableColumn>
        <TableColumn key="losses">PERDIDAS</TableColumn>
        <TableColumn key="winrate">WINRATE</TableColumn>
        <TableColumn key="stats">STATS</TableColumn>
      </TableHeader>
      <TableBody
        items={sortedData}
        isLoading={isLoading}
        loadingContent={<Spinner label="Cargando..." />}
      >
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
