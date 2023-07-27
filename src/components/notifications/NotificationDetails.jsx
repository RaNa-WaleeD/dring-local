import { faker } from "@faker-js/faker";
import React from "react";

const NotificationDetails = () => {
  return (
    <>
      <div className="bg-white  rounded-lg  mt-16    mx-32  border-solid border-1  border-black">
        <div className="p-[6px] ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
            <>
              <div className="mt-[15px] font-[Inter]  items-center  ">
                <p className="ml-4 pb-2.5 font-normal text-[14px]">
                  {faker.lorem.sentence()}
                </p>
              </div>
              <div className=" border-solid border-0 border-t w-full text-[#A5A5A5]"></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotificationDetails;
