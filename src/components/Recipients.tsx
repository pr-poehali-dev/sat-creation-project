import React from "react";

interface RecipientsProps {
  recipients: string[];
}

const Recipients: React.FC<RecipientsProps> = ({ recipients }) => {
  return (
    <div className="space-y-2">
      <h4 className="font-medium text-gray-900">Получатели</h4>
      <div className="flex flex-wrap gap-2">
        {recipients.map((recipient, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-300"
          >
            {recipient}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Recipients;
