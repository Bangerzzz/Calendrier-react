const Menu = ({
  setCurrentMonthPosition,
  currentMonthPosition,
  theDay,
  theMonth,
  theYear,
  setCurrentYearPosition,
  currentYearPosition,
  isOpenModal,
  setIsOpenModal,
}) => {
  return (
    <div className="menu d-flex justify-content-between">
      <div className="d-flex">
        <div className="d-flex">
          <button
            className="btn btn-outline-info mx-1"
            onClick={() => setCurrentMonthPosition(currentMonthPosition - 1)}
          >
            &#60;
          </button>
          <h3>{theMonth.toUpperCase()}</h3>
          <button
            className="btn btn-outline-info mx-1"
            onClick={() => setCurrentMonthPosition(currentMonthPosition + 1)}
          >
            &#62;
          </button>
        </div>
        <div className="d-flex">
          <button
            className="btn btn-outline-info mx-1"
            onClick={() => setCurrentYearPosition(currentYearPosition - 1)}
          >
            &#60;
          </button>
          <h3>{theYear}</h3>
          <button
            className="btn btn-outline-info mx-1"
            onClick={() => setCurrentYearPosition(currentYearPosition + 1)}
          >
            &#62;
          </button>
        </div>
      </div>
      <div>
        <p>
          Aujourd'hui: {theDay}&nbsp;{theMonth}&nbsp;{theYear}
        </p>
      </div>
      <div>
        <button
          className="btn btn-outline-success mx-1"
          onClick={() => setIsOpenModal(!isOpenModal)}
        >
          Enregister un rendez-vous
        </button>
      </div>
    </div>
  );
};

export default Menu;
