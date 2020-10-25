import SkeletonElement from './skeleton-element';
import './skeleton.css';

const SkeletonArticle = (props) => {
  return ( 
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonElement type="title"/>
        <SkeletonElement type="text"/>
        <SkeletonElement type="text"/>
        <SkeletonElement type="text"/>
      </div>
    </div>
   );
}
 
export default SkeletonArticle;