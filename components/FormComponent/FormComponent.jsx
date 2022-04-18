import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCity, fetchProvince } from '../../redux/slices/fareSlice';

const FormComponent = () => {
  const [provinceId, setProvinceId] = useState('');
  const [cityId, setCityId] = useState('');
  const [gram, setGram] = useState(0);
  const [courier, setCourier] = useState('');

  const dispatch = useDispatch();
  const { cityLoading, cityData, provinceLoading, provinceData, error } = useSelector((state) => state.fareReducers);
  useEffect(() => {
    dispatch(fetchProvince());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCity(provinceId));
  }, [provinceId]);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Provinsi Asal {provinceId}</Form.Label>
        <Form.Select onChange={(e) => setProvinceId(e.target.value)}>
          {provinceLoading ? <option>Loading Data..</option> : <option>Masukkan Provinsi</option>}
          {provinceLoading ? (
            <option>Loading Data..</option>
          ) : provinceData ? (
            provinceData.rajaongkir.results.map((data) => {
              return <option value={data.province_id}>{data.province}</option>;
            })
          ) : (
            <option>{error ? 'Data Gagal Di Muat' : 'Data Province Kosong'}</option>
          )}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Kota Asal {cityId}</Form.Label>
        <Form.Select onChange={(e) => setCityId(e.target.value)}>
          {cityLoading ? <option>Loading Data..</option> : <option>Masukkan Kota / Kabupaten</option>}
          {cityLoading ? (
            <option>Loading Data..</option>
          ) : cityData ? (
            cityData.rajaongkir.results.map((data) => {
              return (
                <option value={data.city_id}>
                  {data.type} {data.city_name}
                </option>
              );
            })
          ) : (
            <option>{error ? 'Data Gagal Di Muat' : 'Data Province Kosong'}</option>
          )}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Berat (Gram) {gram}</Form.Label>
        <Form.Control type="number" value={gram} onChange={(e) => setGram(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Layanan Kurir {courier}</Form.Label>
        <Form.Select onChange={(e) => setCourier(e.target.value)}>
          <option>Pilih Kurir</option>
          <option value="pos">POS Indonesia</option>
          <option value="jne">JNE</option>
          <option value="tiki">Tiki</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
