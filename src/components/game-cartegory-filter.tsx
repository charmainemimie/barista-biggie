"use client"

import { Button } from "@/components/ui/button"

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`${
            activeCategory === category
              ? "bg-yellow-500 hover:bg-yellow-600 text-black"
              : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          } font-semibold`}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
