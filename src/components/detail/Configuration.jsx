import React, { useEffect, useState } from "react";
import style from "./detail.module.css";
import { Modal, Backdrop, Fade, Button } from "@mui/material";
import Order from "./Order";

const Configuration = () => {
  const [selectedProcessor, setSelectedProcessor] = useState(null);
  const [selectedCores, setSelectedCores] = useState(2);
  const [selectedRAM, setSelectedRAM] = useState(4);
  const [selectedDisk, setSelectedDisk] = useState(null);
  const [diskSize, setDiskSize] = useState(null);
  const [selectedGPU, setSelectedGPU] = useState(false);
  const [selectedPowerSupply, setSelectedPowerSupply] = useState(false);
  const [selectedKVM, setSelectedKVM] = useState(false);
  const [selectedPrivateNetwork, setSelectedPrivateNetwork] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [isOpenRegion, setIsOpenRegion] = useState(false);

  const handleCoresChange = (event) => {
    setSelectedCores(parseInt(event.target.value));
  };

  const handleRAMChange = (event) => {
    setSelectedRAM(parseInt(event.target.value));
  };

  const handleDiskSelect = (disk) => {
    setSelectedDisk(disk);
    setDiskSize(null);
  };

  const handleDiskSizeChange = (event) => {
    setDiskSize(parseInt(event.target.value));
  };

  const handleGPUSelect = () => {
    setSelectedGPU(!selectedGPU);
  };

  const handlePowerSupplySelect = () => {
    setSelectedPowerSupply(!selectedPowerSupply);
  };

  const handleKVMSelect = () => {
    setSelectedKVM(!selectedKVM);
  };

  const handlePrivateNetworkSelect = () => {
    setSelectedPrivateNetwork(!selectedPrivateNetwork);
  };

  const handleProcessorSelect = (event) => {
    setSelectedProcessor(event.target.value);
  };

  const getProcessorOptions = () => {
    return [
      { name: "Intel", value: "intel" },
      { name: "AMD", value: "amd" },
      { name: "Ampere", value: "ampere" },
      { name: "Apple", value: "apple" },
      { name: "Broadcom", value: "broadcom" },
    ];
  };

  const diskOptions = [
    { name: "SSD NVMe, ГБ", value: "ssd_nvme", minSize: 0, maxSize: 2000 },
    { name: "HDD, ГБ", value: "hdd_sata", minSize: 0, maxSize: 10000 },
  ];

  const renderDiskOptions = () => {
    return diskOptions.map((disk) => (
      <div key={disk.value}>
        <label style={{ display: "flex" }}>
          <input
            type="checkbox"
            name="disk"
            value={disk.value}
            checked={selectedDisk === disk.value}
            onChange={() => handleDiskSelect(disk.value)}
          />
          {disk.name}
        </label>
        {selectedDisk === disk.value && renderDiskSlider(disk)}
      </div>
    ));
  };

  const renderDiskSlider = (disk) => {
    if (
      selectedDisk === "ssd_sata" ||
      selectedDisk === "hdd_sata" ||
      selectedDisk === "ssd_nvme"
    ) {
      const minSize = disk.minSize;
      const maxSize = disk.maxSize;
      return (
        <div className={style.slider_container}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>1x{minSize}</span>
            <span>2x{maxSize}</span>
          </div>
          <input
            type="range"
            min={minSize}
            max={maxSize}
            value={diskSize || ""}
            onChange={handleDiskSizeChange}
            className={`${style.slider} custom-slider`}
          />
          <span>{diskSize}</span>
        </div>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [
    selectedProcessor,
    selectedCores,
    selectedRAM,
    selectedDisk,
    diskSize,
    selectedGPU,
    selectedPowerSupply,
    selectedKVM,
    selectedPrivateNetwork,
  ]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    const options = [];

    const processorPrices = {
      intel: 100,
      amd: 90,
      ampere: 110,
      apple: 120,
      broadcom: 80,
    };
    if (selectedProcessor) {
      totalPrice += processorPrices[selectedProcessor];
      options.push({ name: "Процессор", value: selectedProcessor });
    }

    const corePrice = 5;
    totalPrice += corePrice * selectedCores;
    options.push({ name: "Ядра", value: selectedCores });

    const ramPrice = selectedRAM * 2;
    totalPrice += ramPrice;
    options.push({ name: "Объем RAM", value: `${selectedRAM} ГБ ` });

    const diskPrices = {
      ssd_sata: 10,
      hdd_sata: 8,
      ssd_nvme: 15,
      micro_sd: 5,
    };
    if (selectedDisk) {
      totalPrice += diskPrices[selectedDisk];
      options.push({ name: "Диск", value: selectedDisk });
    }
    if (diskSize) {
      totalPrice += diskSize * 0.01;
      options.push({ name: "Размер диска", value: ` ${diskSize} ГБ ` });
    }

    const additionalOptionsPrices = {
      gpu: 50,
      powerSupply: 20,
      kvm: 30,
      privateNetwork: 40,
    };
    if (selectedGPU) {
      totalPrice += additionalOptionsPrices.gpu;
      options.push({ name: "GPU", value: "Да" });
    }
    if (selectedPowerSupply) {
      totalPrice += additionalOptionsPrices.powerSupply;
      options.push({
        name: "Дополнительный блок питания",
        value: "Да",
      });
    }
    if (selectedKVM) {
      totalPrice += additionalOptionsPrices.kvm;
      options.push({ name: "KVM-консоль", value: "Да" });
    }
    if (selectedPrivateNetwork) {
      totalPrice += additionalOptionsPrices.privateNetwork;
      options.push({ name: "Приватная сеть", value: "Да" });
    }

    setTotalPrice(totalPrice);
    setSelectedOptions(options);
  };
  const handleResetFilters = () => {
    setSelectedProcessor(null);
    setSelectedCores(2);
    setSelectedRAM(4);
    setSelectedDisk(null);
    setDiskSize(null);
    setSelectedGPU(false);
    setSelectedPowerSupply(false);
    setSelectedKVM(false);
    setSelectedPrivateNetwork(false);
  };

  const [openModal, setOpenModal] = useState(false);

  // модальное окно
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedFileName(file.name);
  };

  const handlePayment = () => {};

  return (
    <div>
      <div>
        <div
          className={style.configuration_container}
          style={{
            display: "flex",
            marginLeft: "40%",
            marginTop: "4%",
          }}
        >
          <div className={style.container__block1}>
            <div className={style.configuration_container_first}>
              <div
                className={style.config_proccessor}
                style={{ marginTop: "15%" }}
              >
                <h3 style={{ fontSize: "20px" }}>Процессоры</h3>
                <div className={style.dropdown}>
                  <button
                    className={style.dropbtn}
                    onClick={() => setIsOpenRegion(!isOpenRegion)}
                  >
                    {selectedProcessor || "Процессоры"} ▼
                  </button>
                  {isOpenRegion && (
                    <div className={style.dropdown_content}>
                      {getProcessorOptions().map((processor) => (
                        <label key={processor.value}>
                          <input
                            type="radio"
                            name="processor"
                            value={processor.value}
                            onChange={handleProcessorSelect}
                            checked={selectedProcessor === processor.value}
                          />
                          {processor.name}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className={style.cores_container}>
                <h3 style={{ fontSize: "20px" }}>Ядра, шт</h3>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={selectedCores}
                  onChange={handleCoresChange}
                  className={style.range}
                />
                <span>{selectedCores}</span>
              </div>

              <div className={style.ram_container}>
                <h3 style={{ fontSize: "20px" }}>Объем RAM, ГБ</h3>
                <input
                  type="range"
                  min="0"
                  max="256"
                  value={selectedRAM}
                  onChange={handleRAMChange}
                  className={style.range}
                />
                <span>{selectedRAM}</span>
              </div>
            </div>
            <div className={style.configuration_container_second}>
              <div
                style={{ fontSize: "15px" }}
                className={style.discs_container}
              >
                <h3 style={{ fontSize: "20px", marginTop: "38%" }}>Диски</h3>
                {renderDiskOptions()}
              </div>
              <div className={style.features_container}>
                <h3 style={{ fontSize: "20px" }}>Особенности</h3>
                <div className={style.checkboxes}>
                  <label style={{ fontSize: "15px" }}>
                    <input
                      type="checkbox"
                      checked={selectedGPU}
                      onChange={handleGPUSelect}
                    />
                    GPU
                  </label>
                  <label style={{ fontSize: "15px" }}>
                    <input
                      type="checkbox"
                      checked={selectedPowerSupply}
                      onChange={handlePowerSupplySelect}
                    />
                    2 блока питания
                  </label>
                  <label style={{ fontSize: "15px" }}>
                    <input
                      type="checkbox"
                      checked={selectedKVM}
                      onChange={handleKVMSelect}
                    />
                    KVM-консоль
                  </label>
                  <label style={{ fontSize: "15px" }}>
                    <input
                      type="checkbox"
                      checked={selectedPrivateNetwork}
                      onChange={handlePrivateNetworkSelect}
                    />
                    Приватная сеть
                  </label>
                </div>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.cardContent}>
                <h5>
                  Итого: {totalPrice}
                  <span style={{ fontSize: "15px" }}> сом в месяц</span>
                </h5>
                <button
                  onClick={handleOpenModal}
                  className={`${style.button} ${style.button_order}`}
                >
                  Заказать
                </button>
                <button
                  onClick={handleResetFilters}
                  className={`${style.button2} ${style.button_reset}`}
                >
                  Сбросить фильтры
                </button>
              </div>
            </div>
          </div>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={handleCloseModal}
            closeAfterTransition
            sx={{ textAlign: "justify" }}
          >
            <Fade
              style={{
                marginLeft: "30%",
                marginTop: "3%",
                borderRadius: "10px",
                width: "40%",
                height: "80%",
                textAlign: "justify",
              }}
              in={openModal}
            >
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  padding: "90px",
                }}
                className={style.modal}
              >
                <div className={style.selected_options}>
                  {selectedOptions.map((option, index) => (
                    <div key={index} className={style.selected_option}>
                      {option.name}: {option.value}
                    </div>
                  ))}
                  <div style={{ marginTop: "5%" }}>
                    <h4>Итого: {totalPrice} сом в месяц</h4>
                  </div>
                </div>
                <h3 style={{ marginTop: "30px" }} id="transition-modal-title">
                  Как можно оплатить
                </h3>
                <p style={{ marginBottom: "2%" }}>О!Деньги: 996501304053</p>
                <p style={{ marginBottom: "10%" }}>Mbank: 996501304053</p>
                <Button
                  variant="outlined"
                  component="label"
                  style={{
                    transition: "background-color 0.3s",
                    marginBottom: "-20%",
                    marginTop: "-6%",
                    "&:hover": {
                      backgroundColor: "#4caf50",
                    },
                  }}
                >
                  {selectedFileName ? selectedFileName : "Прикрепить чек"}
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </Button>
                <Button
                  style={{
                    marginTop: "23%",
                    marginBottom: "-15%",
                    backgroundColor: "green",
                    width: "26vh",
                  }}
                  variant="contained"
                  onClick={handlePayment}
                >
                  Оплатить
                </Button>
              </div>
            </Fade>
          </Modal>
        </div>

        <Order />
      </div>
    </div>
  );
};

export default Configuration;
