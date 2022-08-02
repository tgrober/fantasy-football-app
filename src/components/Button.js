
export default function Button(props) {

  function buttonClick() {
    console.log("button clicked");
    console.log(props);
  }

  return (
    <>
      <button onClick={buttonClick} className="yearButton">{props.year}</button>
    </>
  );
};
