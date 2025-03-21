import React, { useState } from "react";

const TrackingStages = ({ currentStage }) => {
  const [TrackOrder, setTrackOrder] = useState(false);
  const stages = [
    { id: 1, label: "Order Placed", icon: "🛒" },
    { id: 2, label: "Pending", icon: "⏳" },
    { id: 3, label: "In Transit", icon: "🚚" },
    { id: 4, label: "Cancelled", icon: "❌" },
    { id: 5, label: "Delivered", icon: "📦" },
  ];

  return (
    <div>
      <button
        onClick={() => setTrackOrder(!TrackOrder)}
        className="text-blue-600 text-xs w-full text-center"
      >
        {TrackOrder ? "❌" : "Track Your Order"}
      </button>
      {TrackOrder && (
        <div className="flex items-center justify-between space-x-4 p-4 relative">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <div
                className={`flex flex-col items-center ${
                  stage.id <= currentStage
                    ? "text-blue-600"
                    : stage.id === 4
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold ${
                    stage.id <= currentStage
                      ? "bg-blue-100 border border-blue-600"
                      : stage.id === 4
                      ? "bg-red-100 border border-red-500"
                      : "bg-gray-100 border border-gray-300"
                  }`}
                >
                  {stage.icon}
                </div>
                <p className="text-sm mt-2">{stage.label}</p>
              </div>
              {/* Line between stages */}
              {index < stages.length - 1 && (
                <div
                  className={`flex-1 h-1  ${
                    index + 1 < currentStage
                      ? "bg-blue-600"
                      : index + 1 === 3
                      ? "bg-red-500"
                      : "bg-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackingStages;
