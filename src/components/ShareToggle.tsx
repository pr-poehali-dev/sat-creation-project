import React, { useState } from "react";

interface ShareToggleProps {
  label: string;
  onChange?: (enabled: boolean) => void;
}

const ShareToggle: React.FC<ShareToggleProps> = ({ label, onChange }) => {
  const [enabled, setEnabled] = useState(true);

  const handleToggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onChange?.(newState);
  };

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-900 font-medium">{label}</span>
      <button
        onClick={handleToggle}
        className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
          enabled ? "bg-red-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
            enabled ? "translate-x-6" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
};

export default ShareToggle;
