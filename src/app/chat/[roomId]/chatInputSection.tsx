"use client";

import { ChangeEvent, useCallback, useState } from "react";

interface SuggestedReply {
  label: string;
  message: string;
}

interface ChatInputSectionProps {
  suggestedReplies: SuggestedReply[];
}

export default function ChatInputSection({
  suggestedReplies,
}: ChatInputSectionProps) {
  const [message, setMessage] = useState("");

  const handleSuggestionClick = useCallback((reply: string) => {
    setMessage(reply);
  }, []);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value);
    },
    []
  );

  return (
    <footer className="sticky bottom-0 bg-white pt-2">
      <div className="flex space-x-2 overflow-x-auto whitespace-nowrap p-2">
        {suggestedReplies.map(({ label, message }) => (
          <button
            key={label}
            type="button"
            onClick={() => handleSuggestionClick(message)}
            className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-700"
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex items-center p-2">
        <button className="p-2 text-gray-500">+</button>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요..."
          className="flex-1 rounded-full bg-gray-100 px-4 py-2 focus:outline-none"
        />
        <button className="p-2 text-gray-500">🙂</button>
      </div>
    </footer>
  );
}
