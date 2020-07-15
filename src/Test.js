import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState(null);

  const [condition, setCondition] = useState({
    light: "",
    grwhstle: "",
    lefcolr: "",
    lefmrk: "",
  });

  const handleChange = (e) => {
    setCondition({ ...condition, [e.target.name]: e.target.value });
  };

  const onClickHandler = () => {
    const url =
      "https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/garden/gardenList?apiKey=20200630BP2VOQ4XJKJ48VMYQ3AJTQ" +
      "&lightChkVal=" +
      condition.light +
      "&grwhstleChkVal=" +
      condition.grwhstle +
      "&lefcolrChkVal=" +
      condition.lefcolr +
      "&lefmrkChkVal=" +
      condition.lefmrk;
    console.log(url);

    axios.get(url).then((response) => {
      setData(response.data);
    });
  };

  return (
    <div>
      <p>광도</p>
      <label>
        <input
          type="radio"
          name="light"
          value="055001"
          onChange={(e) => handleChange(e)}
        />
        낮은광도
      </label>
      <label>
        <input
          type="radio"
          name="light"
          value="055002"
          onChange={(e) => handleChange(e)}
        />
        중간광도
      </label>
      <label>
        <input
          type="radio"
          name="light"
          value="055003"
          onChange={(e) => handleChange(e)}
        />
        높은광도
      </label>

      <p>생육형태</p>
      <label>
        <input
          type="radio"
          name="grwhstle"
          value="054001"
          onChange={(e) => handleChange(e)}
        />
        직립형
      </label>
      <label>
        <input
          type="radio"
          name="grwhstle"
          value="054002"
          onChange={(e) => handleChange(e)}
        />
        관목형
      </label>
      <label>
        <input
          type="radio"
          name="grwhstle"
          value="054003"
          onChange={(e) => handleChange(e)}
        />
        덩굴성
      </label>

      <p>잎색</p>
      <label>
        <input
          type="radio"
          name="lefcolr"
          value="069001"
          onChange={(e) => handleChange(e)}
        />
        녹색,연두색
      </label>
      <label>
        <input
          type="radio"
          name="lefcolr"
          value="069002"
          onChange={(e) => handleChange(e)}
        />
        금색, 노란색
      </label>
      <label>
        <input
          type="radio"
          name="lefcolr"
          value="069003"
          onChange={(e) => handleChange(e)}
        />
        흰색, 크림색
      </label>

      <p>잎무늬</p>
      <label>
        <input
          type="radio"
          name="lefmrk"
          value="070001"
          onChange={(e) => handleChange(e)}
        />
        줄무늬
      </label>
      <label>
        <input
          type="radio"
          name="lefmrk"
          value="070002"
          onChange={(e) => handleChange(e)}
        />
        점무늬
      </label>
      <label>
        <input
          type="radio"
          name="lefmrk"
          value="070003"
          onChange={(e) => handleChange(e)}
        />
        잎 가장자리 무늬
      </label>
      <div>
        <button onClick={() => onClickHandler()}>결과</button>
      </div>
      <div>
        {data && (
          <textarea
            cols={100}
            rows={30}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div>
    </div>
  );
};

export default Test;
