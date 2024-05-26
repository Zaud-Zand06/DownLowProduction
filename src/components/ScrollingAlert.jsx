function ScrollingAlert() {
  const text = "Did you know we do Catering? (123) 123-1234 for more details!";
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
