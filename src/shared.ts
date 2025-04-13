export type ChatMessage = {
  id: string;
  content: string;
  user: string;
  role: "user" | "assistant";
};

export type Message =
  | {
      type: "add";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "update";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "all";
      messages: ChatMessage[];
    };

export const names = [
  "Cosby's Cocktail",
  "Uncle Touchy's Playhouse",
  "Basement Buffet",
  "Free Candy Frank",
  "Tinder Trap Ted",
  "Epstein's Flight Log",
  "Pedo Pete's Pizza Party",
  "LiveLeak Linda",
  "Aborty McFetus",
  "Noose Necklace Nancy",
  "Kevorkian's Intern",
  "Gas Chamber Gary",
  "Rohypnol Randy",
  "Priest Playtime Paul",
  "Graveyard Tinder Date",
  "Cremation Carl",
  "Dumpster Baby Debbie",
  "Chainsaw Chuckles",
  "Snuffflix & Kill",
  "School Shooter Steve",
  "Necrophilia Nick",
  "Insulin Ivan (Not Diabetic)",
  "Roofied Roomie",
  "Kool-Aid Cult Kevin",
  "Trenched Tranny Trent",
  "Stillborn Sam",
];