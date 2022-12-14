import React from "react";
import VanillaCookie from "./VanillaCookie";
import ChocolateCookie from "./ChocolateCookie";
function Results(props) {
  return (
    <div className="UI-container">
      <h1>Your order is ready!</h1>
      {props.results.flavour === "vanilla" ? <VanillaCookie /> : <ChocolateCookie />}
      {/* <svg className="cookie" width="401" height="400" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M106.603 20.1483C100.43 14.6608 70.9347 3 64.7613 3C58.5879 3 29.0928 13.289 21.5476 20.1483C14.0023 27.0076 3.71336 54.4449 3.02742 64.0479C2.34149 73.651 14.6882 103.146 21.5476 107.948C28.4069 112.749 55.8441 125.096 64.7613 125.096C73.6785 125.096 99.7437 113.435 106.603 107.948C113.463 102.46 125.809 73.651 125.809 64.0479C125.809 54.4449 112.777 25.6357 106.603 20.1483Z"
          fill="#FFEFD2"
        />
        <path
          d="M106.603 20.1483C100.43 14.6608 70.9347 3 64.7613 3C58.5879 3 29.0928 13.289 21.5476 20.1483C14.0023 27.0076 3.71336 54.4449 3.02742 64.0479C2.34149 73.651 14.6882 103.146 21.5476 107.948C28.4069 112.749 55.8441 125.096 64.7613 125.096C73.6785 125.096 99.7437 113.435 106.603 107.948C113.463 102.46 125.809 73.651 125.809 64.0479C125.809 54.4449 112.777 25.6357 106.603 20.1483Z"
          fill="url(#paint0_radial_71_219)"
        />
        <path
          d="M106.603 20.1483C100.43 14.6608 70.9347 3 64.7613 3C58.5879 3 29.0928 13.289 21.5476 20.1483C14.0023 27.0076 3.71336 54.4449 3.02742 64.0479C2.34149 73.651 14.6882 103.146 21.5476 107.948C28.4069 112.749 55.8441 125.096 64.7613 125.096C73.6785 125.096 99.7437 113.435 106.603 107.948C113.463 102.46 125.809 73.651 125.809 64.0479C125.809 54.4449 112.777 25.6357 106.603 20.1483Z"
          stroke="#DDAF6D"
          strokeWidth="5"
        />
        <circle cx="71.5932" cy="55.1308" r="1.37186" fill="white" />
        <path
          d="M44.9083 62.7449C47.6521 66.8605 61.3706 84.0089 65.4863 81.951C69.602 79.893 82.6347 67.5467 85.3784 62.7449C88.1221 57.9432 87.7106 50.9468 80.5769 47.6543C73.4432 44.3618 66.1723 55.8855 65.4863 55.8856C64.8002 55.8858 57.2552 43.8131 49.024 47.6543C40.7928 51.4955 42.1645 58.6294 44.9083 62.7449Z"
          fill="#E02955"
        />
        <path
          d="M44.9083 62.7449C47.6521 66.8605 61.3706 84.0089 65.4863 81.951C69.602 79.893 82.6347 67.5467 85.3784 62.7449C88.1221 57.9432 87.7106 50.9468 80.5769 47.6543C73.4432 44.3618 66.1723 55.8855 65.4863 55.8856C64.8002 55.8858 57.2552 43.8131 49.024 47.6543C40.7928 51.4955 42.1645 58.6294 44.9083 62.7449Z"
          fill="url(#paint1_linear_71_219)"
        />
        <path
          d="M44.9083 62.7449C47.6521 66.8605 61.3706 84.0089 65.4863 81.951C69.602 79.893 82.6347 67.5467 85.3784 62.7449C88.1221 57.9432 87.7106 50.9468 80.5769 47.6543C73.4432 44.3618 66.1723 55.8855 65.4863 55.8856C64.8002 55.8858 57.2552 43.8131 49.024 47.6543C40.7928 51.4955 42.1645 58.6294 44.9083 62.7449Z"
          stroke="#B6193F"
          strokeWidth="2"
        />
        <path
          d="M101.058 26.0674C95.7481 21.3198 70.3782 11.2312 65.0682 11.2312C59.7582 11.2312 34.3882 20.1329 27.8982 26.0674C21.4082 32.0018 12.5582 55.7397 11.9682 64.0479C11.3782 72.3562 21.9982 97.8744 27.8982 102.029C33.7982 106.183 57.3981 116.865 65.0682 116.865C72.7382 116.865 95.1581 106.776 101.058 102.029C106.958 97.281 117.578 72.3562 117.578 64.0479C117.578 55.7397 106.368 30.8149 101.058 26.0674Z"
          stroke="#DDAF6D"
          strokeWidth="2"
        />
        <circle cx="45.5277" cy="55.1308" r="1.37186" fill="white" />
        <ellipse cx="51.0152" cy="50.8442" rx="3.62565" ry="1.955" transform="rotate(-25.954 51.0152 50.8442)" fill="white" />
        <ellipse cx="76.0324" cy="50.7058" rx="2.74373" ry="1.37186" transform="rotate(-25.954 76.0324 50.7058)" fill="white" />
        <defs>
          <radialGradient id="paint0_radial_71_219" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(167 196.5) rotate(-128.424) scale(246.991 288.689)">
            <stop stopColor="#DDAF6D" />
            <stop offset="1" stopColor="#DDAF6D" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="paint1_linear_71_219" x1="52" y1="44" x2="59" y2="65" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B6193F" />
            <stop offset="1" stopColor="#B6193F" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg> */}

      <div className="result_wrapper">
        <h2>Your daily digital behaviour is equivalent to</h2>
        <h2 className="cookie_count">{props.results.calculationQuantity}</h2>
        <h2>{props.results.calculationQuantity === 1 ? "cookie" : "cookies"}</h2>

        <div className="buttons_wrapper">
          <button type="secondary" onClick={props.getMore}>
            How do we know?
          </button>
          <button onClick={props.getOrder}>Bake again</button>
        </div>
      </div>
    </div>
  );
}

export default Results;
