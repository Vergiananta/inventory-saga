import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { findById, save } from "../../actions/unit";
import Container from "../../components/Container";

function UnitForm({
  error, isLoading, unit, savedUnit,
  findById, save
}) {
  const [model, setModel] = useState({});
  const history = useHistory();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      findById(id);
    }
  }, [id, findById]);

  useEffect(() => {
    if (id && unit) {
      setModel({ ...unit });
    }
  }, [unit]);

  useEffect(() => {
    if (savedUnit) {
      history.push('/units');
    }
  }, [savedUnit, history]);

  const onSubmit = () => {
    save(model);
  };

  return (
    <Container error={error}>
      {
        !isLoading ?
          <form>
            <div>
              <label>
                Code
                <input value={model.code || ''} onChange={e => setModel({ ...model, code: e.target.value })} />
              </label>
            </div>
            <div>
              <label>
                Description
                <input value={model.description || ''} onChange={e => setModel({ ...model, description: e.target.value })} />
              </label>
            </div>
            <div>
              <input type="button" value="Save" onClick={onSubmit} />
            </div>
          </form> :
          <div>Loading</div>
      }
      <Link to="/units">Back</Link>
      </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.findUnitById.error || state.saveUnit.error,
    isLoading: state.findUnitById.loading || state.saveUnit.loading,
    unit: state.findUnitById.data,
    savedUnit: state.saveUnit.data
  }
};

const mapDispatchToProps = { findById, save };

export default connect(mapStateToProps, mapDispatchToProps)(UnitForm);