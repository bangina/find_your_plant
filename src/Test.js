import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState("");

  const [condition, setCondition] = useState({
    light: "",
    grwhstle: "",
    lefcolr: "",
    lefmrk: "",
  });

  const handleChange = (e) => {
    setCondition({
      ...condition,
      [e.target.name]: e.target.value,
    });
  };
  //식물 리스트
  const onClickHandler = () => {
    const url = `https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/garden/gardenList?apiKey=20200630BP2VOQ4XJKJ48VMYQ3AJTQ&lightChkVal=${condition.light}&grwhstleChkVal=${condition.grwhstle}&lefcolrChkVal=${condition.lefcolr}&lefmrkChkVal=${condition.lefmrk}&numOfRows=217`;
    axios.get(url).then((response) => {
      var parseString = require("xml2js").parseString;
      var xml = response.data;
      parseString(xml, function (err, result) {
        setData(result.response.body[0].items[0]);
      });
    });
  };
  //식물 상세
  const onClickHandler2 = () => {
    const url = `https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/garden/gardenDtl?apiKey=20200630BP2VOQ4XJKJ48VMYQ3AJTQ&cntntsNo=16449`;
    axios.get(url).then((response) => {
      var parseString = require("xml2js").parseString;
      var xml = response.data;
      parseString(xml, function (err, result) {
        var item = result.response.body[0].item[0];
        console.log(result.response.body[0]);
        var results = `${item.string}, ${item.plntbneNm}, ${item.adviseInfo}`; //여기다 필요한 키값 다 해서 뽑기 ㅠ
        setData2(results);
      });
    });
  };

  return (
    <div>
      <p> 광도 </p>{" "}
      <label>
        <input
          type="radio"
          name="light"
          value="055001"
          onChange={(e) => handleChange(e)}
        />
        낮은광도{" "}
      </label>{" "}
      <label>
        <input
          type="radio"
          name="light"
          value="055002"
          onChange={(e) => handleChange(e)}
        />
        중간광도{" "}
      </label>{" "}
      <label>
        <input
          type="radio"
          name="light"
          value="055003"
          onChange={(e) => handleChange(e)}
        />
        높은광도{" "}
      </label>{" "}
      <p> 생육형태 </p>{" "}
      <label>
        <input
          type="radio"
          name="grwhstle"
          value="054001"
          onChange={(e) => handleChange(e)}
        />
        직립형{" "}
      </label>{" "}
      <label>
        <input
          type="radio"
          name="grwhstle"
          value="054002"
          onChange={(e) => handleChange(e)}
        />
        관목형{" "}
      </label>{" "}
      <label>
        <input
          type="radio"
          name="grwhstle"
          value="054003"
          onChange={(e) => handleChange(e)}
        />
        덩굴성{" "}
      </label>{" "}
      <p> 잎색 </p>{" "}
      <label>
        <input
          type="radio"
          name="lefcolr"
          value="069001"
          onChange={(e) => handleChange(e)}
        />
        녹색, 연두색{" "}
      </label>{" "}
      <label>
        <input
          type="radio"
          name="lefcolr"
          value="069002"
          onChange={(e) => handleChange(e)}
        />
        금색, 노란색{" "}
      </label>{" "}
      <label>
        <input
          type="radio"
          name="lefcolr"
          value="069003"
          onChange={(e) => handleChange(e)}
        />
        흰색, 크림색{" "}
      </label>{" "}
      <p> 잎무늬 </p>{" "}
      <label>
        <input
          type="radio"
          name="lefmrk"
          value="070001"
          onChange={(e) => handleChange(e)}
        />
        줄무늬{" "}
      </label>{" "}
      <label>
        <input
          type="radio"
          name="lefmrk"
          value="070002"
          onChange={(e) => handleChange(e)}
        />
        점무늬{" "}
      </label>{" "}
      <label>
        <input
          type="radio"
          name="lefmrk"
          value="070003"
          onChange={(e) => handleChange(e)}
        />
        잎 가장자리 무늬{" "}
      </label>{" "}
      <div>
        <button onClick={() => onClickHandler()}> 리스트 결과 </button>{" "}
        <button onClick={() => onClickHandler2()}> 상세 결과 </button>{" "}
      </div>{" "}
      <div>
        {" "}
        {data && (
          <textarea
            cols={100}
            rows={30}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}{" "}
      </div>
      <div>
        {" "}
        {data2 && (
          <textarea
            cols={100}
            rows={30}
            value={JSON.stringify(data2, null, 2)}
            readOnly={true}
          />
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default Test;
