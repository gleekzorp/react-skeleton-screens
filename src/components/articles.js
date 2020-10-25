const { default: SkeletonArticle } = require("../skeletons/skeleton-article")

const Articles = (props) => {
  return (
    <div className="articles">
      <h1>Articles</h1>
      <SkeletonArticle />
      <SkeletonArticle />
      <SkeletonArticle />
    </div>
  );
};

export default Articles;
