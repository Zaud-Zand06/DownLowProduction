function ScrollingAlert() {
  const text = "Check back soon for our next East Van Collab!";
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
