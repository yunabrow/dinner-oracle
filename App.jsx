import { useState } from "react";

const recipes = [
  {
    id: 1, emoji: "🌶️", name: "Bibim Guksu",
    desc: "Spicy cold somyeon noodles with a punchy gochujang-vinegar-pear sauce. No cooking beyond boiling noodles.",
    effort: ["minimal", "some"], vibe: ["korean", "surprise"], spice: ["mild", "bring"],
    time: "10 min",
    source: "rorang_table",
    ingredients: ["Ssal somyeon (rice vermicelli)", "Gochujang 3T", "Gochugaru 2T", "Minced garlic 1T", "Vinegar 3T", "Blended pear 250ml"],
    instructions: [
      "Boil somyeon noodles according to package (usually 2–3 min), then rinse under cold water and drain well.",
      "Mix gochujang, gochugaru, minced garlic, vinegar, and blended pear together in a bowl until smooth.",
      "Toss cold noodles with the sauce. Add toppings like cucumber, boiled egg, or sesame seeds if you have them.",
      "Serve immediately.",
    ],
  },
  {
    id: 2, emoji: "🥟", name: "Bowl XLB",
    desc: "Xiao long bao hack — pork filling in a bowl, dumpling wrapper on top, steamed. No folding required.",
    effort: ["some", "plenty"], vibe: ["chinese", "hearty", "surprise"], spice: ["none", "mild"],
    time: "30 min",
    source: "oh_diningtable",
    ingredients: ["200g ground pork", "Dumpling wrappers", "Green onion 2T", "Minced garlic ½T", "Sesame oil 1T", "Oyster sauce 1T", "Soy sauce ½T", "Mirin 2T", "Water 100ml"],
    instructions: [
      "Mix ground pork with green onion, garlic, sesame oil, oyster sauce, soy sauce, and mirin.",
      "Place the pork filling in a bowl. Pour water around the filling (not on top).",
      "Lay dumpling wrappers over the top to cover the bowl like a lid.",
      "Steam on high for 10–12 minutes until wrappers are translucent and pork is cooked through.",
      "Serve straight from the bowl with dipping sauce.",
    ],
  },
  {
    id: 3, emoji: "🫧", name: "Boba Pearl Dumplings",
    desc: "Thai-style Saku Sai Moo — pork balls rolled in tapioca pearls and steamed. Gluten-free and fun.",
    effort: ["some", "plenty"], vibe: ["snacky", "surprise"], spice: ["none", "mild"],
    time: "30 min",
    source: "eatswithjamie",
    ingredients: ["250g ground pork", "35g garlic chives", "⅛ tsp white pepper", "2 tsp cornstarch", "1 tbsp oyster sauce", "1 tsp sugar", "1 cup mini tapioca pearls"],
    instructions: [
      "Soak mini tapioca pearls in cold water for 30 minutes, then drain.",
      "Mix ground pork with chopped garlic chives, white pepper, cornstarch, oyster sauce, and sugar.",
      "Roll pork mixture into small balls (about 1 tbsp each).",
      "Roll each ball in the soaked tapioca pearls until fully coated.",
      "Steam on high heat for 15–18 minutes until tapioca turns translucent.",
      "Serve with sweet chili sauce.",
    ],
  },
  {
    id: 4, emoji: "🍤", name: "Air Fryer Rice Paper Shrimp",
    desc: "Shrimp sandwiched in rice paper, air fried crispy, tossed in chili oil sauce. Viral for a reason.",
    effort: ["minimal", "some"], vibe: ["snacky", "chinese", "surprise"], spice: ["mild", "bring"],
    time: "20 min",
    source: "saltsensitive",
    ingredients: ["Large shrimp (peeled)", "Rice paper sheets", "Chili oil 2T", "Soy sauce 1T", "Sugar 1 tsp", "Rice vinegar 1.5 tsp", "Garlic clove (minced)"],
    instructions: [
      "Briefly dip rice paper in water (just 1–2 seconds) — it'll soften more as it sits.",
      "Place 2–3 shrimp on one half of the rice paper, fold over to sandwich them.",
      "Repeat for all shrimp. Let them rest 1 min so the wrapper seals.",
      "Air fry at 400°F (200°C) for 8–10 minutes, flipping halfway, until golden and crispy.",
      "Mix chili oil, soy sauce, sugar, rice vinegar, and garlic into a sauce.",
      "Toss crispy shrimp in the sauce and serve immediately.",
    ],
  },
  {
    id: 5, emoji: "🔥", name: "Buldak Miyeok-guk Noodles",
    desc: "Buldak stew noodles cooked in seaweed soup instead of water. Almost zero effort, maximum umami.",
    effort: ["minimal"], vibe: ["korean", "hearty", "surprise"], spice: ["bring"],
    time: "10 min",
    source: "jamesyworld",
    ingredients: ["500g pre-made miyeok-guk (seaweed soup)", "150g water", "1 pack Buldak STEW noodles"],
    instructions: [
      "Pour miyeok-guk and water into a pot and bring to a boil.",
      "Add the Buldak stew noodles and cook for 3–4 minutes, stirring occasionally.",
      "Add the sauce packet and mix well.",
      "Serve hot, topped with the flake packet if included.",
    ],
  },
  {
    id: 6, emoji: "🥚", name: "Sundubu Gyeran-jang Rice Bowl",
    desc: "Silken tofu and soy-marinated egg in a spicy sauce over rice. Cheap, fast, deeply satisfying.",
    effort: ["minimal", "some"], vibe: ["korean", "hearty", "surprise"], spice: ["mild", "bring"],
    time: "10 min",
    source: "1min_cook",
    ingredients: ["Silken tofu", "1–2 eggs", "Soy sauce", "Gochugaru", "Garlic", "Green onion", "Sesame oil", "Cooked rice"],
    instructions: [
      "Soft-boil eggs for 6–7 minutes, then peel and marinate in soy sauce for at least 10 minutes.",
      "Mix soy sauce, gochugaru, minced garlic, sliced green onion, and sesame oil into a sauce.",
      "Slice silken tofu and plate over rice.",
      "Pour the sauce over the tofu, then top with the soy egg (halved).",
      "Drizzle with a little extra sesame oil and serve.",
    ],
  },
  {
    id: 7, emoji: "🍤", name: "Ritz Cracker Shrimp Toast",
    desc: "HK shrimp paste on Ritz crackers, rolled in sesame seeds, air fried golden. Great for a crowd.",
    effort: ["some"], vibe: ["snacky", "chinese", "surprise"], spice: ["none", "mild"],
    time: "25 min",
    source: "eatingwithkirby",
    ingredients: ["~18 Ritz crackers", "15–25 large shrimp (thawed)", "½ tbsp cornstarch", "1 tsp white pepper", "1 tbsp sesame oil", "¼ cup sesame seeds", "3 tbsp Japanese mayo", "1½ tbsp sriracha"],
    instructions: [
      "Pat shrimp dry, then mix with cornstarch, white pepper, and sesame oil.",
      "Place 1–2 shrimp on each Ritz cracker and press gently to adhere.",
      "Spread sesame seeds on a plate. Press cracker (shrimp-side down) into seeds to coat.",
      "Air fry at 375°F (190°C) for 7–9 minutes until golden.",
      "Mix Japanese mayo and sriracha. Drizzle or dip.",
    ],
  },
  {
    id: 8, emoji: "🥦", name: "Smashed Broccoli",
    desc: "Blanched broccoli smashed and roasted at high heat until crispy-edged with parmesan. Side or snack.",
    effort: ["minimal", "some"], vibe: ["light", "snacky", "surprise"], spice: ["none", "mild"],
    time: "25 min",
    source: "buzzfeedtasty / groovyfoodiess",
    ingredients: ["Broccoli florets", "Olive oil", "Garlic", "Salt & pepper", "Parmesan (grated)"],
    instructions: [
      "Blanch broccoli florets in boiling salted water for 2–3 minutes, then drain and pat dry.",
      "Arrange on a baking sheet. Use a flat-bottomed glass or mug to smash each floret.",
      "Drizzle generously with olive oil, add minced garlic, salt, and pepper.",
      "Roast at 425°F (220°C) for 20–25 minutes until edges are crispy.",
      "Remove from oven, sprinkle parmesan on top, and serve.",
    ],
  },
  {
    id: 9, emoji: "🥬", name: "Cabbage-Wrapped Mandu",
    desc: "Store-bought dumplings wrapped in cabbage leaves, dipped in cho-ganjang. Light, low-carb, zero effort.",
    effort: ["minimal"], vibe: ["korean", "light", "snacky"], spice: ["none", "mild"],
    time: "5 min",
    source: "rorang_table",
    ingredients: ["Store-bought mandu (frozen)", "Cabbage leaves", "Soy sauce", "Vinegar", "Optional: scallions, chili"],
    instructions: [
      "Steam or microwave frozen mandu until cooked through (follow package instructions).",
      "Wash and separate individual cabbage leaves.",
      "Mix soy sauce and vinegar (1:1) for cho-ganjang dipping sauce. Add scallions or chili if using.",
      "Wrap each dumpling in a cabbage leaf and dip into sauce.",
    ],
  },
  {
    id: 10, emoji: "🌶️", name: "Kou Shui Ji",
    desc: "Sichuan mouthwatering chicken — silky poached breast in a numbing chili oil sauce. High protein.",
    effort: ["some", "plenty"], vibe: ["chinese", "hearty", "surprise"], spice: ["mild", "bring"],
    time: "30 min",
    source: "daigasikfaan",
    ingredients: ["Chicken breast", "Ginger + scallion (poaching)", "Chili oil", "Sichuan peppercorn", "Soy sauce", "Black vinegar", "Sesame paste", "Garlic", "Sugar"],
    instructions: [
      "Poach chicken breast: bring water to boil with ginger and scallion. Add chicken, cover, reduce heat to low, and cook 15 min. Rest 10 min off heat.",
      "Toast Sichuan peppercorns in a dry pan, then grind or crush.",
      "Mix chili oil, soy sauce, black vinegar, sesame paste, minced garlic, sugar, and ground peppercorn into sauce.",
      "Slice chicken thinly against the grain. Arrange on a plate.",
      "Pour sauce over chicken. Garnish with scallions and sesame seeds.",
    ],
  },
  {
    id: 11, emoji: "🥚", name: "Steamed Egg with Minced Pork",
    desc: "Silky steamed egg with savory pork sauce. 20 minutes, ~30g protein, pure comfort.",
    effort: ["minimal", "some"], vibe: ["chinese", "hearty", "surprise"], spice: ["none", "mild"],
    time: "20 min",
    source: "eatingwithkirby",
    ingredients: ["3 eggs", "Warm water (1:1.5 ratio)", "150g ground pork", "Soy sauce", "Oyster sauce", "Garlic", "Cornstarch", "Sesame oil", "Scallions"],
    instructions: [
      "Beat eggs and mix with warm water (1:1.5 egg to water ratio). Strain through a sieve for silkier texture. Cover with plastic wrap.",
      "Steam on medium-low heat for 12–15 minutes until just set.",
      "Meanwhile, stir-fry ground pork with minced garlic, soy sauce, oyster sauce, and a splash of water. Thicken with cornstarch slurry.",
      "Pour pork sauce over steamed egg. Drizzle with sesame oil and top with scallions.",
    ],
  },
  {
    id: 12, emoji: "🥟", name: "Spicy Wontons with Chili Oil",
    desc: "Frozen wontons boiled and tossed in a punchy chili oil, black vinegar, sesame sauce.",
    effort: ["minimal"], vibe: ["chinese", "hearty", "surprise"], spice: ["mild", "bring"],
    time: "15 min",
    source: "onehappybite",
    ingredients: ["Frozen wontons", "Chili oil", "Soy sauce", "Black vinegar (Chinkiang)", "Sesame paste or peanut butter", "Garlic", "Sugar", "Sesame oil", "Scallions"],
    instructions: [
      "Boil wontons in salted water until they float and cook through, about 5–6 minutes. Drain.",
      "Mix chili oil, soy sauce, black vinegar, sesame paste (or peanut butter), minced garlic, sugar, and sesame oil into a sauce.",
      "Toss warm wontons in the sauce.",
      "Top with sliced scallions and extra chili oil. Serve immediately.",
    ],
  },
  {
    id: 13, emoji: "🌯", name: "Spicy Shrimp Handroll",
    desc: "Spicy mayo shrimp in nori cone with rice and cucumber. Fresh, fun, high protein.",
    effort: ["some"], vibe: ["light", "snacky", "surprise"], spice: ["mild", "bring"],
    time: "20 min",
    source: "ricezhangg",
    ingredients: ["Cooked shrimp", "Japanese mayo", "Sriracha or gochujang", "Nori sheets (halved)", "Sushi rice", "Cucumber", "Avocado (optional)"],
    instructions: [
      "Season sushi rice with a splash of rice vinegar, sugar, and salt while warm.",
      "Mix cooked shrimp with Japanese mayo and sriracha (or gochujang) to taste.",
      "Cut nori sheets in half. Lay rough side up.",
      "Spoon a small amount of rice on the bottom-left corner. Add shrimp, cucumber strips, and avocado if using.",
      "Fold into a cone shape. Eat immediately so the nori stays crispy.",
    ],
  },
  {
    id: 14, emoji: "🍝", name: "Zucchini Orzo Salad",
    desc: "Herby orzo with zucchini, walnuts, pepperoncini dressing, and parmesan. Great warm or room temp.",
    effort: ["some", "plenty"], vibe: ["light", "surprise"], spice: ["none", "mild"],
    time: "30 min",
    source: "dishingouthealth",
    ingredients: ["1 cup dry orzo", "2 medium zucchinis", "½ cup walnut halves", "¼ cup + 2T olive oil", "2T lemon juice", "¼ cup sliced pepperoncini", "¼ cup scallions", "2T fresh parsley", "1 garlic clove", "½ tsp coriander", "¼ cup parmesan"],
    instructions: [
      "Cook orzo in salted boiling water until al dente. Drain and toss with a bit of olive oil.",
      "Slice zucchini into half-moons. Sauté in olive oil over high heat until golden, about 5 min. Season with salt.",
      "Toast walnuts in a dry pan until fragrant.",
      "Whisk together olive oil, lemon juice, minced garlic, and coriander for the dressing.",
      "Combine orzo, zucchini, walnuts, pepperoncini, scallions, and parsley. Toss with dressing.",
      "Top with parmesan. Serve warm or at room temperature.",
    ],
  },
  {
    id: 15, emoji: "🥬", name: "Green Goddess Salad",
    desc: "Chopped cabbage and cucumber in a bright avocado-basil dressing. Eaten with chips or pita.",
    effort: ["minimal", "some"], vibe: ["light", "surprise"], spice: ["none", "mild"],
    time: "15 min",
    source: "bakedbymelissa",
    ingredients: ["Cabbage (finely chopped)", "Cucumber", "Avocado", "Fresh basil", "Chives", "Garlic", "Lemon juice", "Olive oil", "Salt"],
    instructions: [
      "Blend avocado, fresh basil, chives, garlic, lemon juice, olive oil, and salt until smooth and creamy.",
      "Finely chop cabbage and slice cucumber into thin pieces.",
      "Toss cabbage and cucumber with the green goddess dressing.",
      "Serve with chips, pita, or crusty bread for dipping.",
    ],
  },
  {
    id: 16, emoji: "🍗", name: "Instant Pot HK Soy Sauce Chicken",
    desc: "Lacquered, silky braised chicken in a fragrant soy-star anise sauce. A proper weekend project.",
    effort: ["plenty"], vibe: ["chinese", "hearty", "surprise"], spice: ["none", "mild"],
    time: "45 min",
    source: "pressurecookrecipes",
    ingredients: ["Whole chicken or thighs", "Soy sauce", "Dark soy sauce", "Shaoxing wine", "Rock sugar", "Garlic", "Ginger", "Star anise", "Cinnamon"],
    instructions: [
      "Combine soy sauce, dark soy sauce, Shaoxing wine, rock sugar, garlic, ginger, star anise, and cinnamon with 1 cup water in the Instant Pot.",
      "Add chicken, turning to coat. For a whole chicken, breast-side up.",
      "Pressure cook on HIGH for 15 min (thighs) or 25 min (whole chicken). Natural release 10 min.",
      "Optional: broil the chicken for 3–5 minutes to lacquer the skin.",
      "Reduce the remaining sauce on sauté mode until slightly thickened. Pour over chicken.",
    ],
  },
  {
    id: 17, emoji: "🥦", name: "Brussels Sprouts with Soy & Mustard",
    desc: "Crispy roasted brussels finished with whole grain mustard and soy sauce. The best side dish.",
    effort: ["minimal", "some"], vibe: ["light", "snacky", "surprise"], spice: ["none", "mild"],
    time: "25 min",
    source: "slate",
    ingredients: ["Brussels sprouts (halved)", "Olive oil", "Salt", "Whole grain mustard", "Soy sauce"],
    instructions: [
      "Halve brussels sprouts and toss with olive oil and salt.",
      "Roast cut-side down at 425°F (220°C) for 20–25 minutes until deeply caramelized.",
      "Mix whole grain mustard and soy sauce (about 2:1 ratio).",
      "Toss roasted sprouts in the mustard-soy mixture. Serve immediately.",
    ],
  },
];

