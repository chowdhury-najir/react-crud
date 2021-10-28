import React, { useEffect, useState } from "react";
import SanctionTypeCard from "./SanctionTypeCard";
import { Container, Spinner } from "react-bootstrap";
import Services from "../../services/Services";

const SanctionTypeList = () => {
  const [state, setState] = useState({
    loading: false,
    sanctionTypeData: [],
    hasError: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    debugger;
    Services.getSanctionList()
      .then((res) => {
        setState({
          sanctionTypeData: res,
          loading: false,
          hasError: false,
        });
      })
      .catch((err) =>
        err.message !== ""
          ? setState({
              sanctionTypeData: [],
              loading: false,
              hasError: true,
            })
          : setErrorMessage(err.message)
      );
  }, []);

  // console.log(state.sanctionTypeData);

  function renderSanctionTypeData() {
    if (state.loading)
      return (
        <div className="loadingSpinner">
          <Spinner animation="border" variant="primary" />
        </div>
      );
    if (state.hasError)
      return (
        <div className="errorMessage">
          <b>Error:</b> {errorMessage}!
        </div>
      );
    return <SanctionTypeCard sanctionTypeData={state.sanctionTypeData} />;
  }

  return (
    <div className = "kt-mainpanel">
        <Container>
      <SanctionTypeCard />
      {renderSanctionTypeData()}
    </Container>
    </div>
    
  );
};

export default SanctionTypeList;
