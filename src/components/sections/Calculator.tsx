import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Calculator = () => {
  const [channels, setChannels] = useState(10);
  const [investment, setInvestment] = useState("medium");
  const [result, setResult] = useState<number | null>(null);

  const calculateIncome = () => {
    let income = 0;
    if (investment === "low") income = channels * 10000;
    else if (investment === "medium") income = channels * 16000;
    else if (investment === "high") income = channels * 35000;
    setResult(Math.round(income / 1000) * 1000);
  };

  // Generate dynamic chart data based on selected values
  const chartData = useMemo(() => {
    let baseIncome = 0;
    if (investment === "low") baseIncome = channels * 10000;
    else if (investment === "medium") baseIncome = channels * 16000;
    else if (investment === "high") baseIncome = channels * 35000;

    // Generate 13 data points for 12 months
    const points: [number, number][] = [];
    const startX = 40;
    const endX = 280;
    const maxY = 180;
    const minY = 30;
    
    for (let i = 0; i < 13; i++) {
      const x = startX + (i * (endX - startX) / 12);
      // Growth curve: starts slow, accelerates in middle, stabilizes at end
      const growthFactor = 1 + (i / 12) * 1.5; // 100% to 250% growth
      const y = maxY - ((growthFactor - 1) / 1.5) * (maxY - minY);
      points.push([x, y]);
    }
    
    return { points, maxIncome: baseIncome * 2.5 };
  }, [channels, investment]);

  // Generate Y-axis labels based on max income
  const yAxisLabels = useMemo(() => {
    const max = chartData.maxIncome;
    return [
      { label: `${(max / 1000000).toFixed(1)}M`, value: max },
      { label: `${(max * 0.75 / 1000000).toFixed(1)}M`, value: max * 0.75 },
      { label: `${(max * 0.5 / 1000000).toFixed(1)}M`, value: max * 0.5 },
      { label: `${(max * 0.25 / 1000).toFixed(0)}K`, value: max * 0.25 },
      { label: "0", value: 0 },
    ];
  }, [chartData.maxIncome]);

  return (
    <section
      id="calculator-section"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[image:var(--hero-gradient)] opacity-90" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ваш финансовый{" "}
            <span className="bg-gradient-to-r from-blue-200 to-accent bg-clip-text text-transparent">
              потенциал
            </span>
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Сеть из 10 медиаканалов приносит от 1,2 до 1,65 млн рублей выручки
            ежемесячно.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square max-w-md bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4 text-center">
                Прогноз роста дохода (12 месяцев)
              </h4>
              <div className="relative h-[calc(100%-2rem)]">
                <svg viewBox="0 0 300 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="incomeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="40"
                      y1={20 + i * 40}
                      x2="290"
                      y2={20 + i * 40}
                      stroke="white"
                      strokeOpacity="0.1"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Y-axis labels */}
                  {yAxisLabels.map((item, i) => (
                    <text
                      key={i}
                      x="35"
                      y={25 + i * 40}
                      fill="white"
                      fontSize="10"
                      textAnchor="end"
                      opacity="0.6"
                    >
                      {item.label}
                    </text>
                  ))}
                  
                  {/* Area under curve */}
                  <path
                    d={`M ${chartData.points.map(([x, y]) => `${x} ${y}`).join(' L ')} L 290 ${chartData.points[chartData.points.length - 1][1]} L 290 180 Z`}
                    fill="url(#incomeGradient)"
                    className="animate-fade-in"
                  />
                  
                  {/* Growth curve */}
                  <path
                    d={`M ${chartData.points.map(([x, y]) => `${x} ${y}`).join(' L ')}`}
                    stroke="#60a5fa"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  />
                  
                  {/* Data points */}
                  {chartData.points.map(([x, y], i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="white"
                      className="animate-scale-in"
                      style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                    >
                      <title>Месяц {i + 1}: ~{((chartData.maxIncome * (1 + (i / 12) * 1.5) / 2.5) / 1000).toFixed(0)}K ₽</title>
                    </circle>
                  ))}
                  
                  {/* X-axis labels */}
                  {["1", "3", "6", "9", "12"].map((month, i) => (
                    <text
                      key={i}
                      x={40 + i * 62.5}
                      y="195"
                      fill="white"
                      fontSize="10"
                      textAnchor="middle"
                      opacity="0.6"
                    >
                      {month}м
                    </text>
                  ))}
                </svg>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Рассчитайте ваш{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  потенциальный доход
                </span>
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Количество каналов в пакете:
                  </label>
                  <Slider
                    value={[channels]}
                    onValueChange={(value) => setChannels(value[0])}
                    min={5}
                    max={50}
                    step={5}
                    className="mb-2"
                  />
                  <div className="text-center text-lg font-semibold text-primary">
                    {channels} каналов
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Уровень стартовых инвестиций в маркетинг:
                  </label>
                  <Select value={investment} onValueChange={setInvestment}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">
                        Минимальный (для пакета "Активный старт")
                      </SelectItem>
                      <SelectItem value="medium">
                        Средний (для пакета "Бизнес Рост")
                      </SelectItem>
                      <SelectItem value="high">
                        Высокий (для пакета "Премиум Инвестор")
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateIncome} className="w-full" size="lg">
                  Рассчитать
                </Button>
                {result !== null && (
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">
                      Ваш примерный ежемесячный пассивный доход:
                    </p>
                    <p className="text-3xl font-extrabold text-primary my-2">
                      ~{result.toLocaleString("ru-RU")} ₽
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Это ориентировочный расчет. Точные цифры зависят от
                      множества факторов.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Получить подробную финансовую модель
          </Button>
        </div>
      </div>
    </section>
  );
};
