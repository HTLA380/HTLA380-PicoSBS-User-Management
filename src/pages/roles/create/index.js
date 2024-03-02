import Breadcrumbs from "@/components/Breadcrumbs";
import Layout from "@/components/Layout";
import Button from "@/components/form/button/Button";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/Input";
import { faArrowLeft, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const roleRequire = [
  "User",
  "Role",
  "Supplier",
  "Customer",
  "Product",
  "Variation",
  "Selling Price Groups",
  "Unit",
  "Uom",
  "Category",
  "Brand",
  "Warranty",
  "Manufacture",
  "Generic",
  "Pos",
  "Purchase",
  "Sell",
  "Stock Transfer",
  "Stock Adjustment",
  "Opening Stock",
  "Cash & Payment",
  "Expense",
  "Module",
  "Exchange Rate",
  "Reservation",
  "Restaurant",
  "Room Management",
  "Stockin",
  "Stockout",
];
const CreateRole = () => {
  return (
    <Layout>
      <div className="w-full h-full">
        <div className="my-2">
          <Button
            leftIcon={faArrowLeft}
            className="text-gray-400 bg-transparent hover:bg-gray-200">
            Back
          </Button>
        </div>
        <div className="px-8 overflow-auto bg-white rounded-xl">
          <div className="pt-6">
            <h1 className="font-semibold text-gray-700 text-md">Role Add</h1>
            <div>
              <Breadcrumbs />
            </div>
          </div>
          <div className="w-full mt-5">
            <Input labelText="Role name" placeholder="Enter a role name" />
          </div>
          <div className="mt-5">
            <h1 className="font-semibold text-gray-700 text-md">
              Role Permissions
            </h1>
            <div className="flex gap-10 pb-5 mt-5">
              <div className="flex items-center gap-3 w-[13rem]">
                <h1 className="font-semibold text-gray-600 text-md">
                  Administrator Access
                </h1>
                <div className="flex items-center justify-center w-4 h-4 bg-gray-400 rounded-full">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    size="xs"
                    className="text-white"
                  />
                </div>
              </div>
              <div>
                <Checkbox labelText="Select all" />
              </div>
            </div>
            {roleRequire &&
              roleRequire.map((name, index) => (
                <div
                  className="flex items-center gap-10 py-5 border-t border-dashed"
                  key={index}>
                  <h1 className="text-sm text-left w-[13rem]">{name}</h1>
                  <div className="flex items-center w-full gap-10">
                    <div>
                      <Checkbox labelText="Select all" />
                    </div>
                    <div>
                      <Checkbox labelText="View" />
                    </div>
                    <div>
                      <Checkbox labelText="Create" />
                    </div>
                    <div>
                      <Checkbox labelText="Update" />
                    </div>
                    <div>
                      <Checkbox labelText="Delete" />
                    </div>
                    <div>
                      <Checkbox labelText="Import" />
                    </div>
                    <div className={`${name === "Module" ? "hidden" : ""}`}>
                      <Checkbox labelText="Export" />
                    </div>
                    <div className={`${name === "Module" ? "hidden" : ""}`}>
                      <Checkbox labelText="Print" />
                    </div>
                    {name === "Cash & Payment" && (
                      <div>
                        <Checkbox labelText="Transfer" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="flex items-center justify-center pb-5 mt-10">
            <Button className="text-white">Create Role</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateRole;
