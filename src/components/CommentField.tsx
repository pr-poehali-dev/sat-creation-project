import React from "react";
import { Input } from "@/components/ui/input";

interface CommentFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CommentField: React.FC<CommentFieldProps> = ({
  value,
  onChange,
  placeholder = "Комментарий",
}) => {
  return (
    <div className="w-full">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-12 text-base border-gray-300 rounded-lg focus:border-red-400 focus:ring-red-400 bg-white"
      />
    </div>
  );
};

export default CommentField;
