

const Header2 = () => {
  const List = [
    {
      name: "Bangalore",
    },
    {
      name: "Calcutta",
    },
    {
      name: "Delhi",
    },
    {
      name: "Hyderabad",
    },
    {
      name: "Chennai",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Pune",
    },
  ];

  return <div className="flex px-10 py-3 bg-gray-100 justify-between">
  {
    List.map((e) => {
      return(
<span key={e.name}>{e.name}</span>
      )
    })
  }
  </div>;
};

export default Header2;
