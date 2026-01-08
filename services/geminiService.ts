
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function queryAIAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the Holographic Neural Entity, a digital persona of the Neo-Architect of Reality. You are expert in medical cybernetics, 3D printing, and AR/MR solutions. Keep responses concise, futuristic, and slightly tech-noir. Respond to user commands and portfolio queries.",
        temperature: 0.7,
        maxOutputTokens: 150,
      }
    });
    return response.text || "PROTOCOL_ERROR: Connection timed out.";
  } catch (error) {
    console.error("AI Error:", error);
    return "SYSTEM_FAILURE: AI entity offline.";
  }
}
