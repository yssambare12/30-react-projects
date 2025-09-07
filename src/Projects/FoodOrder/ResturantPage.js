import { useEffect } from "react";

const ResturantPage = () => {
  useEffect(() => {
    datafetch();
  }, []);

  const datafetch = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=151656"
    );
    const json = await data.json();

    console.log(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[12].card.card
        .itemCards
    );
  };

  return (
    <div>
      <h3>BreadCumb -- Home Chhindwara Dev International </h3>
    </div>
  );
};

export default ResturantPage;
