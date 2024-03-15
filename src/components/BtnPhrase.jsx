import getRandomFromArray from "../utils/getRandomFromArray";
import phrases from "../utils/phrases.json";
import arrImage from "../utils/arrImage.json";
import "./style/BtnCard.css"


const BtnPhrase = ({ setPhraseRandom, setimgSelect }) => {

  const hadleClick = () => {

    const phrase = getRandomFromArray(phrases);
    const backGround = getRandomFromArray(arrImage);

    setimgSelect(backGround)
    setPhraseRandom(phrase);
  };

  return <button className="btn__phrase" onClick={hadleClick}>Abir Galleta</button>;

};

export default BtnPhrase;
