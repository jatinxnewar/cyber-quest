"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  ShieldAlert,
  Download,
  AlertTriangle,
  XCircle,
} from "lucide-react";

const GRID_SIZE = 8;
const INITIAL_LIVES = 3;

type GridItem = "empty" | "secure" | "unsafe" | "sketchy" | "popup";
type Position = { x: number; y: number };

const generateGrid = (): GridItem[][] => {
  const grid: GridItem[][] = Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill("empty"));
  const items: GridItem[] = ["secure", "unsafe", "sketchy", "popup"];

  for (let i = 0; i < GRID_SIZE * 2; i++) {
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    const item = items[Math.floor(Math.random() * items.length)];
    grid[y][x] = item;
  }

  return grid;
};

export default function SafeSurfingAdventure() {
  const [grid, setGrid] = useState<GridItem[][]>(generateGrid);
  const [playerPosition, setPlayerPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const movePlayer = useCallback(
    (dx: number, dy: number) => {
      if (gameOver) return;

      setPlayerPosition((prev) => {
        const newX = Math.max(0, Math.min(GRID_SIZE - 1, prev.x + dx));
        const newY = Math.max(0, Math.min(GRID_SIZE - 1, prev.y + dy));
        return { x: newX, y: newY };
      });
    },
    [gameOver]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          movePlayer(0, -1);
          break;
        case "ArrowDown":
          movePlayer(0, 1);
          break;
        case "ArrowLeft":
          movePlayer(-1, 0);
          break;
        case "ArrowRight":
          movePlayer(1, 0);
          break;
      }
    },
    [movePlayer]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const currentItem = grid[playerPosition.y][playerPosition.x];
    let newMessage = "";

    switch (currentItem) {
      case "secure":
        setScore((prev) => prev + 10);
        newMessage = "Great! You found a secure website. +10 points";
        break;
      case "unsafe":
        setLives((prev) => prev - 1);
        newMessage = "Oh no! Unsafe download. You lost a life.";
        break;
      case "sketchy":
        setLives((prev) => prev - 1);
        newMessage = "Yikes! A sketchy website. You lost a life.";
        break;
      case "popup":
        setScore((prev) => Math.max(0, prev - 5));
        newMessage = "Annoying pop-up ad! -5 points";
        break;
    }

    setMessage(newMessage);

    if (lives <= 0) {
      setGameOver(true);
      setMessage("Game Over! Your final score: " + score);
    }

    // Clear the item from the grid
    if (currentItem !== "empty") {
      const newGrid = [...grid];
      newGrid[playerPosition.y][playerPosition.x] = "empty";
      setGrid(newGrid);
    }
  }, [playerPosition, grid, lives, score]);

  const resetGame = () => {
    setGrid(generateGrid());
    setPlayerPosition({ x: 0, y: 0 });
    setScore(0);
    setLives(INITIAL_LIVES);
    setGameOver(false);
    setMessage("");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-slate-900 text-slate-100">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-blue-400">
          Safe Surfing Adventure
        </CardTitle>
        <CardDescription className="text-slate-300">
          Navigate the digital world safely!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-blue-300">
            Score: {score}
          </div>
          <div className="text-xl font-semibold text-red-400">
            Lives: {lives}
          </div>
        </div>
        <div className="grid grid-cols-8 gap-1 mb-4">
          {grid.map((row, y) =>
            row.map((cell, x) => (
              <div
                key={`${x}-${y}`}
                className={`w-10 h-10 flex items-center justify-center rounded ${
                  x === playerPosition.x && y === playerPosition.y
                    ? "bg-blue-600"
                    : "bg-slate-700"
                }`}
              >
                {x === playerPosition.x && y === playerPosition.y ? (
                  <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                ) : cell === "secure" ? (
                  <Shield className="text-green-400" />
                ) : cell === "unsafe" ? (
                  <Download className="text-red-400" />
                ) : cell === "sketchy" ? (
                  <AlertTriangle className="text-orange-400" />
                ) : cell === "popup" ? (
                  <XCircle className="text-purple-400" />
                ) : null}
              </div>
            ))
          )}
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Button
            onClick={() => movePlayer(0, -1)}
            disabled={gameOver}
            className="bg-slate-700 hover:bg-slate-600"
          >
            ↑
          </Button>
          <Button
            onClick={() => movePlayer(-1, 0)}
            disabled={gameOver}
            className="bg-slate-700 hover:bg-slate-600"
          >
            ←
          </Button>
          <Button
            onClick={() => movePlayer(1, 0)}
            disabled={gameOver}
            className="bg-slate-700 hover:bg-slate-600"
          >
            →
          </Button>
          <Button
            onClick={() => movePlayer(0, 1)}
            disabled={gameOver}
            className="bg-slate-700 hover:bg-slate-600"
          >
            ↓
          </Button>
        </div>
        {message && (
          <div className="mb-4 p-3 rounded bg-slate-700 text-center">
            {message}
          </div>
        )}
        {gameOver && (
          <Button
            onClick={resetGame}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Play Again
          </Button>
        )}
        <div className="mt-4 text-sm text-slate-400">
          <p>
            <Shield className="inline mr-2 text-green-400" /> Secure website:
            +10 points
          </p>
          <p>
            <Download className="inline mr-2 text-red-400" /> Unsafe download:
            Lose a life
          </p>
          <p>
            <AlertTriangle className="inline mr-2 text-orange-400" /> Sketchy
            website: Lose a life
          </p>
          <p>
            <XCircle className="inline mr-2 text-purple-400" /> Pop-up ad: -5
            points
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
