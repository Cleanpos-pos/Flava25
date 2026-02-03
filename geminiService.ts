
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getMenuRecommendation(userPreference: string) {
  const menuContext = MENU_ITEMS.map(item => {
    const prices = item.prices ? item.prices.map(p => `${p.label}: ${p.price}`).join(', ') : item.price;
    return `${item.name} [${item.category}/${item.subcategory || 'Main'}]: ${item.description} (${prices})`;
  }).join('\n');
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on this signature menu:\n${menuContext}\n\nRecommend a perfect meal for a user who says: "${userPreference}". Suggest a main (like a Loaded Doner Naan or Smashburger), a side (like Loaded Chips), and a drink. Mention pricing clearly. Tone: High-energy, urban, and Appetizing.`,
    config: {
      systemInstruction: "You are the Flava25 Assistant in Cradley Heath. You are a street-food expert. You are friendly, enthusiastic, and knowledgeable about flame-grilled meats, masala fish, and our special Smashburgers. Keep responses brief, formatted with bold highlights, and punchy.",
      temperature: 0.8,
    },
  });

  return response.text;
}
