import styles from "./ProductCard.module.css";
import ImgSlideShow from "./ImgSliceShow/ImgSlideShow";

function BorderExample({ data }) {
  const disprice = Math.floor(Number(data.price) - Number(data.price) * Number(data.discountPercentage) /100)
  return (
    <>
      <div className={styles.card} title={`Discounted Price is ₹${disprice}`}>
        <ImgSlideShow data={data} />
        <div className={styles.RnP}>
          <h7 className={styles.title}>{data.title}</h7>
          <p className={styles.rating} title="User Rating">⭐{data.rating}</p>
        </div>
        <div className={styles.PnD}>
          <p className={styles.price} title={`Discounted Price is ₹${disprice}`}>₹{data.price}</p>
          <p className={styles.discount}>-{data.discountPercentage}%</p>
        </div>
        <p className={styles.description}>{data.description}</p>
      </div>
      <br />
    </>
  );
}

export default BorderExample;
