import React from "react";
import { faker } from "@faker-js/faker";

const RideTable = () => {
  return (
    <>
      <tr className="bg-white border-b ">
        {/* <td className="px-3 py-4 font-medium text-">
          {faker.address.direction()}
        </td> */}

        <td className="px-3 py-4 font-medium text-">
          <div className="flex items-center">
            {/* {user.createdAt} */}
            {faker.address.direction.toString}
          </div>
        </td>

        {/* <th
          scope="row"
          className="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap none:text-white"
        >
          <div className="pl-3">
            <div className="text-base font-semibold">
            
            </div>
            <div className="font-normal text-gray-500">
              {faker.address.cardinalDirection()}
            </div>
          </div>
        </th> */}
        <td className="px-3 py-4 font-medium">
          {faker.address.nearbyGPSCoordinate()}
        </td>
        <td className="px-3 py-4 font-medium">
          {faker.address.ordinalDirection()}
        </td>

        <td className="px-3 py-4 font-medium">
          {faker.date.recent.toString()}
        </td>
        <td className="px-3 py-4 font-medium text-[12px] max-w-[150px] cursor-pointer">
          {/* <p onClick={(_) => null}>{user.location?.address}</p> */}
          $24
        </td>

        <td className="px-3 py-4 cursor-pointer text-red-500 text-normal">
          {/* {<FaBars onClick={(_) => setShowModal(true)} />} */}
          {/* {faker.} */}Inprogress
        </td>
      </tr>
    </>
  );
};

export default RideTable;
