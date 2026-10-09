"use client";

import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/data";
import ArticleRow from "./ArticleRow";

export default function WritingSection() {
  return (
    <section id="writing" className="section writing-section">
      <div className="section-head" data-reveal>
        <div>
          <span className="section-kicker">NOTES / 03</span>
          <h2>Writing & <em>ideas.</em></h2>
        </div>
        <a href="#contact" className="text-link">
          Have a topic? Let&apos;s talk <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="article-list">
        {articles.map((article, i) => (
          <ArticleRow key={article.title} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
