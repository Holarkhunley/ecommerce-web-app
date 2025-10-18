import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Progress } from "@/components/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import FunnelComponents from "./FunnelComponent.tsx";

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTooltip, Legend);

type Visitor = {
  _id: {
    year: number;
    month?: number;
    day?: number;
    week?: number;
  };
  count: number;
};

type ChartData = {
  x: string;
  y: number;
};

type Device = {
  device: string;
  count: number;
};

function TrafficChart() {
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">("daily");
  const [data, setData] = useState<ChartData[]>([]);
  const [countries, setCountries] = useState<{ [key: string]: number }>({});
  const [progress, setProgress] = useState<{ [key: string]: number }>({});
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);

  // ---- Log visit per IP per session ----
  useEffect(() => {
    const visitLogged = sessionStorage.getItem("visitLogged");
    if (!visitLogged) {
      axios
        .post("/api/log-visit")
        .then(() => sessionStorage.setItem("visitLogged", "true"))
        .catch((err) => console.error("Error logging visit:", err));
    }
  }, []);

  // ---- Fetch countries for progress bar ----
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get("/api/countries");
        setCountries(res.data);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchCountries();
    const interval = setInterval(fetchCountries, 5000); // optional auto-refresh
    return () => clearInterval(interval);
  }, []);

  // ---- Calculate progress percentages ----
  useEffect(() => {
    const total = Object.values(countries).reduce((a, b) => a + b, 0);
    const countryPercentages: { [key: string]: number } = {};
    Object.entries(countries).forEach(([country, count]) => {
      countryPercentages[country] = total > 0 ? (count / total) * 100 : 0;
    });
    setProgress(countryPercentages);
  }, [countries]);

  // ---- Fetch visitors for line chart ----
  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await axios.get(
          `/api/get-visitors-overtime?period=${period}`
        );
        const visitors: Visitor[] = res.data.visitors;

        const chartData: ChartData[] = visitors.map((v) => {
          if (period === "daily")
            return {
              x: `${v._id.year}-${v._id.month}-${v._id.day}`,
              y: v.count,
            };
          if (period === "weekly")
            return { x: `Week ${v._id.week}`, y: v.count };
          return { x: `${v._id.year}-${v._id.month}`, y: v.count };
        });

        setData(chartData);
      } catch (err) {
        console.error("Error fetching visitors:", err);
      }
    };

    fetchVisitors();
  }, [period]);

  // ---- Fetch device counts for bar chart ----
  useEffect(() => {
    const controller = new AbortController();
    const fetchDevices = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/traffic", {
          signal: controller.signal,
        });
        if (Array.isArray(res.data.device)) {
          setDevices(res.data.device); // ✅ only use device array
        } else {
          console.warn("Expected devices array, got:", res.data);
          setDevices([]);
        }
      } catch (err: any) {
        if (err?.name !== "CanceledError")
          console.error("Error fetching devices:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
    return () => controller.abort();
  }, []);

  // ---- Prepare bar chart data ----
  const labels = devices.map((d) => d.device);
  const values = devices.map((d) => d.count);

  const barData = {
    labels,
    datasets: [
      {
        label: "Device count",
        data: values,
        backgroundColor: ["#f59e0b", "#22c55e", "#ec4899"],
        borderRadius: 6,
        barThickness: 50,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { precision: 0 } } },
  };

  return (
    <div className="flex flex-row  gap-4 mx-auto h-[900px]">
      <div className=" w-[700px]">
        <div className="flex flex-row justify-center my-auto mt-3">
          <button className="bg-purple-900 text-gray-300 p-1 w-[100px] mr-2 hover:bg-purple-950 hover:text-gray-200 hover:p-5" onClick={() => setPeriod("daily")}>Daily</button>
          <button  className="bg-purple-900 text-gray-300 p-1 w-[100px] mr-2  hover:bg-purple-950 hover:text-gray-200" onClick={() => setPeriod("weekly")}>Weekly</button>
          <button  className="bg-purple-900 text-gray-300 p-1 w-[100px]  hover:bg-purple-950 hover:text-gray-200" onClick={() => setPeriod("monthly")}>Monthly</button>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-4  mt-3">
          <h3 className="text-lg font-semibold mb-4">
            Top Devices (Last 10 min)
          </h3>
          {loading ? (
            <p className="text-slate-500 text-sm">Loading...</p>
          ) : (
            <Bar data={barData} options={barOptions} />
          )}
        </div>

        <Card className="w-full mt-3">
          <CardHeader>
            <CardTitle>New Visitors Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="#8884d8"
                  strokeWidth={3}
                  dot
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="">
        <div className="space-y-4">
          {Object.entries(progress)
            .filter(([country]) => country !== "Unknown")
            .map(([country, percentRaw]) => (
              <div key={country}>
                <p>
                  {country} — {percentRaw.toFixed(0)}%
                </p>
                <Progress value={percentRaw} />
              </div>
            ))}
        </div>

        <Card className="w-[350px] h-full rounded-none m-0 p-0">
          <CardHeader>
            <CardTitle>Traffic Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <FunnelComponents />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TrafficChart;
