function ScrollingAlert() {
  const text =
    "Come by our East Van location on Italian Day and try our italian chicken skewers!";
  const repetitions = 10;
  const repeatedText = Array(repetitions).fill(text).join(" ");

  return (
    <div className="scrollContainer">
      <div className="horizontalScrollingItems">
        <div className="horizontalScrollingItemsItems">{repeatedText}</div>
        <div className="horizontalScrollingItemsItems">{repeatedText}</div>
      </div>
    </div>
  );
}

export default ScrollingAlert;
