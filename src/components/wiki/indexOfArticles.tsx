import { useContext } from "react";
import { WikiArticleGroup } from "./articleList";
import { Link, Text, Card, CardHeader, CardPreview, makeStyles } from "@fluentui/react-components";
import { WikiContext } from "./context";

interface ListOfArticlesProps {
  listOfArticles: WikiArticleGroup[];
}

const useStyles = makeStyles({
  root: {
    flexWrap: 'wrap',
    overflow: 'visible',
    height: '100%',
  },
  card: {
    margin: "auto",
    width: '100%',
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'visible',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100vw',
    '> *': {
      margin: '15px',
    },
  }
})

export const IndexOfArticles: React.FC<ListOfArticlesProps> = ({
  listOfArticles,
}) => {
  const { setSelectedArticleId } = useContext(WikiContext);
  const styles = useStyles();
  return (
    <div className="wiki-article-list">
      {listOfArticles.map((article) => {
        return (
          <Card key={`card${article.id}`} className={styles.card} appearance="filled-alternative" >
            <CardHeader
              header={
                <Text size={600}>{article.name}</Text>
              }
            />
            <CardPreview>
              <div className={styles.root}>
                <div className={styles.inner}>
                  {article.articles.map((item) => {
                    return (
                      <Link
                        appearance="subtle"
                        key={"article" + item.id}
                        onClick={(_) => setSelectedArticleId(`${item.id}`)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </CardPreview>
          </Card>
        );
      })}
    </div>
  );
};
