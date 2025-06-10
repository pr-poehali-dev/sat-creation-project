
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PhotoUploadProps {
  onUpload?: () => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ onUpload }) => {
  return (
    <Button
      variant="outline"
      onClick={onUpload}
      className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
    <div className="flex items-center justify-center gap-2">
      <Icon name="Camera" size={20} />
      <span>Добавить фотографии</span>
    </div>
    </Button>
  );
};

export default PhotoUpload;
