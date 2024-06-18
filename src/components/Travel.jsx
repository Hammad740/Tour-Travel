import destinations from '../destination';
const Travel = ({ price, place, setPrice, setPlace }) => {
  function add(cost, name) {
    setPlace([...place, name]);
    setPrice(price + cost);
  }
  return (
    <div className="main">
      <h4>Our premium packages</h4>
      <div className="container">
        <div className="row">
          {destinations.map((item, index) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4"
              key={index}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <img src={item.url} alt="" className="img-fluid" />
                  <p className="card-text">
                    <span className="price-badge">
                      {item.day} Days : ${item.price}
                    </span>
                  </p>
                  <button
                    className=" btn-2"
                    onClick={() => add(item.price, item.name)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Travel;
