"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PlusCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Trash2,
  Upload,
} from "lucide-react";

interface CardData {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image?: string;
}

export default function EnhancedCardCreator() {
  const [cards, setCards] = useState<CardData[]>([
    { id: "1", name: "Card 1", description: "Description 1", tags: ["tag1"] },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState(cards[0].name);
  const [description, setDescription] = useState(cards[0].description);
  const [newTag, setNewTag] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentCard = cards[currentIndex];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      saveCurrentCard();
      setCurrentIndex(currentIndex - 1);
      loadCard(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      saveCurrentCard();
      setCurrentIndex(currentIndex + 1);
      loadCard(currentIndex + 1);
    }
  };

  const handleAddCard = () => {
    const newCard: CardData = {
      id: (cards.length + 1).toString(),
      name: "",
      description: "",
      tags: [],
    };
    setCards([...cards, newCard]);
    setCurrentIndex(cards.length);
    setName("");
    setDescription("");
  };

  const handleDelete = () => {
    if (cards.length <= 1) return;
    const newCards = cards.filter((_, index) => index !== currentIndex);
    setCards(newCards);
    if (currentIndex >= newCards.length) {
      setCurrentIndex(newCards.length - 1);
      loadCard(newCards.length - 1);
    } else {
      loadCard(currentIndex);
    }
  };

  const saveCurrentCard = () => {
    const updatedCards = [...cards];
    updatedCards[currentIndex] = { ...currentCard, name, description };
    setCards(updatedCards);
  };

  const loadCard = (index: number) => {
    setName(cards[index].name);
    setDescription(cards[index].description);
  };

  const addTag = () => {
    if (newTag && !currentCard.tags.includes(newTag)) {
      const updatedCards = [...cards];
      updatedCards[currentIndex].tags = [...currentCard.tags, newTag];
      setCards(updatedCards);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedCards = [...cards];
    updatedCards[currentIndex].tags = currentCard.tags.filter(
      (tag) => tag !== tagToRemove
    );
    setCards(updatedCards);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedCards = [...cards];
        updatedCards[currentIndex].image = reader.result as string;
        setCards(updatedCards);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <Input placeholder="Title" />
        <Textarea placeholder="Description" />
      </section>
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Create Your Own Cards</CardTitle>
          <CardDescription>
            Card {currentIndex + 1} of {cards.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Card name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={saveCurrentCard}
          />
          <Textarea
            placeholder="Answer"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={saveCurrentCard}
            className="min-h-[100px]"
          />
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {currentCard.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 ml-1 hover:bg-destructive"
                    onClick={() => removeTag(tag)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="New tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTag()}
              />
              <Button onClick={addTag} size="icon">
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Image</h3>
            {currentCard.image ? (
              <div className="relative">
                <img
                  src={currentCard.image}
                  alt="Card image"
                  className="w-full h-auto rounded-md"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => {
                    const updatedCards = [...cards];
                    delete updatedCards[currentIndex].image;
                    setCards(updatedCards);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-[200px] bg-muted rounded-md">
                <Button onClick={() => fileInputRef.current?.click()}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Image
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleDelete}>
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
            <Button onClick={handlePrevious} disabled={currentIndex === 0}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleNext}
              disabled={currentIndex === cards.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
            <Button variant="outline" onClick={handleAddCard}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add card
            </Button>
          </div>
        </CardFooter>
      </Card>

      <div className="flex w-full justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Create</Button>
      </div>
    </div>
  );
}
