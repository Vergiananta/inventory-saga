import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { findAll, removeById } from "../../actions/unit";
import Container from "../../components/Container";

function UnitRow({ data, onDelete }) {
  return (
    <tr>
      <td><Link to={`/units/${data.id}/form`}>{data.id}</Link></td>
      <td>{data.code}</td>
      <td>{data.description}</td>
      <td><button onClick={onDelete}>Delete</button></td>
    </tr>
  );
}

function UnitList({
  error, isLoading, isRemoved, units,
  findAll, removeById
}) {
  const onReload = () => {
    findAll();
  };

  const onDelete = (id) => {
    removeById(id);
  };

  useEffect(onReload, []);

  useEffect(() => {
    if (isRemoved) {
      onReload();
    }
  }, [isRemoved]);

  return (
    <Container error={error}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            !isLoading ?
              units.map((e, i) => <UnitRow key={i} data={e} onDelete={() => onDelete(e.id)} />) :
              <tr>
                <td colSpan="4">Loading</td>
              </tr>
          }
        </tbody>
      </table>
      <button onClick={onReload}>Reload</button>
      <Link to="/units/form">Add</Link>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.findAllUnit.error || state.removeUnitById.error,
    isLoading: state.findAllUnit.loading || state.removeUnitById.loading,
    isRemoved: state.removeUnitById.data,
    units: state.findAllUnit.data || []
  }
};

const mapDispatchToProps = { findAll, removeById };

export default connect(mapStateToProps, mapDispatchToProps)(UnitList);
