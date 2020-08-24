import React, {useState} from 'react'
import PackageContext from "./Context"

const Provider = (props) => {

    const [mission, setMission] = useState({
        mission_name: "Go to Russia",
        agent: 101,
        accept: "Not accepted",
    })

    return (
      <PackageContext.Provider
        value={{
          data: mission,
          isMissionAccepted: () => {
            setMission({ ...mission, accept: "ACCEPTED" });
          },
        }}
      >
        {props.children}
      </PackageContext.Provider>
    );
}

export default Provider