const effortOptions = [
  { val: "minimal", label: "Barely any", desc: "5–15 min, pantry stuff" },
  { val: "some", label: "Some", desc: "20–30 min, I can do this" },
  { val: "plenty", label: "I'm ready to cook", desc: "Let's make something real" },
];

const vibeOptions = [
  { val: "korean", label: "Korean" },
  { val: "chinese", label: "Chinese" },
  { val: "light", label: "Light & fresh" },
  { val: "hearty", label: "Hearty & comforting" },
  { val: "snacky", label: "Snacky / appetizer" },
  { val: "surprise", label: "Surprise me" },
];

const spiceOptions = [
  { val: "none", label: "No spice" },
  { val: "mild", label: "Mild" },
  { val: "bring", label: "Bring it" },
];

function Chip({ label, selected, onClick, desc }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: desc ? "10px 16px" : "8px 16px",
        borderRadius: 20,
        border: selected ? "2px solid #000" : "1px solid #ddd",
        background: selected ? "#f5f5f5" : "#fff",
        fontWeight: selected ? 600 : 400,
        fontSize: 14,
        cursor: "pointer",
        textAlign: "left",
        lineHeight: 1.3,
      }}
    >
      <div>{label}</div>
      {desc && <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{desc}</div>}
    </button>
  );
}

