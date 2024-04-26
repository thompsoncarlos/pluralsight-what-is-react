import { useState } from "react";

export default function Home() {
  
  function ListItem({ ints}) {
    // const ints = [1, 2, 3];
    return (
      <>
        {
          ints.map(id => {
            return (
              <li>{id}</li>
            )
          })
        }
      </>
    );
  }
  const [ints, setInts] = useState([1, 2, 3]);
  return (
   <ul>
    <ListItem ints={ints}/>
   </ul>
  );
}
