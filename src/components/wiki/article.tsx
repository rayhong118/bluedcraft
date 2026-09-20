import { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { WikiContext } from "./context.js";
import { ArticleArray } from "./articleList.js";
import { DocumentLayout } from "./documentLayout.js";
import { CustomRecipes } from "./customRecipes.js";

// In dev mode, .webp files don't exist in public/ — serve originals to avoid 404
const toWebp = (url: string) => {
  if (import.meta.env.DEV) return url;
  return url.replace(/\.(png|jpe?g)$/i, ".webp");
};

export const Article: React.FC = () => {
  const { selectedArticleId, setSelectedArticleId } = useContext(WikiContext);
  const [article, setArticle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const selectedArticle = ArticleArray.find(
    (item) => item.id.toString() === selectedArticleId
  );

  useEffect(() => {
    if (!selectedArticleId) {
      setArticle("");
      setHasError(false);
      setLoading(false);
      return;
    }

    setLoading(true);
    setHasError(false);
    const path = `/wikiArticles/${selectedArticleId}.md`;

    const controller = new AbortController();
    fetch(path, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const contentType = response.headers.get("content-type");
        // SPA fallback servers return index.html for 404s
        if (contentType && contentType.includes("text/html")) {
          throw new Error("Received HTML instead of markdown");
        }
        return response.text();
      })
      .then((text) => {
        const trimmed = text.trim();
        // Guard against HTML page response fallback (e.g. Vite SPA router)
        if (
          trimmed.startsWith("<!DOCTYPE") ||
          trimmed.startsWith("<html") ||
          trimmed.includes("/@vite/client")
        ) {
          throw new Error("HTML document detected instead of markdown");
        }
        setArticle(text);
        setLoading(false);
      })
      .catch((err) => {
        if (controller.signal.aborted) return;
        console.warn(`Article ${selectedArticleId} failed to load:`, err);
        setHasError(true);
        setArticle("");
        setLoading(false);
      });
    return () => controller.abort();
  }, [selectedArticleId]);

  if (selectedArticle?.customRecipeData && selectedArticle.customRecipeData.length > 0) {
    return CustomRecipes(selectedArticle.customRecipeData);
  }

  return (
    <DocumentLayout contentKey={`${selectedArticleId}:${loading}:${article}`}>
      {/* Breadcrumb navigation */}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ mb: 2, fontSize: "0.9rem" }}
      >
        <Link
          component="button"
          type="button"
          underline="hover"
          color="inherit"
          sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          onClick={() => setSelectedArticleId("")}
        >
          百科目录
        </Link>
        <Typography color="text.primary" sx={{ fontSize: "0.9rem", fontWeight: 500 }}>
          {selectedArticle?.name ?? `文章 #${selectedArticleId}`}
        </Typography>
      </Breadcrumbs>

      <Typography component="h1" variant="h1" sx={{ mt: 3, mb: 4 }}>{selectedArticle?.name ?? "百科文章"}</Typography>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 8 }}>
          <CircularProgress size={36} />
        </Box>
      ) : hasError ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: 6,
            px: 2,
            textAlign: "center",
            backgroundColor: "action.hover",
            borderRadius: 2,
            border: 1,
            borderColor: "divider",
            my: 2,
          }}
        >
          <ArticleOutlinedIcon sx={{ fontSize: 56, color: "text.secondary", mb: 1.5 }} />
          <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary", mb: 1 }}>
            {selectedArticle ? selectedArticle.name : "文章未找到"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 420, mb: 2.5, lineHeight: 1.6 }}>
            该条目内容正在整理或编写中，暂未开放浏览，敬请期待！
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setSelectedArticleId("")}
            sx={{ textTransform: "none", borderRadius: 1.5 }}
          >
            返回百科目录
          </Button>
        </Box>
      ) : (
        <div className="wiki-markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            children={article.replace(/^# +([^\n]+)\r?\n/, (heading, title: string) => title.trim() === selectedArticle?.name ? "" : heading)}
            components={{
              h1: ({ node, ...props }) => <h2 {...props} />,
              table: ({ node, ...props }) => (
                <div className="wiki-table-scroll" role="region" aria-label="文章表格" tabIndex={0}>
                  <table {...props} />
                </div>
              ),
              // Transform all inline markdown images through toWebp() for production
              img: ({ src, alt, ...rest }) => (
                <img
                  src={toWebp(src ?? "")}
                  alt={alt}
                  style={{ maxWidth: "100%", height: "auto", borderRadius: 6, margin: "0.5rem 0" }}
                  {...rest}
                />
              ),
              // @ts-ignore
              recipe: (props) => {
                let content: string[] = Array.from(props.content.replace(/\|/g, ""));
                let index = new Map<string, string>(
                  props.index.split("|").map((item: string) => {
                    let kv = item.split(":");
                    return [kv[0], kv[1]];
                  })
                );
                const items = content.map((item: string, i: number) => {
                  const pngSrc = `/imageAssets/wiki/items/${index.get(item)}.png`;
                  return item === " " ? (
                    <span key={i} className={`item-${i + 1}`} />
                  ) : (
                    <picture key={i}>
                      <source srcSet={toWebp(pngSrc)} type="image/webp" />
                      <img className={`item-${i + 1}`} src={pngSrc} alt="" />
                    </picture>
                  );
                });
                const resultPng = `/imageAssets/wiki/items/${props.result}.png`;
                return (
                  <span className="wiki-recipe-scroll"><span className="wiki-recipe">
                    {items}
                    <picture>
                      <source srcSet={toWebp(resultPng)} type="image/webp" />
                      <img className="result" src={resultPng} alt="" />
                    </picture>
                  </span></span>
                );
              },
            }}
          />
        </div>
      )}
    </DocumentLayout>
  );
};
