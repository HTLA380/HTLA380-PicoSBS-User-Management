import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SelectDropDownMenu from "@/components/drawer/SelectDropDownMenu";
import { PiExportBold } from "react-icons/pi";

const roleOptionData = [
  { id: 1, name: "Administrator", value: "administrator" },
  { id: 2, name: "Analyst", value: "analyst" },
  { id: 3, name: "Developer", value: "developer" },
  { id: 4, name: "Support", value: "support" },
  { id: 5, name: "Tiral", value: "tiral" },
];

const formatOptionData = [
  { id: 1, name: "Excel" },
  { id: 2, name: "PDF" },
  { id: 3, name: "CVS" },
  { id: 4, name: "ZIP" },
];

const Export = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-6 py-3 text-sm text-blue-500 rounded-md bg-blue-50 hover:bg-blue-500 hover:text-white">
        <PiExportBold size={15} />
        Export
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 overflow-y-auto">
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <Dialog.Overlay
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
          />

          <div className="fixed inset-0 flex items-center justify-center w-screen p-4">
            {/* The actual dialog panel  */}
            <Transition.Child
              as={Fragment}
              enter="transition ease duration-500 transform"
              enterFrom="opacity-0 translate-y-12"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease duration-500 transform"
              leaveFrom="opacity-100 translate-y-12"
              leaveTo="opacity-0 translate-y-12">
              <Dialog.Panel className="w-full max-w-[40.625rem] mx-auto bg-white rounded">
                <div className="flex items-center justify-between p-5 border-b border-b-gray-200">
                  <Dialog.Title className="text-xl font-semibold">
                    Export Users
                  </Dialog.Title>
                  <button
                    className="text-gray-500 hover:text-blue-500"
                    onClick={() => setIsOpen(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>

                <div className="p-5 m-5">
                  <div>
                    <h5 className="text-sm font-medium">Select Roles:</h5>
                    <SelectDropDownMenu
                      placeholder={"Select a role"}
                      options={roleOptionData}
                      selected={selectedRole}
                      setSelected={setSelectedRole}
                    />
                  </div>

                  <div className="mt-8">
                    <h5 className="text-sm font-medium">
                      Select Export Format:{" "}
                      <span className="text-red-500">*</span>
                    </h5>
                    <SelectDropDownMenu
                      placeholder="Select a format"
                      selected={selectedFormat}
                      options={formatOptionData}
                      setSelected={setSelectedFormat}
                    />
                  </div>

                  <div className="flex items-center justify-center w-full gap-3 mt-8">
                    <button className="px-5 py-3 text-sm font-medium text-gray-500 rounded-md bg-gray-50 hover:bg-gray-100">
                      Discard
                    </button>
                    <button className="px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-500/90">
                      Submit
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {/* Full-screen container to center the panel */}
    </>
  );
};

export default Export;
