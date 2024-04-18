import React, { useEffect, useState } from "react";
import style from "./detail.module.css";
import { Button } from "@mui/material";

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
  const [selectedOptions, setSelectedOptions] = useState([]); // State to store selected options

  const [isOpenRegion, setIsOpenRegion] = useState(false); // Adding state for dropdown

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
    { name: "SSD SATA, ГБ", value: "ssd_sata", minSize: 120, maxSize: 3840 },
    { name: "HDD SATA", value: "hdd_sata", minSize: 500, maxSize: 10000 },
    { name: "SSD NVMe", value: "ssd_nvme", minSize: 500, maxSize: 15360 },
    { name: "MicroSD", value: "micro_sd" },
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
            className={style.slider}
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
    options.push({ name: "Объем RAM", value: `${selectedRAM} ГБ` });

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
      options.push({ name: "Размер диска", value: `${diskSize} ГБ` });
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
    setSelectedOptions(options); // Update selected options
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
  return (
    <div
      className={style.configuration_container}
      style={{
        display: "flex",
        marginLeft: "20%",
        marginTop: "5%",
        gap: "10%",
      }}
    >
      <div className={style.configuration_container_first}>
        <div className={style.config_proccessor}>
          <h3>Процессоры</h3>
          <div className={style.dropdown}>
            <button
              className={style.dropbtn}
              onClick={() => setIsOpenRegion(!isOpenRegion)}
            >
              {selectedProcessor || "Все процессоры"} ▼
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
          <h3>Ядра, шт</h3>
          <input
            type="range"
            min="2"
            max="198"
            value={selectedCores}
            onChange={handleCoresChange}
            className={style.slider}
          />
          <span>{selectedCores}</span>
        </div>
        <div className={style.ram_container}>
          <h3>Объем RAM, ГБ</h3>
          <input
            type="range"
            min="4"
            max="1536"
            value={selectedRAM}
            onChange={handleRAMChange}
            className={style.slider}
          />
          <span>{selectedRAM}</span>
        </div>
      </div>
      <div className={style.configuration_container_second}>
        <div className={style.discs_container}>
          <h3>Диски</h3>
          {renderDiskOptions()}
        </div>
        <div className={style.features_container}>
          <h3>Особенности конфигурации</h3>
          <label>
            <input
              type="checkbox"
              checked={selectedGPU}
              onChange={handleGPUSelect}
            />
            GPU
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedPowerSupply}
              onChange={handlePowerSupplySelect}
            />
            2 блока питания
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedKVM}
              onChange={handleKVMSelect}
            />
            KVM-консоль
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedPrivateNetwork}
              onChange={handlePrivateNetworkSelect}
            />
            Приватная сеть
          </label>
        </div>
      </div>
      <div className={style.total_price_container}>
        <h3>Общая сумма: {totalPrice} сом</h3>
        <div className={style.selected_options}>
          {selectedOptions.map((option, index) => (
            <div key={index} className={style.selected_option}>
              {option.name}: {option.value}
            </div>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          <Button
            onClick={handleResetFilters}
            variant="outlined"
            color="primary"
          >
            Сбросить фильтры
          </Button>
          <Button variant="contained" style={{ backgroundColor: "gold" }}>
            Заказать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
