function DashboardCards() {
  const cards = [
    {
      id: 1,
      title: "Total Orders",
      value: "128",
      icon: "bi-bag-check-fill",
      color: "primary",
      change: "+12%"
    },
    {
      id: 2,
      title: "Active Bookings",
      value: "08",
      icon: "bi-calendar-check-fill",
      color: "success",
      change: "+5%"
    },
    {
      id: 3,
      title: "Wallet Balance",
      value: "₹2,850",
      icon: "bi-wallet2",
      color: "warning",
      change: "+18%"
    },
    {
      id: 4,
      title: "Subscription",
      value: "Premium",
      icon: "bi-stars",
      color: "danger",
      change: "Active"
    }
  ];

  return (
    <div className="row g-4">

      {cards.map((card) => (

        <div
          className="col-xl-3 col-lg-6 col-md-6"
          key={card.id}
        >

          <div className="stats-card">

            <div className="stats-icon">

              <div className={`icon-circle bg-${card.color}`}>

                <i className={`bi ${card.icon}`}></i>

              </div>

            </div>

            <div className="stats-content">

              <span className="stats-title">
                {card.title}
              </span>

              <h3 className="stats-value">
                {card.value}
              </h3>

              <small className="stats-change">

                <i className="bi bi-arrow-up"></i>

                {card.change}

              </small>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default DashboardCards;