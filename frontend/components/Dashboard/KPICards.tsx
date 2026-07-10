// import ScoreCard from "@/components/ScoreCard"
// import RiskBadge from "@/components/RiskBadge"

// export default function KPICards() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

//       <ScoreCard
//         title="Overall Health Score"
//         value="842"
//         subtitle="Excellent Financial Health"
//         color="#003366"
//       />

//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//         <p className="text-gray-500 text-sm">
//           Risk Level
//         </p>

//         <div className="mt-4">
//           <RiskBadge level="Low" />
//         </div>

//         <p className="text-sm text-gray-500 mt-4">
//           Safe for lending
//         </p>
//       </div>

//       <ScoreCard
//         title="Credit Decision"
//         value="Approve"
//         subtitle="AI Recommendation"
//         color="#16A34A"
//       />

//       <ScoreCard
//         title="Loan Eligibility"
//         value="₹48 Lakh"
//         subtitle="Eligible Amount"
//         color="#003366"
//       />

//       <ScoreCard
//         title="Confidence Score"
//         value="96%"
//         subtitle="High Confidence"
//         color="#005BAC"
//       />

//       <ScoreCard
//         title="Last Analyzed"
//         value="Today"
//         subtitle="11:42 AM"
//         color="#003366"
//       />

//     </div>
//   )
// }


import ScoreCard from "@/components/ScoreCard";
import RiskBadge from "@/components/RiskBadge";

interface DashboardStats {
  total_msmes: number;
  approved: number;
  rejected: number;
  pending: number;
  average_health_score: number;
}

interface KPICardsProps {
  stats: DashboardStats;
}

export default function KPICards({ stats }: KPICardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      <ScoreCard
        title="Total MSMEs"
        value={stats.total_msmes.toString()}
        subtitle="Registered MSMEs"
        color="#003366"
      />

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <p className="text-gray-500 text-sm">
          Risk Level
        </p>

        <div className="mt-4">
          <RiskBadge level="Low" />
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Dashboard Connected
        </p>
      </div>

      <ScoreCard
        title="Approved"
        value={stats.approved.toString()}
        subtitle="Approved MSMEs"
        color="#16A34A"
      />

      <ScoreCard
        title="Rejected"
        value={stats.rejected.toString()}
        subtitle="Rejected MSMEs"
        color="#DC2626"
      />

      <ScoreCard
        title="Pending"
        value={stats.pending.toString()}
        subtitle="Pending Reviews"
        color="#F59E0B"
      />

      <ScoreCard
        title="Average Health"
        value={stats.average_health_score.toString()}
        subtitle="Overall Health Score"
        color="#005BAC"
      />

    </div>
  );
}