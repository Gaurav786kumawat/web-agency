"use client";
import { useState } from "react";

const BLOG_TEMPLATES = [
    // Template 1
    `Here’s a quick blog on **{topic}**:

{topic} is becoming more important every day. In a world full of distractions, people naturally move towards things that help them grow, improve, and build a better lifestyle. Whether you're a beginner or already experienced, focusing on {topic} creates long-term impact.

### Why {topic} matters
- It helps you stay consistent  
- Builds discipline and clarity  
- Improves confidence  
- Gives you measurable progress  
- Helps you stand out  

### Key things to remember:
✔ Start small  
✔ Stay consistent  
✔ Track your progress  
✔ Learn from real examples  
✔ Improve every week  

**In short:**  
{topic} is not just a topic — it’s a long-term investment in yourself.
`,

    // Template 2
    `### {topic}: A Simple Yet Powerful Guide

If you've been thinking about improving in {topic}, this is the perfect place to start. Today, more people than ever are looking for practical, simple, and meaningful changes — and {topic} fits that need perfectly.

### Benefits of focusing on {topic}
- Better daily routine  
- More clarity and purpose  
- Boost in long-term growth  
- Better decision-making  

### How to get better at {topic}
1. Learn the basics  
2. Follow trusted mentors or creators  
3. Avoid shortcuts  
4. Practice daily  
5. Review your progress  

**Conclusion:**  
If you stay patient and consistent, {topic} can change your life without you even realizing it.
`,

    // Template 3
    `### The Power of {topic}

{topic} is one of those things that looks simple from the outside but becomes life-changing when you take it seriously. It teaches discipline, patience and resilience — three things that guide your overall growth.

### What makes {topic} special?
✨ It gives structure  
✨ Reduces confusion  
✨ Boosts motivation  
✨ Helps build a strong mindset  

### Tips to master {topic}
- Don't rush — focus on long-term  
- Experiment & learn what works for YOU  
- Stay consistent even on bad days  
- Celebrate small wins  

**Final Thoughts:**  
Your journey with {topic} will shape your future in more ways than you imagine.
`,

    // Template 4
    `## A Beginner-Friendly Blog on {topic}

Starting with {topic} can feel confusing, but the good news is — you don't need perfection. You just need direction. That direction starts with understanding why it matters.

### Why you should start {topic}
- It makes your routine better  
- Helps you grow mentally  
- Builds momentum  
- Creates long-term habits  

### A simple plan to follow
✔ Start for 10 minutes a day  
✔ Avoid excuses  
✔ Keep a small journal  
✔ Learn from your mistakes  
✔ Upgrade slowly  

**Summary:**  
With small daily actions, {topic} becomes a powerful tool for long-term success.
`,

    // Template 5
    `### Quick Blog on {topic}

{topic} is gaining popularity because people understand its real value. It helps in personal growth, productivity and building a better lifestyle. The best part — anyone can start.

### What you gain with {topic}
- A clearer mind  
- Strong focus  
- Better habits  
- More confidence  

### How to stay consistent
1. Set a small daily goal  
2. Stay away from shortcuts  
3. Track your progress  
4. Take inspiration from others  
5. Keep improving  

**Conclusion:**  
{topic} is simple, powerful and effective — the more you practice it, the more benefits you’ll see in real life.
`,
];

function getRandomBlog(topic) {
    const chosen = BLOG_TEMPLATES[Math.floor(Math.random() * BLOG_TEMPLATES.length)];
    return chosen.replace(/\{topic\}/gi, topic.trim());
}

export default function BlogGenerator() {
    const [topic, setTopic] = useState("");
    const [blog, setBlog] = useState("");

    const generateBlog = () => {
        if (!topic.trim()) return;
        setBlog(getRandomBlog(topic));
    };

    return (
        <main className="space-y-8 pb-16">
            {/* Header */}
            <h1 className="text-3xl font-semibold">Blog Generator</h1>

            {/* How to use */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm space-y-2">
                <h2 className="font-medium text-slate-100">How to use</h2>
                <ol className="list-decimal list-inside space-y-1 text-slate-400">
                    <li>Enter a topic you want a blog on.</li>
                    <li>Click <span className="text-slate-100">Generate Blog</span>.</li>
                    <li>You’ll get a fresh, clean, ready-to-post blog.</li>
                    <li>Click again for a new random blog every time.</li>
                    <li>Copy & post it on Instagram, LinkedIn, blogs, etc.</li>
                </ol>
            </section>

            {/* Input */}
            <section className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm text-slate-300">Blog Topic</label>
                    <input
                        type="text"
                        placeholder="e.g. consistency, fitness lifestyle, learning coding"
                        className="w-full rounded-xl bg-slate-900 border border-slate-700 p-3 outline-none text-sm focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />
                </div>

                <button
                    onClick={generateBlog}
                    disabled={!topic.trim()}
                    className={`px-6 py-3 rounded-full font-medium text-sm transition ${topic.trim()
                            ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                            : "bg-slate-800 text-slate-500 cursor-not-allowed"
                        }`}
                >
                    Generate Blog
                </button>
            </section>

            {/* Result */}
            {blog && (
                <pre className="whitespace-pre-wrap bg-slate-900 border border-slate-700 p-4 rounded-xl text-sm leading-relaxed">
                    {blog}
                </pre>
            )}
        </main>
    );
}
