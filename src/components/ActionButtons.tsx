import React from "react";
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  onCancel?: () => void;
  onSubmit?: () => void;
  submitText?: string;
  cancelText?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onCancel,
  onSubmit,
  submitText = "ОСТАВИТЬ ОТЗЫВ",
  cancelText = "ОТМЕНА",
}) => {
  return (
    <div className="flex gap-3">
      <Button
        variant="outline"
        onClick={onCancel}
        className="flex-1 h-12 border-red-500 text-red-500 hover:bg-red-50 rounded-lg font-medium"
      >
        {cancelText}
      </Button>
      <Button
        onClick={onSubmit}
        className="flex-1 h-12 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium"
      >
        {submitText}
      </Button>
    </div>
  );
};

export default ActionButtons;
