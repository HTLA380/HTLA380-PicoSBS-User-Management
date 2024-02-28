import { useState } from "react";

import SelectDropDownMenu from "@/components/drawer/SelectDropDownMenu";
import Modal from "@/components/modals/Modal";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaRegCircleXmark, FaXmark } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { PiExportBold } from "react-icons/pi";

import {
  scaleUpTransition,
  slideInUpTransition,
} from "@/utils/transitionConfig";
import LoadingSvg from "@/utils/LoadingSvg";

// ============================================================

const roleOptionData = [
  { id: 1, name: "Administrator", value: "administrator" },
  { id: 2, name: "Analyst", value: "analyst" },
  { id: 3, name: "Developer", value: "developer" },
  { id: 4, name: "Support", value: "support" },
  { id: 5, name: "Trial", value: "trial" },
];

const formatOptionData = [
  { id: 1, name: "Excel" },
  { id: 2, name: "PDF" },
  { id: 3, name: "CSV" },
  { id: 4, name: "ZIP" },
];

// ============================================================

const ExportModal = () => {
  const [showMainModal, setShowMainModal] = useState(false);
  const [showSubmitAlert, setShowSubmitAlert] = useState(false);
  const [showDiscardAlert, setShowDiscardAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEmptyField, setIsEmptyField] = useState(false);

  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);

  const handleDiscardClick = () => {
    setAlertType("warning");
    setShowDiscardAlert(true);
  };

  const handleSubmitClick = () => {
    if (!selectedFormat) {
      setAlertType("danger");
      setShowSubmitAlert(true);
      setIsEmptyField(true);
      return;
    }

    setLoading(true);
    setIsEmptyField(false);

    setTimeout(() => {
      setAlertType("success");
      setShowSubmitAlert(true);
      setLoading(false);
    }, 1500);
  };

  const closeModal = () => {
    setAlertType(null);
    setShowDiscardAlert(false);
    setShowSubmitAlert(false);
    setShowMainModal(false);
  };

  const mainModalButton = (
    <button
      onClick={() => setShowMainModal(true)}
      className="flex items-center gap-2 px-6 py-3 text-sm text-blue-500 rounded-md bg-blue-50 hover:bg-blue-500 hover:text-white">
      <PiExportBold size={15} />
      Export
    </button>
  );

  const modalHeader = (
    <div className="flex items-center justify-between p-5 border-b border-b-gray-200">
      <h5 className="text-xl font-semibold">Export Users</h5>

      <button
        className="text-gray-500 hover:text-blue-500"
        onClick={() => setShowMainModal(false)}>
        <FaXmark />
      </button>
    </div>
  );

  const modalBody = (
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
          Select Export Format: <span className="text-red-500">*</span>
        </h5>
        <SelectDropDownMenu
          placeholder="Select a format"
          selected={selectedFormat}
          options={formatOptionData}
          setSelected={setSelectedFormat}
        />
        {isEmptyField && (
          <p className="m-2 text-xs text-red-600">File format is required</p>
        )}
      </div>

      <div className="flex items-center justify-center w-full gap-3 mt-8">
        {/* ========== Discard Button Modal ========== */}
        <Modal
          open={showDiscardAlert}
          onClose={setShowDiscardAlert}
          transition={scaleUpTransition}
          button={
            <button
              onClick={handleDiscardClick}
              className="px-5 py-3 text-sm font-medium text-gray-500 rounded-md bg-gray-50 hover:bg-gray-100">
              Discard
            </button>
          }>
          <div>
            {alertType === "warning" ? (
              <Alert
                icon={
                  <AiOutlineExclamationCircle className="w-20 h-20 text-yellow-300" />
                }
                text="Are you sure you would like to cancel?"
                actionButton={
                  <>
                    <button
                      onClick={closeModal}
                      className="px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-500/90">
                      Yes, cancel it!
                    </button>
                    <button
                      onClick={() => setAlertType("danger")}
                      className="px-5 py-3 text-sm font-medium text-gray-800 bg-transparent rounded-md hover:bg-gray-100 hover:text-gray-500">
                      No return
                    </button>
                  </>
                }
              />
            ) : (
              <Alert
                icon={<FaRegCircleXmark className="w-20 h-20 text-red-400" />}
                text="Your Form has been canceled."
                actionButton={
                  <button
                    onClick={() => setShowDiscardAlert(false)}
                    className="px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-500/90">
                    OK, got it
                  </button>
                }
              />
            )}
          </div>
        </Modal>
        {/* ========== ========== ========== ========== */}

        {/* ========== Submit Button Modal ========== */}
        <Modal
          open={showSubmitAlert}
          onClose={setShowSubmitAlert}
          transition={scaleUpTransition}
          button={
            <button
              onClick={handleSubmitClick}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium text-white rounded-md hover:bg-blue-500/90 ${
                loading ? "bg-blue-400 pointer-events-none" : "bg-blue-500"
              }`}>
              {loading ? (
                <>
                  Please wait...
                  <LoadingSvg />
                </>
              ) : (
                <>Submit</>
              )}
            </button>
          }>
          <div>
            {alertType === "success" ? (
              <Alert
                icon={<CiCircleCheck className="w-20 h-20 text-green-400" />}
                text="User list has been successfully exported!"
                actionButton={
                  <button
                    onClick={() => closeModal()}
                    className="px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-500/90">
                    OK, got it
                  </button>
                }
              />
            ) : (
              <Alert
                icon={<FaRegCircleXmark className="w-20 h-20 text-red-400" />}
                text="Sorry, looks like there are some errors detected, please try again."
                actionButton={
                  <button
                    onClick={() => setShowSubmitAlert(false)}
                    className="px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-500/90">
                    OK, got it
                  </button>
                }
              />
            )}
          </div>
        </Modal>
      </div>
    </div>
  );

  return (
    <Modal
      button={mainModalButton}
      open={showMainModal}
      onClose={setShowMainModal}
      transition={slideInUpTransition}>
      <div className="w-full max-w-[40.625rem] mx-auto bg-white rounded">
        {modalHeader}
        {modalBody}
      </div>
    </Modal>
  );
};

const Alert = ({ icon, text, actionButton }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[26.25rem] gap-6 mx-auto bg-white rounded-md p-4 h-72">
      <span className="block">{icon}</span>
      <p className="w-2/3 text-sm text-center text-gray-800">{text}</p>
      <div className="flex items-center gap-2">{actionButton}</div>
    </div>
  );
};

export default ExportModal;
