import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import StarRating from "./StarRating";
import CommentField from "./CommentField";
import ProductCard from "./ProductCard";
import ShareToggle from "./ShareToggle";
import PhotoUpload from "./PhotoUpload";
import Recipients from "./Recipients";
import ActionButtons from "./ActionButtons";
import Icon from "@/components/ui/icon";

const ReviewForm: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [shareEnabled, setShareEnabled] = useState(true);

  const handleSubmit = () => {
    console.log("Отзыв отправлен:", { rating, comment, shareEnabled });
  };

  const handleCancel = () => {
    setRating(0);
    setComment("");
    setShareEnabled(true);
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-50 min-h-screen">
      <Card className="m-4 shadow-lg border-0 rounded-2xl overflow-hidden">
        <CardHeader className="bg-white border-b border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <Icon name="MessageSquare" size={16} className="text-white" />
            </div>
            <h1 className="text-lg font-semibold text-gray-900">
              Оставить отзыв
            </h1>
          </div>
        </CardHeader>

        <CardContent className="p-4 space-y-6">
          {/* Рейтинг */}
          <div className="flex justify-center">
            <StarRating initialRating={rating} onChange={setRating} />
          </div>

          {/* Комментарий */}
          <CommentField
            value={comment}
            onChange={setComment}
            placeholder="Комментарий"
          />

          {/* Карточка товара */}
          <ProductCard
            name="Масло подсолнечное"
            image="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=100&h=100&fit=crop"
            rating={2}
            reviewCount={210}
          />

          {/* Переключатель */}
          <ShareToggle
            label="Поделиться с друзьями"
            onChange={setShareEnabled}
          />

          {/* Добавить фото */}
          <PhotoUpload />

          {/* Получатели */}
          <Recipients recipients={["Алексей", "Ирина", "Михаил"]} />

          <div className="text-center text-sm text-gray-600 py-2">
            Получите 10 бонусов за отзыв
          </div>

          {/* Кнопки действий */}
          <ActionButtons onCancel={handleCancel} onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewForm;
