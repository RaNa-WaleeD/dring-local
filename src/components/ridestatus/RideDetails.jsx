import React, { useState } from "react";
import RideTable from "./RideTable";
import { tableColumn } from "../../data/data";
import { faker } from "@faker-js/faker";
import Header from "../Header";

const RideDetails = () => {
  const [selected, setSelected] = useState("Cancel");
  const [users, setUsers] = useState([]);

  const handleTabClick = (tab) => {
    setSelected(tab);
  };
  return (
    <>
      <Header />
      <div className="mt-11 mx-5">
        <div className="flex justify-end">
          {/* <PrimaryTitle title={"All Users"} /> */}
          <div className=" h-[45px] flex  border border-solid rounded-lg py-0 justify-around items-center">
            <button
              onClick={() => {
                handleTabClick("Inprogress");
                // fetchUsers();
              }}
              className={`text-[#FF8000]  hover:rounded-lg text-[16px] font-medium  px-[54px] py-[6px] cursor-pointer ${
                selected === "Inprogress"
                  ? `bg-[#FF8000] text-[white] rounded-lg`
                  : ""
              } `}
            >
              Inprogress
            </button>
            <button
              onClick={() => {
                handleTabClick("Completed");
                // fetchUsers(1);
              }}
              className={`text-[#FF8000]  hover:rounded-lg text-[16px] font-medium  px-[54px] py-[6px] cursor-pointer ${
                selected === "Completed"
                  ? `bg-[#FF8000] text-[white] rounded-lg`
                  : ""
              } `}
            >
              Completed
            </button>
            <button
              onClick={() => {
                handleTabClick("Cancel");
                // fetchUsers(0);
              }}
              className={`text-[#FF8000]  hover:rounded-lg text-[16px] font-medium  px-[48px] py-[6px] cursor-pointer ${
                selected === "Cancel"
                  ? `bg-[#FF8000] text-[white] rounded-lg`
                  : ""
              } `}
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-9"></div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20">
        <table className="w-full text-sm text-left text-gray-500 none:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 none:bg-gray-700 none:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                {/* <label htmlFor="checkbox-all-search" className="sr-only">
                  {tableColumn[0].title}
                </label> */}
                <div className="flex items-center"></div>
              </th>
              {tableColumn.map((e) => {
                return (
                  <th key={e.id} scope="col" className="px-3 py-3">
                    {e.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, user) => {
              // const user = {
              //   id: e._id,
              //   createdAt: faker.date.birthdate(),
              //   profilePhoto: faker.image.avatar(),
              //   firstName: faker.name.firstName(),
              //   email: faker.name.lastName(),
              //   role: "Merchant",
              //   location: "{ address: faker.address.country }",
              // };
              return <RideTable key={e._id} user={user} />;
            })}
            {/* {users?.map((user) => {
          return <UserTableItem key={user._id} user={user} cb={cb} />;
        })} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RideDetails;
