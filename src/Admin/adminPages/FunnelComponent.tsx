import { FunnelChart, Funnel, Tooltip, LabelList, Cell } from "recharts";
import axios from "axios";
import { useEffect, useState } from "react";

type Source = {
  source: string;
  count: number;
};

function FunnelComponents() {
  const [sources, setSources] = useState<Source[]>([]);

  // Colors for segments
  const colors = ["green", "orange", "yellow", "red", "blue"];

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const res = await axios.get("/api/traffic");
        setSources(res.data.source || []);
      } catch (err: any) {
        console.error("Error fetching sources:", err);
      }
    };
    fetchSources();
  }, []);

  return (
      <FunnelChart width={300} height={400}>
        <Funnel dataKey="count" data={sources} isAnimationActive={false}>
          {sources.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              stroke="white"
              strokeWidth={2}
            />
          ))}
          <hr />
          {/* Count inside each segment */}
          <LabelList position="inside" fill="#fff" stroke="black" dataKey="count" />
          {/* Source names on the right */}
          <LabelList position="right" fill="#000" stroke="none" dataKey="source" />
        </Funnel>
        <Tooltip 
          wrapperStyle={{
            backgroundColor: "rgba(34,197,94,0.9)", // semi-transparent green
            color: "#fff",
            borderRadius: "0.5rem",
            padding: "0.5rem",
          }}
        />
      </FunnelChart>
  
  );
}

export default FunnelComponents;
