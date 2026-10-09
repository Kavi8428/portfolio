"use client";

import { ArrowUpRight } from "lucide-react";
import { Article } from "@/lib/data";

interface ArticleRowProps {
  article: Article;
  index: number;
}

export default function ArticleRow({ article, index }: ArticleRowProps) {
  return (
    <article className="article-row" data-reveal>
      <div className="article-index">0{index + 1}</div>
      <div className="article-meta">
        <span>{article.date}</span>
        <span>{article.category}</span>
      </div>
      <div className="article-content">
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
      </div>
      <ArrowUpRight className="article-arrow" size={23} />
    </article>
  );
}
