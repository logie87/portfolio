import { useMemo } from "react";
import { GitHubCalendar, type Activity } from "react-github-calendar";

type Props = { username: string };

function lastNDays(n: number) {
  return (data: Activity[]) => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - n);

    return data.filter((d) => new Date(d.date) >= cutoff);
  };
}

export default function GitHubContrib({ username }: Props) {
  const transformData = useMemo(() => lastNDays(183), []); // ~6 months

  return (
    <div className="ghCalWrap" aria-label={`${username} GitHub contributions (last 6 months)`}>
      <div className="ghCalInner">
        <GitHubCalendar
          username={username}
          transformData={transformData}
          colorScheme="dark"
          showTotalCount={true}
          showColorLegend={true}
          showWeekdayLabels={false}
          showMonthLabels={true}
          blockSize={15}
          blockMargin={5}
          fontSize={12}
          theme={{
            dark: [
              "rgba(255,255,255,0.06)",   // empty
              "rgba(99,179,255,0.18)",    // low  
              "rgba(64,156,255,0.34)",    // mid
              "rgba(34, 148, 255, 0.55)",    // high
              "rgba(0, 185, 236, 0.7)",     // peak  
            ],
          }}
        />
      </div>
    </div>
  );
}
// adjusted but sourced from https://github.com/grubersjoe/react-github-calendar THIS REPO
