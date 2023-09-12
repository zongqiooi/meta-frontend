function DessertsList(props) {
  let filteredDessert = props.data.filter((dessert) => dessert.calories < 500); 
  let sortedDessert = filteredDessert.sort((a, b) => a.calories - b.calories);
  let finalDessert = sortedDessert.map((dessert) => <li>{dessert.name} - {dessert.calories} cal.</li>);
  
  return (<div>
    <ul>
      {finalDessert}
    </ul>
  </div>);
}

export default DessertsList;