function RecipeCard({ recipe, onViewRecipe }) {
  return (
    <div style={{
      border: "1px solid #eee", borderRadius: 16, padding: "20px",
      background: "#fff", marginBottom: 12,
    }}>
      <div style={{ fontSize: 36, marginBottom: 8 }}>{recipe.emoji}</div>
      <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{recipe.name}</div>
      <div style={{ fontSize: 14, color: "#666", marginBottom: 12, lineHeight: 1.5 }}>{recipe.desc}</div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
        <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 12, border: "1px solid #eee", color: "#666" }}>{recipe.time}</span>
        <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 12, border: "1px solid #eee", color: "#666" }}>@{recipe.source}</span>
      </div>
      <button
        onClick={() => onViewRecipe(recipe)}
        style={{
          width: "100%", padding: "10px", borderRadius: 10,
          border: "1px solid #ddd", background: "#fff",
          fontSize: 14, cursor: "pointer", fontWeight: 500,
        }}
      >
        See ingredients →
      </button>
    </div>
  );
}

function RecipeDetail({ recipe, onBack }) {
  return (
    <div>
      <button onClick={onBack} style={{ background: "none", border: "none", fontSize: 14, color: "#666", cursor: "pointer", marginBottom: 16, padding: 0 }}>
        ← Back
      </button>
      <div style={{ fontSize: 40, marginBottom: 8 }}>{recipe.emoji}</div>
      <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 4 }}>{recipe.name}</div>
      <div style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>@{recipe.source} · {recipe.time}</div>
      <div style={{ fontSize: 14, color: "#555", marginBottom: 20, lineHeight: 1.6 }}>{recipe.desc}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>Ingredients</div>
      <ul style={{ paddingLeft: 20, margin: "0 0 24px 0" }}>
        {recipe.ingredients.map((ing, i) => (
          <li key={i} style={{ fontSize: 14, color: "#444", marginBottom: 6, lineHeight: 1.4 }}>{ing}</li>
        ))}
      </ul>
      {recipe.instructions && (
        <>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#444", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>Instructions</div>
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            {recipe.instructions.map((step, i) => (
              <li key={i} style={{ fontSize: 14, color: "#444", marginBottom: 10, lineHeight: 1.5 }}>{step}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

export default function App() {
  const [selections, setSelections] = useState({ effort: null, vibe: null, spice: null });
  const [screen, setScreen] = useState("quiz"); // quiz | results | detail
  const [results, setResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function toggle(key, val) {
    setSelections(s => ({ ...s, [key]: s[key] === val ? null : val }));
  }

  function score(r) {
    let s = 0;
    if (selections.effort && r.effort.includes(selections.effort)) s += 3;
    if (selections.vibe && r.vibe.includes(selections.vibe)) s += 3;
    if (selections.spice && r.spice.includes(selections.spice)) s += 2;
    return s;
  }

  function getResults() {
    const sorted = [...recipes].sort((a, b) => score(b) - score(a));
    setResults(sorted);
    setScreen("results");
  }

  function reset() {
    setSelections({ effort: null, vibe: null, spice: null });
    setResults([]);
    setScreen("quiz");
  }

  if (screen === "detail" && selectedRecipe) {
    return (
      <div style={{ maxWidth: 420, margin: "0 auto", padding: "24px 16px", fontFamily: "system-ui, sans-serif" }}>
        <RecipeDetail recipe={selectedRecipe} onBack={() => setScreen("results")} />
      </div>
    );
  }

  if (screen === "results") {
    const top = results[0];
    const alts = results.slice(1, 4);
    return (
      <div style={{ maxWidth: 420, margin: "0 auto", padding: "24px 16px", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ fontSize: 13, color: "#888", marginBottom: 4 }}>Tonight's pick</div>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Make this.</h1>
        <RecipeCard recipe={top} onViewRecipe={(r) => { setSelectedRecipe(r); setScreen("detail"); }} />
        <div style={{ fontSize: 13, color: "#888", margin: "20px 0 10px", fontWeight: 500 }}>Also works tonight</div>
        {alts.map(r => (
          <div
            key={r.id}
            onClick={() => { setSelectedRecipe(r); setScreen("detail"); }}
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", border: "1px solid #eee", borderRadius: 12, marginBottom: 8, cursor: "pointer", background: "#fff" }}
          >
            <span style={{ fontSize: 22 }}>{r.emoji}</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{r.name}</div>
              <div style={{ fontSize: 12, color: "#888" }}>{r.time}</div>
            </div>
          </div>
        ))}
        <button onClick={reset} style={{ width: "100%", marginTop: 16, padding: 12, borderRadius: 12, border: "1px solid #ddd", background: "#fff", fontSize: 14, cursor: "pointer" }}>
          Start over
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 420, margin: "0 auto", padding: "24px 16px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ fontSize: 13, color: "#888", marginBottom: 4 }}>Dinner oracle</div>
      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>What's for dinner?</h1>
      <p style={{ fontSize: 14, color: "#666", marginBottom: 24 }}>Answer a few questions and I'll pick from your saved recipes.</p>

      <div style={{ fontSize: 12, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>How much energy do you have?</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        {effortOptions.map(o => (
          <Chip key={o.val} label={o.label} desc={o.desc} selected={selections.effort === o.val} onClick={() => toggle("effort", o.val)} />
        ))}
      </div>

      <div style={{ fontSize: 12, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>What are you in the mood for?</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {vibeOptions.map(o => (
          <Chip key={o.val} label={o.label} selected={selections.vibe === o.val} onClick={() => toggle("vibe", o.val)} />
        ))}
      </div>

      <div style={{ fontSize: 12, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Spice level?</div>
      <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
        {spiceOptions.map(o => (
          <Chip key={o.val} label={o.label} selected={selections.spice === o.val} onClick={() => toggle("spice", o.val)} />
        ))}
      </div>

      <button
        onClick={getResults}
        style={{ width: "100%", padding: 14, borderRadius: 12, border: "none", background: "#000", color: "#fff", fontSize: 16, fontWeight: 600, cursor: "pointer" }}
      >
        Find my dinner →
      </button>
    </div>
  );
}
