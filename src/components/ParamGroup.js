import React, { useState } from 'react';

const isValidProp = (prop) => /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(prop);

const ParamGroup = () => {
  const [params, setParams] = useState([{ prop: '', value: '' }]);

  const handleAdd = () => {
    setParams([...params, { prop: '', value: '' }]);
  };

  const handleRemove = (index) => {
    const newParams = params.filter((_, i) => i !== index);
    setParams(newParams);
  };

  const handleChange = (index, key, value) => {
    const newParams = params.map((param, i) =>
      i === index ? { ...param, [key]: value } : param
    );
    setParams(newParams);
  };

  const canAddMore = params.every(param => param.prop && isValidProp(param.prop) && param.value);

  return (
    <div>
      {params.map((param, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', marginBottom: '5px' }}>
            <div style={{ marginRight: '10px' }}>
              <input
                type="text"
                placeholder="属性名"
                value={param.prop}
                onChange={(e) => handleChange(index, 'prop', e.target.value)}
                style={{ marginBottom: '5px' }}
              />
              {!param.prop && <div style={{ color: 'red' }}>属性名不能为空</div>}
            </div>

            <div>
              <input
                type="text"
                placeholder="值"
                value={param.value}
                onChange={(e) => handleChange(index, 'value', e.target.value)}
                style={{ marginBottom: '5px' }}
              />
              {!param.value && <div style={{ color: 'red' }}>值不能为空</div>}
            </div>

            <div style={{marginLeft:8}}>
            {params.length > 1 && (
              <button onClick={() => handleRemove(index)}>-</button>
            )}
            {index === params.length - 1 && canAddMore && (
              <button onClick={handleAdd}>+</button>
            )}
          </div>
          </div>


        </div>
      ))}
    </div>
  );
};

export default ParamGroup;
