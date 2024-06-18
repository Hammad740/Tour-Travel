const Pricing = ({ places, price }) => {
  return (
    <div className="pricing">
      <h1>Trips</h1>
      <div className="row">
        <div className="col-sm-12 mb-3 mb-sm-0">
          <div className="card pricing-card">
            <div className="card-body">
              <h4 className="card-title cost">Total Cost: ${price}</h4>
              <h3 className="card-text">
                {places.map((item, index) => (
                  <li
                    className="places"
                    style={{ listStyle: 'none', padding: '8px 0' }}
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
