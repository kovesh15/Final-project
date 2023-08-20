import imageshop from "../photo/Shop.png";


export function Home() {
  return (<div>
    <h1>My Store</h1>
    <img src={imageshop} className="logo" height={900} width={1500} alt=""/>
  </div>
  );
}
